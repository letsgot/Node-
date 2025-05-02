const express = require('express');
const app = express();
const { connectToDB } = require('./config/database');
const { User } = require('./Model/user');

app.post('/createUser', async (req,res) => {
    try {
        let obj = {
            firstName: "Akshay",
            lastName: "Saini",
            gender: "Male",
            age: "32",
            mobileNumber: "8282993002"
        }
        
        // creating a new instance of model User 
        const user = new User(obj);
        await user.save();
        res.send("User created successfully");
    } catch (error) {
       res.status(400).send("Bad request");
    }
})

connectToDB().then(() => {
    try {
        app.listen(8000, () => {
            console.log('server running at port 8000');
        })
    } catch (error) {
        console.log(error)
    }
})
    .catch((err) => {
        console.log("something went wrong");
    })

// //database connect before server
// async function serverStarted () {
//   try {
//     await connectToDB();
//     console.log("connect to db");
//     app.listen(8000,()=>{
//         console.log('server running at port 8000');
//     })
//   } catch (error) {
//     console.log("something went wrong",err);
//   }
// }

// serverStarted();

