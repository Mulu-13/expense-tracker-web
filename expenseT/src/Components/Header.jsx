import React from "react";
import { Link } from "react-router-dom";

import  Logo  from "../assets/a.jpg";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="flex flex-row items-center justify-start gap-5 max-w-7xl mx-auto bg-gray-700 p-4 rounded-lg">
      
        {/* logo */}
        <div className="bg-green-100/0">
          <Link to={"/"}>
            <img src={Logo} alt="fadf" className="h-10 w-10 rounded-full"/>
          </Link>
        </div>
        <Navbar />
      
    </header>
  );
};

export default Header;
