import { cryptoInfo } from "cryptoInfo";

const useFilters = (arr: cryptoInfo[], filter: string) => {
  if (!filter) return arr;

  const lowerCase = filter.toLowerCase();

  return arr.filter((coin) => {
    return coin.symbol.toLowerCase().includes(lowerCase);
  });
};

export default useFilters;
