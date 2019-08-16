const express = require('express')
const router = express.Router() 
const data = require('./data.json')   
const fs = require('fs')

module.exports = router


// ROUTE TO MAIN PAGE DISPLAYING ALL ITEMS
router.get('/', (req, res) => {
    res.render('index', data)
})

// ROUTE TO CHECKOUT PAGE
router.get('/checkout', (req, res) => {
    res.render('checkout/checkoutPage', checkoutItems)
})

// ROUTE TO EACH INDIVIDUAL ITEM PAGE. 
// Front-end, please do your html + css in the views/items/itemDescription.hbs file we created.
router.get('/description/:id', (req, res) => {
    const id = req.params.id
    const groceryItem = data.groceries.find(groceries => groceries.id == req.params.id) 
    
    res.render('itemDetail', groceryItem)
})

// ROUTE FOR ADDING/REMOVING ITEMS TO CART
router.post('/description/:id', (req, res) => {
    
    console.log(req.body.name)
    req.body.add
    req.body.remove

    // fs.writeFile('./data.json', JSON.stringify(data), (err, data) => {
        // if add, increase quantity by 1
        // if remove, decrease quantity by 1
    // })
    res.render('')
})



