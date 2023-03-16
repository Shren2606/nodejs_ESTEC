

const mongoose = require('mongoose');
const url = 
'mongodb+srv://shren:shren@cluster0.8zgf5nk.mongodb.net/Estec_intern_dev'

async function connect(){
    try {
        mongoose.set('strictQuery', true),
        await mongoose.connect("mongodb://127.0.0.1:27017/Estec_intern_dev", { 
       // await mongoose.connect(url, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connected successfully!!!!')
    } catch (error) {
        console.log('connected fail!!!!')
    }
}

module.exports = {connect};