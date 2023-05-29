import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/blogs/create">Create Blog</Link>
      </div>
    </div>
  );
}

export default Header;
