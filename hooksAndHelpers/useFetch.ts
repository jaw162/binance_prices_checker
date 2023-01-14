import { useState, useEffect } from "react";
import { cryptoInfo } from "cryptoInfo";

const fetchPrices = async () => {
  const res = await fetch("https://api2.binance.com/api/v3/ticker/24hr");

  const data: cryptoInfo[] = await res.json();

  return data.filter((el) => {
    if (Number(el.volume) !== 0) return el;
  });
};

const fetchHandler = (
  func: (arg: cryptoInfo[]) => void,
  isLoaded?: (arg: boolean) => void
) => {
  fetchPrices()
    .then((res) => {
      func(res);
      if (isLoaded) isLoaded(true);
    })
    .catch((err) => console.log(err));
};

export const useFetchPrices = () => {
  const [cryptos, setCryptos] = useState<cryptoInfo[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchHandler(setCryptos, setLoaded);
    const interval = setInterval(() => {
      fetchHandler(setCryptos);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return { cryptos, loaded };
};
