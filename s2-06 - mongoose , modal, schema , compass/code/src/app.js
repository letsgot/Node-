const express = require('express');
const app = express();
const { connectToDB } = require('./config/database');
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth");
const { profileRouter } = require("./routes/profile");
const { connectionRequestRouter } = require('./routes/connectionRequest');

// express.json() parses the incoming JSON payload and converts it into a JavaScript object, which is then assigned to req.body.
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/request',connectionRequestRouter)

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
        console.log("DB connection failure");
    })