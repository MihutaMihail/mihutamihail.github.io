import React from "react";
import "./Header.css";
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Header;
