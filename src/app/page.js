import styles from "./page.module.css";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";
import Thumbnail from "@/components/Thumbnail";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <SideNav />
      </div>
      <div className={styles.rightNavWrapper}>
        <SearchBar />
        <Thumbnail />
      </div>
    </div>
  );
}
