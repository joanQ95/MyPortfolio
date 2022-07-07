import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/NavBarAux.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useNavigate } from 'react-router-dom';

function NavBarAux() {
	const [expandNavbar, setExpandNavbar] = useState(false);
	const navigate = useNavigate();
  const location = useLocation();
  const myRef = []

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
      <div className="links" onClick={() => navigate(-1)}>
        <ul className='navbar-nav'>
          <li className="nav-item active">
                HOME     
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarAux