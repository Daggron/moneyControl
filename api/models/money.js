const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
    title : {
        type:String,
        required : true
    },
    amount:{
        type : Number
    },
    date:{
        type : Date,
        default : Date.now()
    }
},{
    timestamps : true
});

let money = mongoose.model('money',moneySchema);

module.exports = money;