const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const cors=require("cors");
const dotenv= require("dotenv");

const app = express();

//Import Routes
const postsRoute = require('./routes/posts');

// Environment variables
dotenv.config({ path: "./config/config.env" });

//Connect Mongodb through mongoose
const connectionString= process.env.uri;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log("Connected to database"))
  .catch((err) => console.log(err));

//Middlewares
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }));  
app.use(cors());

//Routes
app.use('/posts', postsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server listening on port ${PORT} `));
