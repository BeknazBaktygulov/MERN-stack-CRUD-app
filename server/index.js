const express = require('express');
const mongoose = require('mongoose');
const app = express();


// middleware
app.use(express.json)

mongoose.connect('mongodb+srv://admin:Outtasystem9!@cluster0.k2u6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.listen(4000, () => {
    console.log('Server is successfully running on port 4000')
})