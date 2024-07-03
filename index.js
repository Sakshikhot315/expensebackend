const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const connect = require('./connect')

const TransactionRoute = require('./route/tracker')

const userRoute = require('./route/user')

app.use(cors())

app.use(express.json())

app.use('/api/transactions',TransactionRoute)

app.use('/api/users',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})