import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <ul className='navbar-nav'>
          <li className="nav-item active">
            <a className="nav-link" href="#"> Home </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#"> Skills </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Projects </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Experience </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
