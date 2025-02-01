import Image from "next/image";
import styles from "./page.module.css";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <SideNav />
      </div>
      <div className={styles.rightNav}>
        <SearchBar />
      </div>
    </div>
  );
}
