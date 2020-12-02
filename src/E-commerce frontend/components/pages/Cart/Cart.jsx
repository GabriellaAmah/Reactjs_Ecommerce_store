import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../Context/Cart/cartState";
import ExploreButton from "../../Buttton/button";
import Spinner from "../../Spinner/spinner";
import CardTable from "../../Table/CardTable";
import SmallCartTable from "../../Table/SmallCartTable";
import './Cart.css'

const Cart = () => {
  const { getCart, cartItems, loading } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <SmallCartTable cartItems={cartItems} />
          </div>
          <div>
            <CardTable cartItems={cartItems} />
          </div>
          <div className='d-flex justify-content-center mt-5 cartButton'>
            <ExploreButton text="Checkout" classname='bg-success btn-sm btn' />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
