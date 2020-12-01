import React, { useContext, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/Auth/authState";
import "../AddProduct/productForm.css";
import "./login.css";
import ExploreButton from "../Buttton/button";
import Input from "../Form/input";

export const Login = (props) => {
  const { userLogin } = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const { email, password } = loginValue;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast("complete the fields");
    }
    let loginComplete = await userLogin(loginValue);

    loginComplete
      ? props.history.push("/")
      : toast("an error occured please try again");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "40vh" }}>
      <ToastContainer />
      <Form className="form" onSubmit={handleSubmit}>
        <Col xs="auto">
          <Input
            classname="p-4"
            label="Email"
            type="email"
            name="email"
            placeholder="enter a valid email"
            onChange={handleChange}
            className
          />

          <Input
            classname="p-4"
            label="Password"
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
          />

          <div className="d-flex justify-content-center mt-4 ">
            <ExploreButton
              type="submit"
              text="submit"
              classname="bg-dark btn "
            />
          </div>
        </Col>
      </Form>
    </div>
  );
};
