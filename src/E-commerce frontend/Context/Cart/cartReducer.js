import { ADD_CART, GET_CART } from "../types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                loading: false,
                cartItems: [...action.payload]
            }

        case ADD_CART:
            return {
                ...state,
                loading: false
            }
    }
}

export default CartReducer