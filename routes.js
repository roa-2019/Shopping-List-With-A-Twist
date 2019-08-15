const express = require('express')
const router = express.Router() 
const data = require('./data.json')   

module.exports = router


// ROUTE TO MAIN PAGE
router.get('/', (req, res) => {
    res.render('groceryItems/store',)
})

// ROUTE TO EACH INDIVIDUAL ITEM PAGE. 
// Front-end, please do your html + css in the views/items/itemDescription.hbs file we created.
router.get('/description/:id', (req, res) => {
    const id = req.params.id
    const grabId = data.groceries[id -1]
    res.render('items/itemDescription', grabId)
})





