import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import firebase from "../Config/firebase";
import AuthContext from "../Context/AuthContext";
function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const handleRegistration = async (data) => {
    //send to firebase
    console.log("form", data);
    setLoading(true);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (responseUser.user.uid) {
        const userInfo = await firebase.db
          .collection("users")
          .where("userId", "==", responseUser.user.uid)
          .get();
        if (userInfo) {
          const userName = userInfo.docs[0]?.data().name;
            document.cookie = "name="+userName+"; expires="+new Date(2030,1,1).toUTCString()
          context.loginUser(userInfo.docs[0]?.data());
        }
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Email</label>
          <input type="email" name="email" {...register("email")} />
          {errors.email && <span>Mandatory field</span>}

        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
                  {errors.password && <span>Mandatory field</span>}

        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default login;
