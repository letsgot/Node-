const middlewareForAuth = (req, res, next) => {
    const token = "abcdde";
    if (token === "abcde") {
        console.log("user verified successfully");
        next();
    }
    else {
        res.status(401).send("unauthorized user");
    }
}

module.exports = {
    middlewareForAuth
}