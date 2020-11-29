import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/success.jpg";

const Success = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-content-center"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <img src={image} alt="sucess page" width="25%" />
        <h5 className='pt-4'>This process has been  sucessfully concluded</h5>
        <Link to="/shop">go back to home page</Link>
      </div>
    </div>
  );
};

export default Success;
