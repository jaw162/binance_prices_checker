import { cryptoInfo } from "cryptoInfo";
import BinanceLogo from "../public/svgs/binanceLogo.svg";
import SearchIcon from "../public/svgs/searchIcon.svg";
import styles from "../styles/Header.module.css";
import Slider from "./Slider";
import { topTen } from "../hooksAndHelpers/topTen";

const Header = ({
  setFilter,
  pairs,
}: {
  setFilter: (arg: string) => void;
  pairs: cryptoInfo[];
}) => {
  const topTenByVolume = topTen(pairs);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.svg}>
          <BinanceLogo />
          <p>Prices</p>
        </div>
        <form className={styles["search-box"]}>
          <SearchIcon />
          <input
            onChange={(e) => {
              const { value } = e.target;
              setFilter(value);
            }}
            placeholder="Search pairs..."
          />
        </form>
      </div>
      {topTenByVolume.length ? <Slider topTen={topTenByVolume} /> : null}
    </header>
  );
};
export default Header;
