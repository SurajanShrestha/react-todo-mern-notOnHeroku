const express=require('express');
const dotenv=require('dotenv');

const app=express();
dotenv.config();

app.listen(8080,()=>{
    console.log('Listening to PORT: 8080');
});