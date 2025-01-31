import React from "react";
import Image from "next/image";

import styles from "./Avatar.module.css";
import avatarImage from "@/assets/image-avatar.png";

function Avatar() {
  return (
    <div className={styles.avatarWrapper}>
      <Image
        src={avatarImage}
        alt="User profile picture"
        width={40}
        height={40}
      />
    </div>
  );
}

export default Avatar;
