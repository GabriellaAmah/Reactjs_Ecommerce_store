
const { GET_PRODUCT, PRODUCT_DETAIL, EQUAL_CATEGORY } = require("../types");

const shopReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

            case PRODUCT_DETAIL : 
            return {
                ...state,
                loading : false,
                singleProduct : action.payload
            }

            case EQUAL_CATEGORY:
                return {
                    ...state,
                    loading : false,
                    category : [...action.payload]
                }

        default:
            return {
                ...state
            }
    }
}

export default shopReducer