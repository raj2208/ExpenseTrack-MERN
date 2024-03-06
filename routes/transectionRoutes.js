const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);
//means that when a POST request is made to the "/add-transection" endpoint, it will be handled by the addTransection function defined in the controller.
//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);

//get transections
router.post("/get-transection", getAllTransection); //this is also post because we are passing userid for transactions

module.exports = router;
//Although in RESTful APIs, GET requests are typically used for retrieving data and POST requests for creating new resources, in some cases, GET requests might be reserved for retrieving static or non-modifiable data. If the endpoint is designed to perform actions such as editing, adding, or deleting transactions, it might be more appropriate to use POST requests to signify that data modification is occurring.
