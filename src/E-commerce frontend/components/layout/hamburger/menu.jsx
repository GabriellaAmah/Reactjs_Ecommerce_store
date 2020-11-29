import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth/authState";
import Logout from "../../LogOut/logout";
import "./menu.css";

const Menu = ({handleClick}) => {
  let { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="menu">
     <div className='close-nav'>
     <h1  onClick={handleClick}>X</h1>
     </div>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " onClick={handleClick}>
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
  );
};

export default Menu;
