import React from "react";
import Image from "next/image";
import styles from "./ThumbnailHoverDisplay.module.css";

function ThumbnailHoverDisplay() {
  return (
    <div className={styles.hoverWrapper}>
      <button>
        <Image
          src="/assets/icon-play.svg"
          alt=""
          width={30}
          height={30}
        ></Image>
        Play
      </button>
    </div>
  );
}

export default ThumbnailHoverDisplay;
