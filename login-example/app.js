const express = require("express");
const session = require("express-session");
const bodyParser=require("body-parser");
const path =require("path");

const app = express();

//midleware
app.use(bodyParser.urlencoded({extended :true}));
app.use(session({
    secret:'mySecretKey',
    resave:false,
    saveUninitalized:true
}));

app.use(express.static(path.join(__dirname,"public")));


const users={
    username:"user",
    password:"password"


};

app.get("/",(req,res)=>{
    if(req.session.loggedIn){
        res.send(`<h1> Welcome ${req.session.username}</h1><a href="/logout">`)
    }
    else
        {
            res.sendFile(path.join(__dirname,"public","login.html"));
        }
    
});

app.post("/login",(req,res)=>{
    const{username,password}=req.body;
    if(username===users.username&&password===users.password){
        req.session.loggedIn=true;
        req.session.username=username;
        res.redirect("/");
    }else{
        res.send("<h1>Invalid username or password</h1><a href='/'>Try again</a>");
    }
});
app.get("/logged",(req,res)=>{
    req.session.destroy((err)=>{
        if(err)throw err;
        res.redirect("/");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });