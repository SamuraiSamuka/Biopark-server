const express = require("express")
const cors = require("cors")
const condominiosRoutes = require("./routes/condominios.routes")
const prediosRoutes = require("./routes/predios.routes")
const apartamentosRoutes = require("./routes/apartamentos.routes")
const locatariosRoutes = require("./routes/locatarios.routes")

const app = express()
const port = 3030

app.use(express.json())
app.use(cors())
app.use(condominiosRoutes)
app.use(prediosRoutes)
app.use(apartamentosRoutes)
app.use(locatariosRoutes)

app.get("/", (req, res) => {
    return res.json("oi")
})

app.listen(port, () =>{
    console.log(`O servidor está rodando na porta ${port}`)
})