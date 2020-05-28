import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <h6>Copyright ⓒ {year}</h6>
    </footer>
  )
}

export default Footer;