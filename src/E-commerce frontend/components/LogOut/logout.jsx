import React, { useContext } from "react";
import { AuthContext } from "../../Context/Auth/authState";
import ExploreButton from "../Buttton/button";

const Logout = () => {
  const { userLogout } = useContext(AuthContext);
  const handleChange = () => {
    userLogout()
  };
  return (
    <div style={{position : 'relative', bottom: '0.8em'}}>
      <ExploreButton text="Logout" classname="bg-dark" onclick={handleChange} />
    </div>
  );
};

export default Logout;
