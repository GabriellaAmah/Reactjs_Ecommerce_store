import React from 'react'
import { createContext, useReducer } from 'react'
import CartReducer from './cartReducer';
import axios from 'axios'
import { GET_CART_ROUTE } from '../../utils/router';
import { token } from '../../utils/token';
import { ADD_CART, GET_CART } from '../types';

const initialState = {
    cartItems: [],
    loading: true
}

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const getCart = async () => {
        try {
            let items = await axios.get(GET_CART_ROUTE, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            dispatch({ type: GET_CART, payload: items.data.cart.items })
        } catch (error) {
            console.log(error)
        }
    }


    const postCart = async () => {
        try {

            dispatch({ type: ADD_CART })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CartContext.Provider value={{ getCart, postCart, loading: state.loading, cartItems: state.cartItems }}>
            {children}
        </CartContext.Provider>
    )
}
