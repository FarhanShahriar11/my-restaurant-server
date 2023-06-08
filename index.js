const express = require('express');
const cors = require('cors');
const app=express();
app.use(cors())

const chef=require('./data/chef.json')
app.get('/chef',(req,res)=>{
    res.send(chef);
})
app.get('/chef/:id',(req,res)=>{
     const id=req.params.id;
     console.log(id);
     const selectedChef = chef.find( n => n.id === id);
     res.send(selectedChef);
})

app.get('/',(req,res)=>{
    res.json({message:"hello server running"})
})
app.listen(5000,()=>{
    console.log("server is running port 5000");
})