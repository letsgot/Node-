const express = require('express');
const app = express();
const port = 8000;


app.use('/test',(req,res)=>{
    res.status(201).send("hello from test");
})

app.use('/hello',(req,res)=>{
    res.status(201).send("hello from hello");
})

app.use('/',(req,res)=>{
    res.status(201).send("hello from dashboard");
})


app.listen(port,()=>{
    console.log("server is running on port ",port);
})

