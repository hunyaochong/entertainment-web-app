import React from "react";
import styles from "./SideNav.module.css";
import logo from "@/assets/logo.svg";

function SideNav() {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Entertainment app logo" />
      </a>
    </nav>
  );
}

export default SideNav;
