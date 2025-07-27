import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else if (response.data.success) {
        toast.success(response.data.message);
        setData({ email: "", password: "" });

        // Store token in localStorage
        localStorage.setItem("authToken", response.data.token);
        navigate("/mlmodel");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="containerC flex">
      <div className="facebook-page flex">
        <div className="text">
          <h1>
            EarthScape <span className="ActionName">- Login</span>
          </h1>
          <p>Connect with climate and its change </p>
          <p> around you on Earthscape.</p>
        </div>
        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <div className="link">
            <button type="submit" className="login">
              Login
            </button>
          </div>
          <hr />
          <div className="buttonSU">
            <Link to="/signup">Create new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
