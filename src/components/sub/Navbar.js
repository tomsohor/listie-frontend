import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import Logo from './Logo';

function Navbar() {
    return ( 
        <nav>
            <div className="navbar all_padding">
                <div className="navbar__logo">
                <Logo/>
                </div>
                <div className="navbar__shopname">
                    <h2>Shop Name</h2>
                </div>
                <div className="navbar__logout">
                <IoMdLogOut/>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;