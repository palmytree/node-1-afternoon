const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))
