const userModel = require("../models/userModel");

// login callback async taaki error handling kar paye
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body; // destructure email and password.....if you had token then you would have had to use req.headers
    //The findOne() method finds and returns one document that matches the given selection criteria. If multiple documents satisfy the given query expression, then this method will return the first document according to the natural order which reflects the order of documents on the disk. If no document matches the selection criteria, then this method will return null.
    const user = await userModel.findOne({ email, password });
    //agar user nahi milta hai toh
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    //user mil gaya
    res.status(200).json({
      success: true,
      user, //passing user as it is
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body); //req body mein joh bhi data rahega usko hum new document ki tarah save karenge
    await newUser.save();
    //creation ke liye hum 201 ka status code use karte hai
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
