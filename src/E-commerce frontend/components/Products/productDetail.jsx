import React from "react";
import ExploreButton from "../Buttton/button";
import "./product.css";

const ProductDetail = ({ product, addToCart }) => {
  return (
    <div className="detailArea mt-5">
      <div className="detailImage d-flex justify-content-center">
        <img
          className="image-responsive image-fluid"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="detailText d-flex justify-content-center">
        <div className="d-flex justify-content-between detailPrice">
          <h6>{product.name}</h6>
          <h6>${product.price}</h6>
        </div>
      </div>

      <div className="descriptionArea">
        <p>{product.description}</p>
      </div>

      <div className='cartSection'>
        <ExploreButton text="add to cart" onclick={addToCart} />
      </div>
    </div>
  );
};

export default ProductDetail;
