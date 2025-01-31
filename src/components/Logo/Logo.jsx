import React from "react";
import Image from "next/image";

import styles from "./Logo.module.css";
import logo from "@/assets/logo.svg";

function Logo() {
  return (
    <Image
      src={logo}
      alt="Entertainment app logo"
      width={32}
      height={25}
      className={styles.logo}
    />
  );
}

export default Logo;
