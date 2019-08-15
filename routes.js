const express = require('express')
const router = express.Router() 
const data = require('./data.json')   

module.exports = router


// ROUTE TO MAIN PAGE DISPLAYING ALL ITEMS
router.get('/', (req, res) => {
    res.render('groceryItems/store', data)
})

// ROUTE TO CHECKOUT PAGE
router.get('/checkout', (req, res) => {
    const checkoutItems = // items in checkout area

    data.groceries.price
    res.render('checkout/checkoutPage', _______)
})

// ROUTE TO EACH INDIVIDUAL ITEM PAGE. 
// Front-end, please do your html + css in the views/items/itemDescription.hbs file we created.
router.get('/description/:id', (req, res) => {
    const id = req.params.id
    // const grabId = data.groceries[id -1]

    const groceryItem = data.groceries.find(groceries => groceries.id == req.params.id) 
    console.log(groceryItem)
    res.render('items/itemDescription', groceryItem)
})





