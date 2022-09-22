import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Logo from "./Logo";

function Navbar() {
  const navigate = useNavigate();
	const onLogout = async () => {
		await api.postLogout()
		navigate("/login");
	}
  useEffect(() => {
    const fetchData = async () => {
      const dataset = await api.getAllData();
      if (dataset.status === 401) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <nav>
        <div className="navbar all_padding">
          <div className="navbar__logo">
            <Logo />
          </div>
          <div className="navbar__shopname">
            <h2>Shop Name</h2>
          </div>
          <div className="navbar__logout">
            <IoMdLogOut  onClick={onLogout}/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
