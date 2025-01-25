import express from "express";
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"))

app.get("/" , async(req,res)=>{
    try{
        const response = await axios.get(API_URL+"/random");
        res.render("index.ejs",{
            secret : response.data.secret,
            user : response.data.username
        }
    )
    }catch(err){
        res.send(err.response.data).sendStatus(404);
    }
   
})

app.listen(port , (err)=>{
    console.log("Server started on port : ",port);
    if(err){
    console.log('Error is : ', err);
    }
})
