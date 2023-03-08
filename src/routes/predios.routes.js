const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prediosRoutes = express.Router();
const prisma = new PrismaClient()

// C
prediosRoutes.post("/predios", async (req, res) => {
    const { condominioid, nome, pisos } = req.body;
    const predio = await prisma.predios.create({data:{nome, condominioid, pisos}})
    return res.status(201).json(predio)
})

// R
prediosRoutes.get("/predios", async (req, res) => {
    const predios = await prisma.predios.findMany()
    return res.status(200).json(predios)
})

// R unique
prediosRoutes.get("/predios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const predioExistente = await prisma.predios.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!predioExistente){
        return res.status(404).json("Esse predio não existe")
    }

    return res.status(200).json(predioExistente)
})

// U
prediosRoutes.put("/predios/:id", async (req, res) => {
    const { condominioid, nome, pisos } = req.body;
    const { id } = req.params;
    let IntId = parseInt(id);
    let condominioidInt = parseInt(condominioid);

    if(!IntId){
        return res.status(400).json("Id é obrigatorio")
    };

    const predioExistente = await prisma.predios.findUnique({
        where: {
            id: IntId
        }
    })

    if(!predioExistente){
        return res.status(404).json("Esse predio não existe")
    }

    const predio = await prisma.predios.update({
        where:{
            id: IntId
        },
        data: {
            nome,
            condominioid: condominioidInt,
            pisos
        }
    })
    return res.status(200).json(predio)
})

// D
prediosRoutes.delete("/predios/:id", async (req, res) => {
    const { id } = req.params;
    let IntId = parseInt(id);
    
    if(!IntId){
        return res.status(400).json("Id é obrigatório")
    };

    const predioExistente = await prisma.predios.findUnique({
        where: {
            id: IntId,
        }
    })

    if(!predioExistente){
        return res.status(404).json("Esse predio não existe")
    }

    await prisma.predios.delete({ where: { id: IntId}})
    return res.status(200).send("Excluido com sucesso")
})

module.exports = prediosRoutes;