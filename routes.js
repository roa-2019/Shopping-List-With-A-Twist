const express = require('express')
const router = express.Router() 
const data = require('./data.json')   

module.exports = router

router.get('/', (req, res) => {
    console.log(data)
    res.render('index',data)
})