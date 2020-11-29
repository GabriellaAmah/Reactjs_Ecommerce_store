import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex flex-column  justify-content-center align-content-center"
      style={{ height: '80vh' }}
    >
      <div className="text-center ">
        <h5>An Error has occured please retry again</h5>
        <Link to="/post-product">go back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
