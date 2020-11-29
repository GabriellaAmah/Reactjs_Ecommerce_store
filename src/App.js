import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminProvider } from "./E-commerce frontend/Context/Admin/adminState.js";
import { AuthProvider } from "./E-commerce frontend/Context/Auth/authState.js";
import { CartProvider } from "./E-commerce frontend/Context/Cart/cartState.js";
import { ShopProvider } from "./E-commerce frontend/Context/shop/shopState.jsx";
import ErrorBoundary from "./E-commerce frontend/utils/errorBoundaries";
import ProductForm from "./E-commerce frontend/components/AddProduct/ProductForm";
import PrivateRoute from "./E-commerce frontend/components/Authentication/privateRoute.js";
import { Header } from "./E-commerce frontend/components/layout/Header/header";
import { Login } from "./E-commerce frontend/components/Login/login";
import PageNotFound from "./E-commerce frontend/components/pages/404/404.jsx";
import Cart from "./E-commerce frontend/components/pages/Cart/Cart.jsx";
import Detail from "./E-commerce frontend/components/pages/Detail/detail.jsx";
import Home from "./E-commerce frontend/components/pages/Home/home";
import Shop from "./E-commerce frontend/components/pages/Shop/Shop";
import SuccessComponent from "./E-commerce frontend/components/pages/Success/successComponent.jsx";
import SignupForm from "./E-commerce frontend/components/Signup/SignupForm";

const App = () => {
    return (
        <div>
            <AuthProvider>
                <AdminProvider>
                    <ShopProvider>
                        <CartProvider>
                            <ErrorBoundary>
                                <Header />

                                <Switch>
                                    <PrivateRoute exact path="/product/detail/:id" component={Detail} />
                                    <PrivateRoute exact path="/cart" component={Cart} />
                                    <PrivateRoute exact path="/sucess" component={SuccessComponent} />
                                    <Route path="/products" component={Shop} />
                                    <PrivateRoute path="/post-product" component={ProductForm} />
                                    <Route exact path="/signup" component={SignupForm} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path='/' component={Home} />
                                    <Route component={PageNotFound} />
                                </Switch>
                            </ErrorBoundary>
                        </CartProvider>
                    </ShopProvider>
                </AdminProvider>
            </AuthProvider>
        </div>
    );
};

export default App;
