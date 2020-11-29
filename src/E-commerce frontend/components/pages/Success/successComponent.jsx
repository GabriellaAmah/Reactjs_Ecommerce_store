import React from "react";
import ErrorPage from "../../Success/error";
import Success from "../../Success/success";

const SuccessComponent = ({loading}) => {
  return <div>{loading ? <ErrorPage /> : <Success />}</div>;
};

export default SuccessComponent;
