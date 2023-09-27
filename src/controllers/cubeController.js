const router = require('express').Router()
const cubeManager = require('../menagers/cubeManager')
router.get('/create', (req, res) => { 
    res.render('create')
})

router.post('/create', (req, res) => {
    const { name, description, imageUrl, diffultyLevel } = req.body
    cubeManager.create({ name, description, imageUrl, diffultyLevel: Number(diffultyLevel) })
    res.redirect('/')
})

module.exports = router 