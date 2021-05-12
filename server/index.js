const express = require('express');
const mongoose = require('mongoose');
const app = express();

const FoodModel = require('./models/Food')

// middleware
app.use(express.json)

mongoose.connect('mongodb+srv://admin:Outtasystem9!@cluster0.k2u6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/',  async (req, res) => {
    const food = new FoodModel({foodName: "Apple", daySinceIAte: 3  });
    try {
        await food.save();
    } catch(err) {
        console.log(err);
    }
})

app.listen(4000, () => {
    console.log('Server is successfully running on port 4000')
})