//express import
const express = require("express");
const app = express();
//dotenv
require("dotenv").config();
//cors
const cors = require("cors");
//routes
const signupRoute = require("./Routes/signup.Route");
const registerRoute = require("./Routes/register.Route");
//mogodb
const mongo = require("./Shared/mongo.Shared");
// const { error } = require("console");

async function loadApp() {
    try{

await mongo.connect();

app.use(cors());

app.use(express.json());

app.use((req,res,next) => {
    console.log(`URL ${req.url} method ${req.method} at ${new Date()}`)
    next();
})

app.use("/signup",signupRoute);
app.use("/",registerRoute);

app.listen(3001,() => {
    console.log(`server started running at ${process.env.PORT} port`);
});
    }catch(err){
        console.log(error.message);
        process.exit();
    }
}

loadApp();