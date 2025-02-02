"use client";
import React from "react";
import Image from "next/image";
import styles from "./Thumbnail.module.css";
import moviesData from "@/data.json";

import ThumbnailHoverDisplay from "../ThumbnailHoverDisplay";
import ThumbnailDescription from "../ThumbnailDescription";
import ThumbnailBookmark from "../ThumbnailBookmark";

function Thumbnail({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  thumbnailType,
}) {
  //todo: src to be set based on regular vs trending
  const [onHover, setOnHover] = React.useState(false);

  return (
    <div className={styles.thumbnailWrapper}>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <Image
          src={thumbnail.regular.large}
          alt="movie image"
          width={thumbnailType === "trending" ? 470 : 255}
          height={thumbnailType === "trending" ? 230 : 174}
        ></Image>
        {onHover && <ThumbnailHoverDisplay />}
      </div>
      <ThumbnailDescription
        title={title}
        year={year}
        category={category}
        rating={rating}
        thumbnailType={thumbnailType}
      />
      <ThumbnailBookmark
        isBookmarked={isBookmarked}
        thumbnailType={thumbnailType}
      />
    </div>
  );
}

export default Thumbnail;
