import React from "react";
import Image from "next/image";
// import { ScrollArea } from "radix-ui";
import moviesData from "@/data.json";

import Thumbnail from "../Thumbnail";

import styles from "./Trending.module.css";

function Trending() {
  return (
    <section className={styles.trending}>
      <h1>Trending</h1>
      {/* {moviesData.map(({title, year, category, rating, isBookmarked}) => (

      ))} */}
    </section>
  );
}

export default Trending;
