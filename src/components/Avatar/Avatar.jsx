import React from "react";
import Image from "next/image";

import styles from "./Avatar.module.css";

function Avatar() {
  return (
    <div className={styles.avatarWrapper}>
      <Image
        src="/assets/image-avatar.png"
        alt="User profile picture"
        width={40}
        height={40}
      />
    </div>
  );
}

export default Avatar;
