const express = require("express")
const app = express()

app.get('/', ( _, res ) => res.json({ msg: true }))

app.get("/cor/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa

    if(pessoa == "theo"){
        res.json({cor: "vermelho"})
    }
})

module.exports = app