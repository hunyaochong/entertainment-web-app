"use client";
import React from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import VisuallyHidden from "../VisuallyHidden";

function SearchBar({ marginSpacing }) {
  const [search, setSearch] = React.useState("");

  return (
    <form
      role="search"
      aria-label="Search for movies or TV series"
      className={styles.form}
      style={marginSpacing ? { marginBottom: marginSpacing } : undefined}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <button
        className={styles.searchBtn}
        type="submit"
        aria-label="Submit search"
      >
        <Image
          src={"/assets/icon-search.svg"}
          alt="Search icon"
          width={32}
          height={32}
        />
      </button>

      <label htmlFor="search">
        <VisuallyHidden>Search for movies or TV series</VisuallyHidden>
      </label>
      <input
        type="text"
        size="50"
        id="search"
        name="search"
        placeholder="Search for movies or TV series"
        aria-required="true"
        aria-label="Search for movies or TV series"
        className={styles.searchInput}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
