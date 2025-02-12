import React from 'react';
import { Link } from "react-router-dom";
import logo from './images/logo_abhi.png'; // Correctly import the image

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "rgb(255, 255, 255)", // Dark Indigo
      padding: "10px 60px", // Reduced top and bottom padding
      display: "flex",
      alignItems: "center", // Align vertically
      color: "white",
      width: "100%",  
      maxWidth: "1700px", // Increased max width to stretch the navbar more
      margin: "0 auto", // Center the navbar
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "1000", // Keeps navbar above all content
      boxSizing: "border-box", // Ensures padding doesn't exceed width
      flexWrap: "wrap", // Ensure flexibility when resizing
      justifyContent: "space-between", // This will space out the logo and the links
    }}>
      {/* Centered Image */}
      <div style={{
        display: "flex",
        justifyContent: "center", // Center logo horizontally
        alignItems: "center", // Center logo vertically
        flex: "1", // This allows the logo to take up space and be centered
        marginLeft: "500px", // Increased marginLeft to move logo more to the right
      }}>
        <img 
          src={logo} // Use the imported image
          alt="Logo" 
          style={{ width: "400px", height: "auto" }} // Adjusted image size
        />
      </div>

      {/* Menu Links */}
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "20px",
        padding: "0",
        margin: "0",
        justifyContent: "flex-end", // Align links to the right side
        flex: "1", // Allow the links to grow and take the remaining space
      }}>
        <li>
          <Link to="/" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
