import { cryptoInfo } from "cryptoInfo";
import styles from "../styles/ModalStyles.module.css";
import { activeTab } from "./DisplayPairs";

const Modal = ({
  pair,
  onClick,
}: {
  pair: cryptoInfo;
  onClick: (arg: activeTab) => void;
}) => {
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (!target.classList.contains(`${styles.container}`)) return;
        onClick({ symbol: null, info: null });
      }}
    >
      <ul className={styles["all-info"]}>
        {Object.keys(pair).map((el, index) => {
          return (
            <li className={styles.stat} key={index}>
              <p>{el}</p>
              <p>{pair[el as keyof typeof pair]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Modal;
