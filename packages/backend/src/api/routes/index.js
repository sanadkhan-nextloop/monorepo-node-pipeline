const express = require('express');
const adminController = require('./admin/test');

const router = new express.Router()

router.use('/v1/admin', adminController)



module.exports = router
