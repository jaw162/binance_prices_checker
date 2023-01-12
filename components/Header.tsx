import BinanceLogo from "../public/svgs/binanceLogo.svg";
import SearchIcon from "../public/svgs/searchIcon.svg";
import styles from "../styles/Header.module.css";

const Header = ({ setFilter }: { setFilter: (arg: string) => void }) => {
  return (
    <header className={styles.container}>
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
    </header>
  );
};
export default Header;
