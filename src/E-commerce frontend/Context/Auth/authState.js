import React, { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";
import axios from "axios";
import Cookies from 'js-cookie'
import { LOGIN_ROUTE, LOGOUT_ROUTE, SIGNUP_ROUTE } from "../../utils/router";
import { LOGIN, LOGIN_FAIL, LOGOUT, SIGNUP } from "../types";

const initialState = {
    signupDetails: {},
    loading: true,
    error: false,
    errorMessage: "",
    isAuthenticated: Cookies.get('isAuthenticated') === "true" ? true : false
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const userSignup = async ({ name, email, subPassword }) => {
        let formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", subPassword);

        let registerDetail = await axios.post(SIGNUP_ROUTE, formData);

        console.log(registerDetail);

        dispatch({ type: SIGNUP, payload: registerDetail.data });
    };

    const userLogin = async ({ email, password }) => {
        try {
            let loginFormData = new FormData();
            loginFormData.append("email", email);
            loginFormData.append("password", password);

            const loginData = await axios.post(LOGIN_ROUTE, loginFormData);

            dispatch({
                type: LOGIN,
                payload: loginData.data,
            });

            return true;
        } catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
            return false;
        }
    };

    const userLogout = async () => {
        const logoutStatue = await axios.post(LOGOUT_ROUTE)

        dispatch({ type: LOGOUT, payload: logoutStatue })
    }

    return (
        <AuthContext.Provider
            value={{
                userSignup,
                userLogin,
                userLogout,
                signupDetails: state.signupDetails,
                errorMessage: state.errorMessage,
                error: state.error,
                loading: state.loading,
                isAuthenticated: state.isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

//export default AuthState
