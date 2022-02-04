import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';


const app=express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));

app.use('/user',userRoutes);

const PORT=5000;
mongoose.connect("mongodb://localhost:27017/myapp",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`));
    })
    .catch((error)=>{
        console.log(error.message);
    })