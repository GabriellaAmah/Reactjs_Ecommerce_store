import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth/authState";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (

                        <Redirect to={{ pathname: '/signup', state: { from: props.location } }} />
                    )
            }
        />
    );
};

export default PrivateRoute;
