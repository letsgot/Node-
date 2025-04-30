// const express = require('express');
// const app = express();
// const port = 8000;

// // order of routes matters 
// // app.use('/test',(req,res)=>{
// //     res.status(201).send("hello from test");
// // })

// // app.use('/hello',(req,res)=>{
// //     res.status(201).send("hello from hello");
// // })

// // app.use('/',(req,res)=>{
// //     res.status(201).send("hello from dashboard");
// // })

// // in this case always 1st one is executed coz it matches the path in express it checks the path from top to bottom 
// // app.use('/test',(req,res)=>{
// //     res.send("Tested");
// // })

// // app.get('/test/data',(req,res)=>{
// //     res.send("tested through another way");
// // })

// // this is right way to do this kind of things 
// // app.get('/test/data',(req,res)=>{
// //     res.send("tested through another way");
// // })
// // app.use('/test',(req,res)=>{
// //     res.send("Tested");
// // })


// //get request
// app.get('/test/data', (req, res) => {
//     res.send("tested through another way");
// })

// //post request
// app.post('/addUser', (req, res) => {
//     res.send({
//         name: "Akshay",
//         age: "20"
//     })
// })

// // delete request
// app.delete('/deleteUser', (req, res) => {
//     res.send("user deleted successfully");
// })

// // Route params (dynamic route) -- identifying a resource 
// app.get('/getUser/:id', (req, res) => {
//     const params = req.params;
//     console.log(params); // { id: '123' } for /getUser/123
//     res.send(JSON.stringify(params));
// });

// app.get('/getUser/:id/:userId/:personId', (req, res) => {
//     const params = req.params;
//     console.log(params); // { id: '123' } for /getUser/123
//     res.send(JSON.stringify(params));  //{"id":"101","userId":"202","personId":"303"}
// });


// // Use params when you're referring to a specific resource (e.g., user ID).

// // Use query when you're providing optional info (e.g., filters, sort options).

// // Query parameters 
// // app.get('/users',(req,res)=>{
// //     console.log(req.query);
// //     res.send(JSON.stringify(req.query));
// // })

// // we can also use regex patter for defining the routes


// app.listen(port, () => {
//     console.log("server is running on port ", port);
// })



////////////////////////////////////MIDDLEWARES STARTED///////////////////////////////////////////
const express = require('express');
const app = express();
const {middlewareForAuth } = require('./middlewares/auth')

// play with this code 
// app.use('/user',(req,res,next)=>{
//    console.log("1st callback");
//    next();
// },
// (req,res,next)=>{
//     console.log("2nd callback");
//     next();
//     res.send("hello2");
// },
// (req,res,next)=>{
//     console.log("3rd callback");
//     next();
// })

// // lets suppose we have to implement the auth code for admin section 
// app.use('/admin',(req,res,next)=>{
//    const token = "abcde";
//    if(token==="abcde"){
//      console.log("user verified successfully");
//      next();
//    }
//    else{
//       res.status(401).send("unauthorized user");
//    }
// })

// app.get('/admin/users',(req,res)=>{
//     res.send("user found successfully");
// })

////////////////-     -------------- Always use try and catch for error handling ---------- //////////////

app.get('/admin/users', middlewareForAuth , (req,res)=>{
    res.send("user found successfully");
})


// at last route write this one route handler in case any of the unknown error occured -- Error handling 
app.use('/',(err,req,res,next)=>{
    res.status(500).send("Something went wrong");
})

app.listen(8000,()=>{
    console.log("server started at 8000");
})