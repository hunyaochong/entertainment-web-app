"use client";
import React from "react";
import Image from "next/image";
import styles from "./SideNav.module.css";

import Logo from "../Logo";
import Avatar from "../Avatar";

// import homeLogo from "/assets/icon-nav-home.svg";
// import moviesLogo from "/assets/icon-nav-movies.svg";
// import tvSeriesLogo from "/assets/icon-nav-tv-series.svg";
// import bookmarkLogo from "/assets/icon-nav-bookmark.svg";

function SideNav() {
  const [activeState, setActiveState] = React.useState("home");

  const navItems = [
    {
      name: "home",
      logo: "/assets/icon-nav-home.svg",
      alt: "Link to home page",
    },
    {
      name: "movies",
      logo: "/assets/icon-nav-movies.svg",
      alt: "Link to movies index page",
    },
    {
      name: "tv-series",
      logo: "/assets/icon-nav-tv-series.svg",
      alt: "Link to TV series page",
    },
    {
      name: "bookmarks",
      logo: "/assets/icon-nav-bookmark.svg",
      alt: "Link to bookmarked movies page",
    },
  ];

  const handleNavClick = (page) => setActiveState(page);

  return (
    <nav className={styles.sidenav}>
      <Logo />
      <div className={styles.nav_btn}>
        {navItems.map(({ name, logo, alt }) => (
          <a href="#" key={name}>
            <Image
              src={logo}
              alt={alt}
              width={20}
              height={20}
              className={activeState === name ? styles.focus : undefined}
              onClick={() => handleNavClick(name)}
            />
          </a>
        ))}
      </div>
      <Avatar />
    </nav>
  );
}

export default SideNav;
