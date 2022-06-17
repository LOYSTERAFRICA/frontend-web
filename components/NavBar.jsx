/**
 * This is the navbar that is only added to the Layout.jsx
 */

import React from "react";
import navStyles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={navStyles.nav}>{/* Add your code here */}</nav>
    </div>
  );
};

export default NavBar;
