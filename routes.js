const express = require('express')
const router = express.Router() 
const data = require('./data.json')   

module.exports = router



router.get('/', (req, res) => {
    res.render('groceryItems/store',)
})