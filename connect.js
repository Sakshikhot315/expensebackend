const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sakshikhot315:dudul@sak.0qjzlza.mongodb.net/?retryWrites=true&w=majority&appName=sak')
    .then(() => {
        console.log("MongoDB Connected")
    }).catch((err) => {
        console.log("MongoDB Not Connected",err)
    })