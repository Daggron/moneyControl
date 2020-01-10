const Money = require('../models/money');
const Total = require('../models/total');

exports.get = async (req,res)=>{
    let money = await Money.find({}).select('_id title amount date').exec();
    let total = await Total.find({}).select('_id amount').exec();
    res.json({
        money : money,
        total : total
    });
}

exports.post = async (req,res)=>{
    let money = new Money();
    money.title = req.body.title || "";
    money.amount = Number(req.body.amount)|| 0;
    money.save()
    res.json({
        success: "OK"
    })
    
}