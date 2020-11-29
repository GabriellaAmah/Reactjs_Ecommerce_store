import Cookies from "js-cookie";


const { SIGNUP, LOGIN, LOGIN_FAIL, LOGOUT } = require("../types");

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP:

            return {
                ...state,
                signupDetails: action.payload,
                loading: false
            };

        case LOGIN:
            Cookies.set("isAuthenticated", true);

            return {
                ...state,
                loginDetails: undefined,
                loading: false,
                token: action.payload.token,
                isAuthenticated : true
            };

        case LOGIN_FAIL:
            return {
                ...state,
                error: true,
                errorMessage: action.payload
            };

        case LOGOUT:
            Cookies.set("isAuthenticated", false);

            return {
                ...state,
                isAuthenticated : false
            }
    }
}

export default AuthReducer