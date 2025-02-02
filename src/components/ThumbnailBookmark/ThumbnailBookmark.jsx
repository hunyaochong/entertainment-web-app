"use client";
import React from "react";
import Image from "next/image";

import styles from "./ThumbnailBookmark.module.css";

function ThumbnailBookmark({ isBookmarked, thumbnailType }) {
  const [bookmarked, setBookmarked] = React.useState(isBookmarked);

  function handleClick() {
    setBookmarked(!bookmarked);
  }
  return (
    <button
      className={styles.wrapper}
      style={
        thumbnailType === "trending"
          ? { marginRight: "24px", marginTop: "16px" }
          : { margin: "16px" }
      }
      onClick={handleClick}
    >
      <Image
        src={
          bookmarked
            ? "/assets/icon-bookmark-full.svg"
            : "/assets/icon-bookmark-empty.svg"
        }
        alt={"bookmark icon"}
        width={12}
        height={14}
      ></Image>
    </button>
  );
}

export default ThumbnailBookmark;
