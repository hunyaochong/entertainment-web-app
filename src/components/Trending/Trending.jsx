import React from "react";
import moviesData from "@/data.json";
import Thumbnail from "../Thumbnail";
import styles from "./Trending.module.css";

function Trending() {
  return (
    <section className={styles.trending}>
      <h1>Trending</h1>
      <div className={styles.scrollArea}>
        {moviesData
          .filter((movie) => movie.isTrending)
          .map((movie) => (
            <Thumbnail key={movie.title} {...movie} thumbnailType="trending" />
          ))}
      </div>
    </section>
  );
}

export default Trending;
