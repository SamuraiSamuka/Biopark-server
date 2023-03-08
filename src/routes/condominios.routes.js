const express = require("express");
const { PrismaClient } = require("@prisma/client");

const condominiosRoutes = express.Router();
const prisma = new PrismaClient()

// C
condominiosRoutes.post("/condominios", async (req, res) => {
    const { nome, uf, cidade, bairro, logradouro, numero } = req.body;
    const condominio = await prisma.condominio.create({data:{nome, uf, cidade, bairro, logradouro, numero}})
    return res.status(201).json(condominio)
})

// R
condominiosRoutes.get("/condominios", async (req, res) => {
    const condominios = await prisma.condominio.findMany()
    return res.status(200).json(condominios)
})

// R unique
condominiosRoutes.get("/condominios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const condominioExistente = await prisma.condominio.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!condominioExistente){
        return res.status(404).json("Esse condominio não existe")
    }

    return res.status(200).json(condominioExistente)
})

// U
condominiosRoutes.put("/condominios/:id", async (req, res) => {
    const { nome, uf, cidade, bairro, logradouro, numero} = req.body;
    const { id } = req.params;
    let IntId = parseInt(id);

    if(!IntId){
        return res.status(400).json("Id é obrigatorio")
    };

    const condominioExistente = await prisma.condominio.findUnique({
        where: {
            id: IntId
        }
    })

    if(!condominioExistente){
        return res.status(404).json("Esse condominio não existe")
    }

    const condominio = await prisma.condominio.update({
        where:{
            id: IntId
        },
        data: {
            nome,
            uf,
            cidade,
            bairro,
            logradouro,
            numero
        }
    })
    return res.status(200).json(condominio)
})

// D
condominiosRoutes.delete("/condominios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const condominioExistente = await prisma.condominio.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!condominioExistente){
        return res.status(404).json("Esse condominio não existe")
    }

    await prisma.condominio.delete({ where: { id: IntId}})
    return res.status(200).send("Excluido com sucesso")
})

module.exports = condominiosRoutes;