import React from "react";
import { useState, useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const value = useContext(NavbarContext);
  console.log(value);

  return (
    <div className="user-container">
      {/* {user ? (
        <>
          <p>hello there , {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )} */}
    </div>
  );
};

export default UserContainer;
