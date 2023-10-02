const router = require('express').Router()

router.get('/create', (req,res) => {
    res.render('accessory/create')
})
 router.post('/create',(req,res) =>{
    const body = req.body
       // const { name, description, imageUrl} = req.body
      //  cubeManager.create({ name, description, imageUrl})
      console.log(body);
       res.redirect('/')
    
 })

module.exports = router