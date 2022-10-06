const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const app = express();
const foodsModel = require('./models/foodsModel');




app.use(cors());

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/restaurant").then(()=>console.log("Connected Successfully !!")).catch(()=>console.log("Failed to connect !!"))

app.get('/viewfoods',(req,res)=> {
    foodsModel.find({},(err,result)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.json(result);
        }
    })
})

app.post("/addfood",async (req,res)=>{
const foods = req.body;
const newFoods =new foodsModel(foods);
await newFoods.save();
res.json(foods);

});


app.put('/updatefood/:id', async (req,res)=>{

const {food,customer,price} = req.body;
  await foodsModel.findByIdAndUpdate(req.params.id,{
        food:food,
        customer:customer,
        price:price
        });

 

    res.send(req.body);
})
app.delete("/deletefood/:id",async (req,res)=>{
    await foodsModel.findByIdAndDelete(req.params.id);

    res.send(req.body);
    
})



app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001/")
})