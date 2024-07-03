const express = require('express')

const router = express.Router()

const userModel = require('../model/user')

const {Register,Login} = require('../controller/user')

router.post('/register',Register)

router.post('/login',Login)

module.exports=router