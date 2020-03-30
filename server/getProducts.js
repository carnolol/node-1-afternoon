const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        if (req.query.price) {
            const filteredProductByPrice = products.filter(product => {
            //  product.price >= +req.query.price ? product : null
              // these are the same code, with and without a turnary. 
               return product.price >= +req.query.price
            })
           res.status(200).send(filteredProductByPrice)
        } else {
            res.status(200).send(products)
        }
    },
    getOneProduct: (req, res) => {
        const product = products.find(e => {
            return e.id === +req.params.id
        })
        if (product) {
            res.status(200).send(product)
        } else {
            res.status(404).send('NO PRODUCT HERE FRIEND')
        }
    },
    // getProductPrice: (req,res) => {
    //     if(req.query.price){
    //         const filteredProductByPrice = products.filter(product => {
    //            return product.price >= +req.query.price
    //         })
    //         res.status(200).send(filteredProductByPrice)
    //     } else {
    //         res.status(200).send(products)
    //     }
    // }
}

