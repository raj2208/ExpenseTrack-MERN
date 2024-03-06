import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";
const Login = () => {
  const img =
    "https://gumlet.assettype.com/bloombergquint/2023-01/3afee10e-185d-4261-9034-0528a49d0d7b/500_rupee_Indian_bank_note_arranged_for_photograph___Photo_Vijay_Sartape_BQ_Prime_.jpeg?w=1200&h=675";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      //data will contain the response data from the API, which likely includes information about the user who just logged in
      //post reutrn stuff like data,headers,status codes etc
      const { data } = await axios.post("/api/v1/users/login", values); //send the user login values and get the corresponding data...So, this line of code sends a POST request to the specified login endpoint with the provided values, and the response data returned by the server is stored in the data variable for further processing in your code.
      //The { data } destructuring syntax on the left side of the assignment is used to extract the response data returned by the server. So, after the POST request is completed, the data variable will contain the response data sent by the server. This response data might include information like a user token or user details, but it's not fetching data from the server in the sense of retrieving existing data.
      //arey woh joh JSON{ success = true, users} hai na woh banta hai data
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" }) //we don't store the password so we emptied it....we also have a object which we are converting into a string here
      );
      navigate("/"); //navigate to home page
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  //matlab agar user hai homepage pe toh fir tu agar "/login" search karega toh woh login page pe na jaake homepage pe hi rahega
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-page ">
        {loading && <Spinner />}
        <div className="row container">
          <h1 className="heading">Expense Management System - MERN Stack</h1>

          <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
          </div>
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                <button className="btn">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
