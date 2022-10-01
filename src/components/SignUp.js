import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function SignUp() {
    const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const onSignUp = async (e) => {
    e.preventDefault();

    await api
      .postSingUp({ username: uname, email: email, password: pwd })
      .then((res) => {
        if (res.status === 200){
            navigate('/login')
        }
      });
  };
  const toLogin = async (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="signup">
      <h2>“ Listie, Your Bestie To Reminisce Your Products Pricing! “ </h2>
      <form className="form">
        <input
          type="text"
          className="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          className="username"
          placeholder="Username"
          onChange={(event) => setUname(event.target.value)}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={(event) => setPwd(event.target.value)}
        />
        <div className="action">
          <p>
            Already have account? <span onClick={toLogin}>Login</span>{" "}
          </p>
          <button className="signupbtn" onClick={onSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
