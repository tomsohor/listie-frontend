import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../api/api";

import Logo from "../components/sub/Logo";

function GuestLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const res = await api.checkAuthentication();
      if (res.status === 200) {
        navigate("/");
      }
    };
    checkAuthentication();
  }, []);

  return (
    <>
      <nav>
        <div className="navbar all_padding">
          <div className="navbar__logo">
            <Logo />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default GuestLayout;
