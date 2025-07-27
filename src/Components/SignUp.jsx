import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerC flex">
      <div className="facebook-page flex">
        <div className="text">
          <h1>
            EarthScape <span className="ActionName">- Sign Up</span>
          </h1>
          <p>Connect with climate and its change </p>
          <p> around you on Earthscape.</p>
        </div>
        <form onSubmit={registerUser}>
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
              Sign Up
            </button>
          </div>
          <hr />
          <div className="buttonSU">
            <Link to="/Login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
