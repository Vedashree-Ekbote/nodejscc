const express=require('express');
const app=express();

const PORT=process.env.PORT||3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base',{title:"login"});
})

app.listen(PORT,()=>console.log("listening"));