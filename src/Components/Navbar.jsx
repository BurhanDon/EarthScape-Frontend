import React, { useState, useEffect } from 'react';
import { CgBell } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className='main-nav'>
      {/* Logo */}
      <div className='logo'>
        <h2 className='logoText'>
          <img className='logoPng' src="./src/assets/logo.png" alt="logo" />
          <span className='Earth'>Earth</span>
          <span className='Scape'>Scape</span>
        </h2>
      </div>

      {/* Menu part */}
      <div className={showNavbar ? "menu-links mobile-menu-link" : "menu-links"}>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/datainsight">data insight</Link></li>
          <li><Link to={isLoggedIn ? "/mlmodel" : "/login"}>mL models</Link></li>
        </ul>
      </div>

      {/* Authenticated actions */}
      <div className='button'>
        {isLoggedIn ? (
          <button className='button-link' onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login"><button className='button-link'>Get ML Models<CgBell className='bell-icon'/></button></Link>
        )}

        {/* Hamburger menu start */}
        <div className='Hamburger'>
          <Link to="#" onClick={() => setShowNavbar(!showNavbar)}><GiHamburgerMenu /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
