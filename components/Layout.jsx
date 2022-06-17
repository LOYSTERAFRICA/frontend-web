/**
 * This file wraps the components in _app.js.
 * It is used to add a non changing component to every page such as a Nav component.
 */

import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
