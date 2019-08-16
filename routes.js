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
    let basket = data.groceries.filter(groceries => groceries.quantity > 0);

    const data2 = {
        'basket': basket
    }

    res.render('checkoutPage', data2)
})

// ROUTE TO EACH INDIVIDUAL ITEM PAGE. 
// Front-end, please do your html + css in the views/items/itemDescription.hbs file we created.
router.get('/description/:id', (req, res) => {
    const id = req.params.id
    const groceryItem = data.groceries.find(groceries => groceries.id == req.params.id) 
    
    res.render('itemDetail', groceryItem)
})

// ROUTE FOR ADDING/REMOVING ITEMS TO CART
router.post('/add/:id', (req, res) => {
    let addItem = data.groceries.find(function(item) {
        return item.id == req.params.id
    })
    addItem.quantity += 1

    fs.writeFile('./data.json', JSON.stringify(data), (err, data) => {
       if (err) {
           console.log('error adding item')
       } else {
           res.redirect('/description/' + req.params.id)
       }
    })
    
})

router.post('/remove/:id', (req, res) => {
    let removeItem = data.groceries.find(function(item) {
        return item.id == req.params.id
    })
    removeItem.quantity -= 1

    fs.writeFile('./data.json', JSON.stringify(data), (err, data) => {
       if (err) {
           console.log('error adding item')
       } else {
           res.redirect('/description/' + req.params.id)
       }
    })
    
})



