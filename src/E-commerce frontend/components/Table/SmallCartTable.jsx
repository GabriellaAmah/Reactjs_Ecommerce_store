import React, { Fragment } from "react";
import "./cart.css";

const SmallCartTable = ({ cartItems }) => {
  return (
    <div className="container-fluid smallerScreen">
      <div className="cartHeader">
        <h4 className="text-center text-capitalize">your cart</h4>
      </div>
      {cartItems.map((items) => {
        return (
          <Fragment key={items._id}>
            <div>
              <div className="card">
                <div className="cart">
                  <div className="cartItem card-body">
                    <img
                      className="img-responsive img-fluid"
                      src={items.productId.image}
                      alt="cart item"
                    />
                    <span className="imgName">{items.productId.name}</span>
                  </div>

                  <div className="cartInfo">
                    <p>
                      ${" "}
                      <span className="itemTotal">{items.productId.price}</span>
                    </p>
                  </div>
                </div>

                <div className="smallQuantityArea">
                  <button className=" ">-</button>
                  <span className="quantity">{items.quantity}</span>
                  <button className="">+</button>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SmallCartTable;
