import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../Context/Cart/cartState";
import { ShopContext } from "../../../Context/shop/shopState";
import ProductDetail from "../../Products/productDetail";
import SuggestedProduct from "../../Products/suggestedProduct";
import "./detail.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = (props) => {
  const { getProductDetail, loading, singleProduct, category } = useContext(
    ShopContext
  );
  const { postCart } = useContext(CartContext);
  let productId = props.match.params.id;

  useEffect(() => {
    getProductDetail(productId);
  }, [productId]);

  const addToCart = () =>
    postCart(productId)
      .then(() => toast("this product has been added to my cart"))
      .catch(() => toast("an error occurred while adding this product"));

  return (
    <div>
       <ToastContainer />
      {loading ? (
        <h6>loading product data</h6>
      ) : (
        <div className="detailPage">
          <ProductDetail product={singleProduct} addToCart={addToCart} />
          <div className="productRecommend">
            <SuggestedProduct
              productCategory={category}
              currentProduct={productId}
              categoryHead={singleProduct.category}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
