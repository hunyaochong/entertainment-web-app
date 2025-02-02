import styles from "./page.module.css";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";
import Thumbnail from "@/components/Thumbnail";
import Trending from "@/components/Trending";
import ThumbnailBookmark from "@/components/ThumbnailBookmark";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <SideNav />
      </div>
      <div className={styles.rightNavWrapper}>
        <SearchBar />
        <Thumbnail thumbnailType={"regular"} />
        <Trending />
      </div>
    </div>
  );
}
