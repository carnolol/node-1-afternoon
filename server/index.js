const express = require('express')
const app = express()
const PORT = 4001
const productsController = require('./getProducts')
app.use(express.json())

console.log(productsController)


app.get('/', (req, res) => {
    res.send('DOES IT WORK?!')
})

app.get('/api/products', productsController.getProducts)
app.get('/api/products/:id', productsController.getOneProduct)
// app.get('api/products', productsController.)

app.listen(PORT, () => console.log(`listening to port ${PORT}`))