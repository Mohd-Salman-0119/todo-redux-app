import React from "react";
import InputFeild from "../Components/InputFeild";
import Button from "../Components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const navigate = useNavigate()

  const navigateToHome = ()=>{
    navigate("/")
  }

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    dispatch(postUser(payload, navigateToHome));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 m-auto shadow-md w-max p-8 bg-[#42855B] rounded-sm">
      <form
        className="flex flex-col justify-center items-center m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputFeild
          type={"email"}
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputFeild
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button className="w-[250px] bg-blue-600 mt-3 font-semibold" type="submit" name="Login" />
      </form>
    </div>
  );
};

export default Login;
