import React from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <Nav />
      <p style={{ color: "lightgray", textAlign: "center" }}>
        &copy; 2013 Valet Industries, Inc
      </p>
    </footer>
  );
};

export default Footer;
