import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
  const [userLogin, setUserLogin] = useState(
    /*localStorage.getItem("login") ||*/
    false
  );

  const [userInfo, setUserInfo] = useState(
    /* JSON.parse(localStorage.getItem("userInfo")) ||*/ {}
  );

  const loginUser = (userInfo) => {
    setUserLogin(true);
    setUserInfo(userInfo);
    if (typeof window !== "undefined") {
      localStorage.setItem("login", true);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };
  const logOutUser = () => {
    setUserLogin(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("login");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userLogin,
        userInfo,
        loginUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
