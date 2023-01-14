import styles from "../styles/Loader.module.css";

const Loader = ({ loaded }: { loaded?: boolean }) => {
  return (
    <div
      className={`${styles.container} ${loaded ? styles["fade-away"] : null}`}
    >
      <h4>Please Wait</h4>
      <div className={styles.layout}>
        <div className={styles["animate-first"]}></div>
        <div className={styles["animate-second"]}></div>
        <div className={styles["animate-third"]}></div>
      </div>
    </div>
  );
};
export default Loader;
