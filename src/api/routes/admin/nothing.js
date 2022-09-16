const express = require('express')


const router = new express.Router()

router.get('/test',(req, res) => {
    try {
        res.status(201).send({message: "From nothing"})
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router
