import React, { Fragment } from "react";
import "./cart.css";
const CardTable = ({ cartItems }) => {
  const totalPrice =
    cartItems.length <= 0
      ? ""
      : cartItems
          .map((items) => items.productId.price * items.quantity)
          .reduce((a, b) => a + b, 0);

  console.log(totalPrice);
  return (
    <div>
      {cartItems.length <= 0 ? (
        <h2>Add items in your cart first to view</h2>
      ) : (
        <>
          {" "}
          <div className="tableArea ">
            <div className="cartHeader">
              <h4 className="text-center text-capitalize">your cart</h4>
            </div>
            <div className=" table-responsive bordered-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>items</th>
                    <th>rate</th>
                    <th>quantity</th>
                    <th>price</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((items) => {
                    return (
                      <Fragment key={items._id}>
                        <tr>
                          <td className="tableImage">
                            <img
                              className="img-responsive img-fluid"
                              src={items.productId.image}
                              alt="cart item"
                            />
                            <p className="imgName">{items.productId.name}</p>
                          </td>

                          <td>
                            <p>
                              $
                              <span className="itemRate">
                                {items.productId.price}
                              </span>
                            </p>
                          </td>

                          <td>
                            <button className="  decreaseQuantity">-</button>
                            <span className="quantity">{items.quantity}</span>
                            <button className=" rounded-pill decreaseQuantity">
                              +
                            </button>
                          </td>

                          <td>
                            <p>
                              ${" "}
                              <span className="itemTotal">
                                {+items.quantity * +items.productId.price}
                              </span>
                            </p>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="totalArea d-flex justify-content-center mt-5 ml-3 mr-3">
            <h6>Total</h6>
            <h6 className="pl-5">$ {totalPrice}</h6>
          </div>
        </>
      )}
    </div>
  );
};

export default CardTable;
