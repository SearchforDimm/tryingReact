import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";

const token = localStorage.getItem("token");
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="pt-5">
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
