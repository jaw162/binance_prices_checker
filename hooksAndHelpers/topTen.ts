import { cryptoInfo } from "cryptoInfo";

export const topTen = (pairs: cryptoInfo[]) => {
  return [...pairs]
    .filter((el) => {
      return (
        el.symbol.substring(el.symbol.length - 4) === "USDT" ||
        el.symbol.substring(el.symbol.length - 4) === "BUSD"
      );
    })
    .map((el) => ({
      ...el,
      volume: Number(el.weightedAvgPrice) * Number(el.volume),
    }))
    .sort((a, b) => {
      return Number(b.volume) - Number(a.volume);
    })
    .slice(0, 10);
};
