const express = require('express')

const router = express.Router()

const TransactionModel = require('../model/tracker')

const {getTransaction,createTransaction,editTransaction,deleteTransaction} = require('../controller/tracker')

router.get('/get-transactions',getTransaction)

router.post('/create-transactions',createTransaction)

router.put('/edit-transactions/:id',editTransaction)

router.delete('/delete-transactions/:id',deleteTransaction)

module.exports = router