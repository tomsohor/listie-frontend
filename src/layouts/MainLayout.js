import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Logo from "../components/sub/Logo";
import { BiEdit } from "react-icons/bi";

function MainLayout() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    await api.postLogout().then(() => {
      navigate("/login");
      setUser(false);
      
    });
  };
  
  useEffect(() => {
    const checkAuthentication = async () => {
      const res = await api.checkAuthentication();
      if (res.status === 401) {
        navigate("/login");
      } else {
        setUser(true);
        // navigate("/");
      }
    };
    checkAuthentication();
  }, []);

  if (user) {
    return (
      <>
        <nav>
          <div className="navbar all_padding">
            <div className="navbar__logo">
              <Logo/>
            </div>
            <div className="navbar__shopname">
              <h2>Shop Name</h2>
              <BiEdit/>
            </div>
            <div className="navbar__logout">
              <IoMdLogOut onClick={onLogout} />
            </div>
          </div>
        </nav>
        <Outlet context={[user, setUser]} />
      </>
    );
  } else {
    return (
      <>
        <nav>
          <div className="navbar all_padding">
            <div className="navbar__logo">
              <Logo />
            </div>
          </div>
        </nav>
        <Outlet context={[user, setUser]} />
      </>
    );
  }
}

export default MainLayout;
