import express from "express"

const app = express();
const port  = 3000;

app.use(express.urlencoded({ extended: true }));


app.get("/" , (req , res)=>{
    res.render("index.ejs" , {

    })
})

app.post("/ok" , (req , res)=>{
    const len = req.body.first.length + req.body.last.length;
    res.render("index.ejs" , {
        "length" : len
    });
})

app.listen(port , (err)=>{
    if(err){
        console.log("Error is : ",err);
    }else{
        console.log(`Server running on port ${port}.`)
    }
})