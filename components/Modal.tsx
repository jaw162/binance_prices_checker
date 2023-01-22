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
  function objectKeys<T extends {}>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

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
        {objectKeys(pair).map((el, index) => {
          return (
            <li className={styles.stat} key={index}>
              <p>{el}</p>
              <p>{pair[el]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Modal;
