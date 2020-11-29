import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/shop/shopState";
import Product from "./Product";
import "./product.css";

const SuggestedProduct = ({
  productCategory,
  currentProduct,
  categoryHead,
}) => {
  const { category, loading, getProductCategory } = useContext(ShopContext);

  useEffect(() => {
    getProductCategory(categoryHead);
  }, [categoryHead]);

  const Recommended = category.filter(
    (products) => products._id !== currentProduct.toString()
  );
  return (
    <div>
      <h6 className="pb-3">Recommended for You</h6>
      {loading ? (
        <h5>loading Recommended</h5>
      ) : (
        <Product products={Recommended} response="" idName="detailList" />
      )}
    </div>
  );
};

export default SuggestedProduct;
