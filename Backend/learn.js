const express = require("express");
const app=express();
app.use(express.json());

// Your own logger middleware
function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger); // without these nothing can be visible we dont know who are using the app and which page they used
// with logger we know who used our app but looking into terminal here we get GET/,GET/about like when someone entered into about route it get hots in our terminal

app.get("/",(req,res)=>{
    res.send("Hello from Express");
});


app.get("/about",(req,res)=>{
    res.send("About page");
});
app.post("/users",(req,res)=>{
    res.status(201).send("User created");
});
// app.get("/users",(req,res)=>{
//     res.send("List of users");
// });
app.get("/me",(req,res)=>{
    res.json({name:"Chandini",age:22});
});
app.get("/users/:id",(req,res)=>{
    res.json({userId:req.params.id});
});
app.get("/search",(req,res)=>{
    res.json({name:req.query.name,age:req.query.age});
});

app.get("/welcome",(req,res)=>{
    res.json({message:"Welcome"});
});
// app.get("/users/:id",(req,res)=>{
//     res.json({userId:req.params.id});
// });
// app.get("/admin", requireAuth, (req, res) => {
//   res.json({ message: "Welcome, admin" });
// });

//Middleware
// Type A: Application-Level (Global)
// This runs on every single request that hits your server, no matter the URL.
app.use((req,res,next)=>{
    console.log("A request came in!")
    next();
});

//Route-level= this runs only on 1 specific route
function checkAge(req,res,next){
    if (req.query.age<18){
        return res.status(403).send("Too young");
    }
    next();
}
app.get("/secre",checkAge(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});



