import express from "express"

const app = express();
const port = 3000;

app.get("/" , (req,res)=>{
    const obj = {
        "second" : new Date().getSeconds(),
        "items" : [
            "apple",
            "banana",
            "cherry"
        ]
    };
    res.render("index.ejs" , obj);
});

app.listen(port , (err)=>{
    if(err){
        console.log("Error is : ",err);
    }else{
        console.log(`Server running on port ${port}.`);
    }
})