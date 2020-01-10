const mongoose = require('mongoose');

const totalSchema = new mongoose.Schema({
    amount:{
        type : Number
    }
},{
    timestamps : true
});

let total = mongoose.model('total',totalSchema);

module.exports = total;