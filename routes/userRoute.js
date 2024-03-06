const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
//userRoutes ke andar 2 subroutes hai
// POST || LOGIN USER
router.post("/login", loginController); //instead of a callback function we use a controller

//POST || REGISTER USER
router.post("/register", registerController);

module.exports = router;
