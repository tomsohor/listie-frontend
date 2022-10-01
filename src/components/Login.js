import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "../api/api";

function Login() {
  
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  // const [user,setUser] = useOutletContext();
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    await api.postLogin({ username: uname, password: pwd }).then((res) => {
      if (res.status === 200) {
        // setUser(true);
        navigate("/");
      }
    });
  };

  const toSignUp = async (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div className="login">
      <h2>“ Listie, Your Bestie To Reminisce Your Products Pricing! “ </h2>
      <form className="form">
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
            Don’t have account? <span onClick={toSignUp}> Create</span>
          </p>
          <button className="loginbtn" onClick={onLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
