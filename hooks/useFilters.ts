import { cryptoInfo } from "cryptoInfo";

const useFilters = (arr: cryptoInfo[], filter: string) => {
  if (!filter) return arr;

  const lowerCase = filter.toLowerCase();

  return arr.filter((coin) => {
    const keys = Object.keys(coin);

    return keys.some((el) => {
      if (Number(coin[el])) return;
      return (coin[el] as string).toLowerCase().includes(lowerCase);
    })
      ? coin
      : false;
  });
};

export default useFilters;
