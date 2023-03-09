const express = require("express");
const { PrismaClient } = require("@prisma/client");

const apartamentosRoutes = express.Router();
const prisma = new PrismaClient()

// C
apartamentosRoutes.post("/apartamentos", async (req, res) => {
    const { condominioid, predioid, andar, numero, aluguel_valor } = req.body;
    const apartamento = await prisma.apartamentos.create({data:{condominioid, predioid, andar, numero, aluguel_valor}})
    return res.status(201).json(apartamento)
}) 

// R
apartamentosRoutes.get("/apartamentos", async (req, res) => {
    const apartamentos = await prisma.apartamentos.findMany()
    return res.status(200).json(apartamentos)
})

// R unique
apartamentosRoutes.get("/apartamentos/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const apartamentoExistente = await prisma.apartamentos.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!apartamentoExistente){
        return res.status(404).json("Esse apartamento não existe")
    }

    return res.status(200).json(apartamentoExistente)
})

// U
apartamentosRoutes.put("/apartamentos/:id", async (req, res) => {
    const { condominioid, predioid, andar, numero, aluguel_valor, locatarioid, vago } = req.body;
    const { id } = req.params;
    let IntId = parseInt(id);
    let condominioidInt = parseInt(condominioid);
    let predioidInt = parseInt(predioid);
    let locatarioidInt = parseInt(locatarioid);
    const andarInt = parseInt(andar)
    const aluguel_valorFloat = parseFloat(aluguel_valor)

    if(!IntId){
        return res.status(400).json("Id é obrigatorio")
    };

    const apartamentoExistente = await prisma.apartamentos.findUnique({
        where: {
            id: IntId
        }
    })

    const locatarioOcupado = await prisma.apartamentos.findUnique({ where: { locatarioid: locatarioidInt } })

    if(!apartamentoExistente){
        return res.status(404).json("Esse apartamento não existe")
    }

    if(!!locatarioOcupado && !(locatarioOcupado.id === IntId)) {
        return res.status(403).sendStatus(403)
    }

    const apartamento = await prisma.apartamentos.update({
        where:{
            id: IntId
        },
        data: {
            condominioid: condominioidInt,
            predioid: predioidInt, 
            andar: andarInt,
            numero, 
            aluguel_valor: aluguel_valorFloat,
            locatarioid: locatarioidInt,
            vago
        }
    }) 
    return res.status(200).json(apartamento)
})

// D
apartamentosRoutes.delete("/apartamentos/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const apartamentoExistente = await prisma.apartamentos.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!apartamentoExistente){
        return res.status(404).json("Esse apartamento não existe")
    }

    await prisma.apartamentos.delete({ where: { id: IntId}})
    return res.status(200).send("Excluido com sucesso")
})

module.exports = apartamentosRoutes;