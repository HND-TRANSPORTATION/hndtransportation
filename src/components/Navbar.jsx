import React from "react";
import '../static/Navbar.css';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  // Check if the current URL path matches a valid route
  if (location.pathname !== "/" && location.pathname !== "/contact" ) {
    // Render something else if the current route is not valid
    return;
  }

  return (
    <div className="navbar-container">
      <div className="left-side">
        <Link to="/">
          <p> HND TRANSPORTATION AND LOGISTIC </p>
        </Link>
      </div>

      <div className="right-side">
        <Link to='/contact'>
          <button className="nav-contact-us-button"> CONTACT US </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;