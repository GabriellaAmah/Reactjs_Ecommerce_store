const { POST_PRODUCT } = require("../types");

const adminReducer = (state, action) => {
    switch (action.type) {
        case POST_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading : false
            }

        default:
            return {
                ...state
            }
    }
}

export default adminReducer