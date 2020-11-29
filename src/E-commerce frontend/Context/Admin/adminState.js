import React, { createContext, useReducer } from "react"
import adminReducer from "./adminReducer"
import { ADD_PRODUCT_ROUTE } from "../../utils/router"
import { token } from "../../utils/token"
import { POST_PRODUCT } from "../types"
import axios from 'axios'

const initialState = {
    loading: true,
    product: {}
}

export const AdminContext = createContext(initialState)


export const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, initialState)

    const postProduct = async ({ name, price, description, category }, productImage) => {
        try {

            let formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("image", productImage);


            let request = await axios.post(ADD_PRODUCT_ROUTE, formData, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            
            dispatch({ type: POST_PRODUCT, payload: request.data })
        } catch (error) {
            return console.log(error)
        }
    }

    return (
        <AdminContext.Provider value={{ loading: state.loading, postProduct, product: state.product }} >
            {children}
        </AdminContext.Provider>
    )
}