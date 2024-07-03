const TransactionModel = require('../model/tracker')

const getTransaction = async (req, res) => {
    try {
        const transaction = await TransactionModel.find()
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTransaction = async (req, res) => {
    try {
        const transaction = await TransactionModel.create(req.body)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json(error)
    }
}

const editTransaction = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await TransactionModel.findByIdAndUpdate(id, req.body)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await TransactionModel.findByIdAndDelete(id)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getTransaction,createTransaction,editTransaction,deleteTransaction}