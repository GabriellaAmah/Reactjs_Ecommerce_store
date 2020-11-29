import React from "react";
import ExploreButton from "../Buttton/button";
import "./promo.css";

const Promo = () => {
  return (
    <div className="promo-section">
      <h2 className="text-center text-capitalize promoHeader">
        get 20% - 30% discount on your first purchase everyday
      </h2>
      <p className="text-center promoText ">
        get discount by getting your coupon code
      </p>
      <div className='d-flex justify-content-center'>
      <ExploreButton
        id="couponButton"
        className="btn btn-primary btn-group"
        text="get coupon code"
      />
      </div>
    </div>
  );
};

export default Promo;
