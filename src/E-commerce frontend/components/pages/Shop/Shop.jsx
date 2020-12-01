import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Product from "../../Products/Product";
import Promo from "../../PopUp/Promo";
import { ShopContext } from "../../../Context/shop/shopState";
import ModalBox from "../../Modal/Modal";
import  Spinner from "../../Spinner/spinner"


const Shop = () => {
  const {
    getProduct,
    loading,
    products,
    getProductDetail,
    singleProduct,
  } = useContext(ShopContext);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const productDetail = async (id) => {
    await getProductDetail(id);
  };

  const cartMethod = (id) => {
    console.log(id);
  };

  return (
    <div>
      <ModalBox
        cartMethod={cartMethod}
        show={modalShow}
        product={singleProduct}
        onHide={() => setModalShow(false)}
      />
      <Promo />
      {loading ? (
       <Spinner />
      ) : (
        <Product
          products={products}
          productDetail={productDetail}
          idName="accesories"
          response="No products available"
        />
      )}
    </div>
  );
};

export default Shop;
