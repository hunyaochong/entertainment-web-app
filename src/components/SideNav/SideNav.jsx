import React from "react";
import Image from "next/image";
import styles from "./SideNav.module.css";

import logo from "@/assets/logo.svg";
import homeLogo from "@/assets/icon-nav-home.svg";
import moviesLogo from "@/assets/icon-nav-movies.svg";
import tvSeriesLogo from "@/assets/icon-nav-tv-series.svg";
import bookmarkLogo from "@/assets/icon-nav-bookmark.svg";
import avatarImage from "@/assets/image-avatar.png";

function SideNav() {
  return (
    <nav className={styles.sidenav}>
      <Image
        src={logo}
        alt="Entertainment app logo"
        width={32}
        height={25}
        className={styles.logo}
      />

      <div className={styles.nav_btn}>
        <a href="/">
          <Image src={homeLogo} alt="Link to home page"></Image>
        </a>
        <a href="/movies">
          <Image src={moviesLogo} alt="Link to movies index page"></Image>
        </a>
        <a href="/tv-series">
          <Image src={tvSeriesLogo} alt="Link to TV series page"></Image>
        </a>
        <a href="bookmarks">
          <Image
            src={bookmarkLogo}
            alt="Link to bookmarked movies page"
          ></Image>
        </a>
      </div>

      <div className={styles.avatarWrapper}>
        <Image
          src={avatarImage}
          alt="User profile picture"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}

export default SideNav;
