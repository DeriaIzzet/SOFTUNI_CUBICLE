const router = require('express').Router()
const accessoryManager = require('../menagers/accessoryManager')

router.get('/create', (req, res) => {
    res.render('accessory/create')
})
router.post('/create', async (req, res) => {
    const body = req.body

    const { name, description, imageUrl } = req.body
    await accessoryManager.create({ name, description, imageUrl })

    console.log(body);
    res.redirect('/')

})

module.exports = router 
