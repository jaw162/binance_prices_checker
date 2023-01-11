import { cryptoInfo } from "cryptoInfo";
import styles from "../styles/DisplayPairs.module.css";
import React, { useState } from "react";
import Modal from "./Modal";

export interface activeTab {
  symbol: string | null;
  info: cryptoInfo | null;
}

const DisplayPairs = ({
  pairs,
  currentPage,
  perPage,
}: {
  pairs: cryptoInfo[];
  currentPage: number;
  perPage: number;
}) => {
  const [activeTab, setActiveTab] = useState<activeTab>({
    symbol: null,
    info: null,
  });

  const priceChange = (prevPrice: string, currentPrice: string) => {
    return {
      color: `${Number(currentPrice) > Number(prevPrice) ? "green" : "red"}`,
    };
  };

  const updateState = (pair: string, pairInfo: cryptoInfo) => {
    activeTab.symbol
      ? setActiveTab({ symbol: null, info: null })
      : setActiveTab({ symbol: pair, info: pairInfo });
  };

  const handleCardClick = (e: React.MouseEvent, el: cryptoInfo) => {
    const target = e.target as HTMLUListElement;
    if (
      target.parentElement?.classList.contains(`${styles["pair-card"]}`) ||
      target.classList.contains(`${styles["pair-card"]}`)
    )
      updateState(el.symbol, el);
  };

  return (
    <ul className={styles.grid}>
      {pairs
        .slice(currentPage * perPage - perPage, currentPage * perPage)
        .map((el, index) => {
          const { symbol, volume, weightedAvgPrice } = el;
          return (
            <ul
              className={styles["pair-card"]}
              onClick={(e) => {
                handleCardClick(e, el);
              }}
              key={`${el.symbol}` + `${index + 100}`}
            >
              <li className={styles.bold}>{symbol}</li>
              <li>Volume: {volume}</li>
              <li
                className={styles.bold}
                style={priceChange(el.lastPrice, el.weightedAvgPrice)}
              >
                Price: {weightedAvgPrice}
              </li>
            </ul>
          );
        })}
      {activeTab.symbol && (
        <Modal pair={activeTab.info as cryptoInfo} onClick={setActiveTab} />
      )}
    </ul>
  );
};
export default DisplayPairs;
