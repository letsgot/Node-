const express = require('express');
const app = express();
const { connectToDB } = require('./config/database');
const { User } = require('./Model/user');

// express.json() parses the incoming JSON payload and converts it into a JavaScript object, which is then assigned to req.body.
app.use(express.json());

// Now in this we are creating the user with dynamic way get the data from the postman or browser 
app.post('/signup', async (req, res) => {
    const newUser = req.body;
    try {
        const user = new User(newUser);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send("Something went wrong " + error);
    }
})

// find one user by its mongooose id
app.get('/user', async (req, res) => {
    let userId = req.body._id;
    try {
        let userDetails = await User.findById(userId);
        if (!userDetails) {
            res.status(404).send("User not found");
        }
        res.send(userDetails);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})

// find all user 
app.get('/allUsers', async (req, res) => {
    try {
        // let allUsers = await User.find();  // to find all the documents associated with this collection 
        let allUsers = await User.find({ lastName: "Chauhan" });  // filter apply on all document 
        if (!allUsers) {
            res.status(404).send("User not found");
        }
        res.send(allUsers);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})


// delete the document by _id
app.delete('/deleteUser', async (req, res) => {
    try {
        // let userId = req.body._id;
        // let deletedUser = await User.findByIdAndDelete(userId);  // delete operation by using _id
        let lastName = req.body.lastName; // delete operation by using other fields
        let deletedUser = await User.findOneAndDelete({ "lastName": lastName });
        res.send(deletedUser);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})

// partially replace the field
app.patch('/patchUpdate/:id', async (req, res) => {

    try {
        // validation in controller for ex -- email should not be changed once it has been signed up for this i am handling the validation using this code 
        let updatedData = req.body;
        if (Object.keys(updatedData).includes("email")) {
            throw new Error("Email should be changed");
        }
        let userId = req.params?.id;
        console.log(userId);
        let queryObject = await User.findOneAndUpdate({ _id: userId }, updatedData, { returnDocument: 'after', runValidators: true });
        res.send(queryObject);
    } catch (error) {
        res.status(400).send("Something went wrong " + error);
    }
})

// replace the full document using put http method
app.put('/replaceData', async (req, res) => {
    try {
        let updatedData = req.body;
        let queryObject = await User.findOneAndReplace({ _id: updatedData._id }, updatedData, { returnDocument: 'after' });
        res.send(queryObject);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})


/// here we are passing the hard coded object 
// app.post('/createUser', async (req,res) => {
//     try {
//         let obj = {
//             firstName: "Akshay",
//             lastName: "Saini",
//             gender: "Male",
//             age: "32",
//             mobileNumber: "8282993002"
//         }

//         // creating a new instance of model User 
//         const user = new User(obj);
//         await user.save();
//         res.send("User created successfully");
//     } catch (error) {
//        res.status(400).send("Bad request");
//     }
// })

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

