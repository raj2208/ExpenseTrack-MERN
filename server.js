const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();
//The dotenv.config() function is typically used to load the variables from the .env file into the environment.

//databse call
connectDb();

//rest object
const app = express();
//  === express ke saare features ab hum app ki madad se use kar sakte hai

//*********************************************************
//MIDDLEWARES
//Middleware functions are functions that have access to the request (req) and response (res) objects in an Express application's request-response cycle. They can perform tasks such as authentication, logging, or processing requests before they reach their final route handlers.
app.use(morgan("dev"));
//morgan("dev"): This middleware is from the morgan package and is used for logging HTTP requests.
app.use(express.json());
//This middleware is built into Express and is used to parse incoming JSON payloads from requests.
//
app.use(cors());
//The cors middleware stands for Cross-Origin Resource Sharing. It is used to enable Cross-Origin HTTP requests between different domains. This is especially important when your frontend is hosted on a different domain than your backend API.
//*********************************************************

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//It specifies that any HTTP request with a URL starting with "/api/v1/users" will be handled by the middleware or route defined in userRoute.
//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// //static files
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//we call app.listen() to start the server, specifying the port to listen on.
