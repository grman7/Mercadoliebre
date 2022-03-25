const express = require ('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/views/home.html");
});
app.get("/register",(req,res)=> {
    res.sendFile(__dirname + "/views/register.html");
});
app.get("/login",(req,res)=> {
    res.sendFile(__dirname + "/views/login.html");
});

app.listen (3020,()=> {
    console.log("Servidor online");
});
