import React from "react";
import Image from "next/image";
import styles from "./ThumbnailDescription.module.css";

function ThumbnailDescription({ thumbnailType }) {
  //todo: to replace year, movie type, PG, and title with dynamic values
  return (
    <div
      className={
        thumbnailType === "trending"
          ? styles.trendingWrapper
          : styles.regularWrapper
      }
    >
      <div
        className={styles.movieInfo}
        style={
          thumbnailType === "trending"
            ? { fontSize: "var(--font-size-body-m)" }
            : { fontSize: "var(--font-size-body-s)" }
        }
      >
        <span>2019</span>
        <span className={styles.dot}>•</span>
        <span>
          <Image
            src={"/assets/icon-category-movie.svg"}
            alt="Movie category icon"
            width={12}
            height={12}
          />
        </span>
        <span>Movie</span>
        <span className={styles.dot}>•</span>
        <span>PG</span>
      </div>

      <h2
        className={styles.movieTitle}
        style={
          thumbnailType === "trending"
            ? { fontSize: "var(--font-size-heading-s)" }
            : { fontSize: "var(--font-size-heading-xs)" }
        }
      >
        The Great Lands
      </h2>
    </div>
  );
}

export default ThumbnailDescription;
