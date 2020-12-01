import React, { useContext } from "react";
import { Col, Form } from "react-bootstrap";
import Input from "../Form/input";
import ExploreButton from "../Buttton/button";
import "../AddProduct/productForm.css";
import { useState } from "react";
import { AuthContext } from "../../Context/Auth/authState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignupForm = (props) => {
  const { userSignup } = useContext(AuthContext);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    subPassword: "",
    confirmPassword: "",
  });

  const { name, email, subPassword, confirmPassword } = signupData;

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subPassword || !confirmPassword) {
      return toast("fill in the correct value");
    }
    userSignup(signupData)
      .then(() => props.history.push("/sucess"))
      .catch(() => toast("An error has occurred try again"));
  };

  return (
    <div>
      <div className="formArea  ">
        <ToastContainer />
        <Form method="post" className="form" onSubmit={handleSubmit}>
          <Col xs="auto">
            <Input
              classname="p-4"
              label="name"
              type="text"
              name="name"
              placeholder="enter your full name"
              onChange={handleChange}
            />

            <Input
              classname="p-4"
              label="Email"
              type="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
            />

            <Input
              classname="p-4"
              label="enter password"
              type="password"
              name="subPassword"
              placeholder="enter password"
              onChange={handleChange}
            />

            <Input
              classname="p-4"
              label="confirm password"
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleChange}
            />

            <ExploreButton type="submit" text="submit" classname="bg-dark" />
          </Col>
        </Form>
      </div>
      <div className="d-flex justify-content-center loginText">
        <p>already a member ? </p>
        <div className="text-primary pl-2">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
