import { cryptoInfo } from "cryptoInfo";
import styles from "../styles/Slider.module.css";

const Slider = ({ topTen }: { topTen: cryptoInfo[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles["grid-wrap"]}>
        {topTen.map((el, index) => {
          const volume = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(Number(el.volume));
          return (
            <ul key={index} className={styles["pair"]}>
              <li>#{index + 1}</li>
              <li>{el.symbol}</li>
              <li>{volume}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
