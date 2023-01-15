import { cryptoInfo, stringKeys } from "cryptoInfo";
import styles from "../styles/ModalStyles.module.css";
import { activeTab } from "./DisplayPairs";

const Modal = ({
  pair,
  onClick,
}: {
  pair: cryptoInfo;
  onClick: (arg: activeTab) => void;
}) => {
  const keys = Object.keys(pair);
  const updatedPair: stringKeys = { ...pair };

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
        {keys.map((el, index) => {
          return (
            <li className={styles.stat} key={index}>
              <p>{el}</p>
              <p>{updatedPair[el]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Modal;
