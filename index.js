import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
import path from 'path';

const app =express();
//this line need to be changed for the directory of config.env
dotenv.config({path:'config.env'});

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>{
    res.send('<h1>Hello to Memories API<h1>');
})


//connect to mongoDB
const PORT = process.env.PORT||5000;

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
    
mongoose.set('useFindAndModify',false);