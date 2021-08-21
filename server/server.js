const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const todoApi=require("./api/todoApi");

const app=express();
//Enabling Cross Origin Resource Sharing so that our Frontend can talk with our Backend
app.use(cors());

//Body Parser Middleware. We're sending json or object while submitting form in the Frontend
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

//Using dotenv to get access to the .env file in the root directory of server folder
dotenv.config();

//mongoose.Promise=global.Promise; This is a legacy code

//Connecting to the Database and showing message if it was connected or not
mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("Database Connected");
}).catch(error=>{
    console.log(error);
    console.log("Failed DB connection");
});

//Loading the /todoApi router module in our App. Request api from: http://localhost:PortName/todoApi/.. i.e Base Url is: http://localhost:PortName/todoApi
app.use("/todoApi",todoApi);

app.get("/",(req,res)=>{
    res.send("Root Url");
});

//Listening to the desired Port
app.listen(process.env.PORT || 8080,()=>{
    console.log('Listening to PORT: '+process.env.PORT);
});