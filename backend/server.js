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
        id:0,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/71p-o3UKQXL._AC_SL1000_.jpg",price:"40.00 - 80.00"
    },
    {
        id:1,name:"Special Item",image:"https://m.media-amazon.com/images/I/71OfYuMCssL._AC_SL1000_.jpg",price:18.00
    },
    {
        id:2,name:"Sale Item",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLXRcYyqcv-PD-rfE__D_KDuCr81uff-NmmK2aUfufMz_RwjRCXab9Mz0VawPdRL1_Jc&usqp=CAU",price:25.00
    },
    {
        id:3,name:"Popular Item",image:"https://www.casadeco.com/media/collections/resized/x600/5f0831e4a84cd.jpg",price:40.00
    },
    {
        id:4,name:"Sale Item",image:"https://m.media-amazon.com/images/I/91tLahVtu3L._AC_SX522_.jpg",price:25.00
    },
    {
        id:5,name:"Fancy Product",image:"https://m.media-amazon.com/images/I/91mL-hD4kWL._AC_SX466_.jpg",price:"120.00-280.00"
    },
    {
        id:6,name:"Special Item",image:"https://m.media-amazon.com/images/I/51V+W5rGFCL._AC_.jpg",price:"18.00"
    },
    {
        id:7,name:"Popular Item",image:"https://www.etoffe.com/197446-category_big/papier-peint-panoramique-jardin-d-hiver-dore-maison-images-d-epinal.jpg",price:"40.00"
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
//! add user
let idCounter=8;
app.post("/users",(req,res)=>{
    const newUser={...req.body,id:idCounter++}
    users=[...users,newUser]
    res.json({
        success:true,
        data:users,
    })
})

app.delete("/users/:id",(req,res)=>{
    const id=req.params.id;
    users=users.filter((u)=>u.id !=id);

    res.json({
        success: true,
        data: users,
      });
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log("Server is up and running");
});