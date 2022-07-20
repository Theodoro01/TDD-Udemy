const express = require("express")
const app = express()

app.get('/', ( _, res ) => res.json({ msg: true }))

module.exports = app