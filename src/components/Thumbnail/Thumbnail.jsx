"use client";
import React from "react";
import Image from "next/image";
import styles from "./Thumbnail.module.css";
import moviesData from "@/data.json";

function Thumbnail() {
  const thumbnailTest = moviesData[5];

  const [onHover, setOnHover] = React.useState(false);

  return (
    <div
      className={styles.thumbnailWrapper}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Image
        src={thumbnailTest.thumbnail.regular.small}
        alt="movie image"
        width={255}
        height={174}
        className={styles.thumbnail}
      ></Image>
      {onHover && (
        <div className={styles.hoverWrapper}>
          <button className={styles.playBtnWrapper}>
            <Image
              className={styles.playBtn}
              src="/assets/icon-play.svg"
              alt=""
              width={30}
              height={30}
            ></Image>
            <span className={styles.playWord}>Play</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Thumbnail;
