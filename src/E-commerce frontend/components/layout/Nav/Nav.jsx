import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth/authState";
import Logout from "../../LogOut/logout";
import "./nav.css";

const Navigation = ({ handleClick }) => {
  let { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          onClick={handleClick}
          className="navbar-toggler navButton"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbarNav  collapse navbar-collapse"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Shop
              </NavLink>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
                <Logout />
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
