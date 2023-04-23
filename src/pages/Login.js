import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
// import { Audio } from "./Audio";
import { Home } from "./Home";
export const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccess] = useState(false);
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      console.log("success");
      ///history.push("/Audio");
      setSuccess(true);
      setIsLoggedIn(true);
    } else {
      // show error message
      console.log("bad creadentials");
    }
    if (successLogin) {
    }
  };
  return (
    <div>
      {!successLogin && (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
      {successLogin && <Home isLogin={successLogin} />}
    </div>
  );
};
