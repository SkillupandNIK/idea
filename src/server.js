
const express = require('express')
require('dotenv').config()

//à améliorer avec dotenv pour avoir un port non constant et être sur de pouvoir lancer le serveur si hébergé etc...
const PORT =  8080 || process.env.PORT

const app = express()

app.listen(PORT, () => {
    console.log(`Server lancé sur : ${PORT}`)

})

app.get("/", () => {
    console.log(`Sur la racine`)
})