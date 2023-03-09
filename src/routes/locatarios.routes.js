const express = require("express");
const { PrismaClient } = require("@prisma/client");

const locatariosRoutes = express.Router();
const prisma = new PrismaClient()

// C
locatariosRoutes.post("/locatarios", async (req, res) => {
    const { nome, cpf, data_nascimento, telefone, apartamentoid } = req.body;
    const locatario = await prisma.locatarios.create({data:{nome, cpf, data_nascimento, telefone, apartamentoid}})
    return res.status(201).json(locatario)
}) 

// R
locatariosRoutes.get("/locatarios", async (req, res) => {
    const locatarios = await prisma.locatarios.findMany()
    return res.status(200).json(locatarios)
})

// R unique
locatariosRoutes.get("/locatarios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const locatarioExistente = await prisma.locatarios.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!locatarioExistente){
        return res.status(404).json("Esse locatario não existe")
    }

    return res.status(200).json(locatarioExistente)
})

// U
locatariosRoutes.put("/locatarios/:id", async (req, res) => {
    const { nome, data_nascimento, cpf, telefone, condominioid, predioid, apartamentoid, status } = req.body;
    const { id } = req.params;
    let IntId = parseInt(id);
    let condominioidInt = parseInt(condominioid);
    let predioidInt = parseInt(predioid);
    let apartamentoidInt = parseInt(apartamentoid);
    const statusInt = parseInt(status)

    if(!IntId){
        return res.status(400).json("Id é obrigatorio")
    };

    const locatarioExistente = await prisma.locatarios.findUnique({
        where: {
            id: IntId
        }
    })

    const apartamentoOcupado = await prisma.locatarios.findUnique({ where: { apartamentoid: apartamentoidInt } })

    if(!locatarioExistente){
        return res.status(404).json("Esse locatario não existe")
    }

    if(!!apartamentoOcupado) {
        if(!(apartamentoOcupado.id === IntId)) return res.status(403).sendStatus(403)
    }

    const locatario = await prisma.locatarios.update({
        where:{
            id: IntId
        },
        data: {
            condominioid: condominioidInt,
            predioid: predioidInt, 
            apartamentoid: apartamentoidInt,
            nome,
            data_nascimento, 
            cpf, 
            telefone, 
            status: statusInt
        }
    }) 
    return res.status(200).json(locatario)
})

// D
locatariosRoutes.delete("/locatarios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const locatarioExistente = await prisma.locatarios.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!locatarioExistente){
        return res.status(404).json("Esse locatario não existe")
    }

    await prisma.locatarios.delete({ where: { id: IntId}})
    return res.status(200).send("Excluido com sucesso")
})

module.exports = locatariosRoutes;