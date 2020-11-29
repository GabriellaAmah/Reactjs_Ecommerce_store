import React, { createContext, useReducer } from "react";
import {
  GET_PRODUCT_DETAIL,
  PRODUCT_CATEGORY,
  PRODUCT_ROUTE,
} from "../../utils/router";

import { GET_PRODUCT, PRODUCT_DETAIL, EQUAL_CATEGORY } from "../types";
import shopReducer from "./shopReducer";
import { token } from "../../utils/token";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  singleProduct: [],
  category: [],
};

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const getProduct = async () => {
    try {
      let productData = await fetch(PRODUCT_ROUTE, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      let product = await productData.json();

      dispatch({ type: GET_PRODUCT, payload: product.product });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetail = async (id) => {
    try {
      let productData = await axios.get(GET_PRODUCT_DETAIL + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      dispatch({ type: PRODUCT_DETAIL, payload: productData.data.product });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCategory = async (category) => {
    if (category === undefined) {
      return false;
    }
    try {
      let productCategory = await axios.get(PRODUCT_CATEGORY + category, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      dispatch({
        type: EQUAL_CATEGORY,
        payload: productCategory.data.category.slice(0, 5),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        getProduct,
        getProductDetail,
        getProductCategory,
        loading: state.loading,
        products: state.products,
        singleProduct: state.singleProduct,
        category: state.category,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
