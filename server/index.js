const express = require('express');
const mongoose = require('mongoose');
const app = express();


// middleware
app.use(express.json)

mongoose.connect('', {
    useNewUrlParser: true,
})

app.listen(4000, () => {
    console.log('Server is successfully running on port 4000')
})