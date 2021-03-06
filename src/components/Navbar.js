import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from 'react-scroll'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  const myRef = []

  useEffect(() => {
    setExpandNavbar(false);
    window.scrollTo(0, 0);
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
            <Link activeClass="active" smooth spy to="about">
                HOME
            </Link>
          </li>
          <li className="nav-item active">
            <Link activeClass="active" smooth spy to="skills">
                SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" smooth spy to="projects">
                PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" smooth spy to="experience">
                EXPERIENCE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
