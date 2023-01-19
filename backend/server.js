const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser')
// const { uuid } = require('uuidv4')


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let users=[
    {
        id:0,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:1,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:2,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:3,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:4,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:5,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:6,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    },
    {
        id:7,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg"
    }
]

app.get("/",(req,res)=>{
    res.status(403)
    res.send("hi")
})
app.get("/users",(req,res)=>{
    res.json({
        success:true,
        quantity:users.length,
        data:users
    })
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log("Server is up and running");
});