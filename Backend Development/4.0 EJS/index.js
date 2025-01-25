import  express from 'express';

const app = express();
const port = 3000;

const day = "weekday";
const advice = "It's time to study."
const temp = new Date().getDay();
if(temp==0 || temp==6){
    day = "weekend";
    advice = "It's time to have fun."
}

app.get("/" , (req , res)=>{
    res.render("index.ejs" , {
        "day" : day  , 
        "advice" : advice
    })
});

app.listen(port , (err)=>{
    if(err){
        console.log("Error is : " , err);
    }else{
        console.log(`Server started on port ${port}.`);
    }
})