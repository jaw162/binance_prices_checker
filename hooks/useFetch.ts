import { useState, useEffect } from "react";
import { cryptoInfo } from "cryptoInfo";

const fetchPrices = async () => {
  const res = await fetch("https://api2.binance.com/api/v3/ticker/24hr");

  const data: cryptoInfo[] = await res.json();

  return data.filter((el) => {
    if (Number(el.volume) !== 0) return el;
  });
};

const fetchHandler = (func: (arg: cryptoInfo[]) => void) => {
  fetchPrices()
    .then((res) => {
      func(res);
    })
    .catch((err) => console.log(err));
};

export const useFetchPrices = () => {
  const [cryptos, setCryptos] = useState<cryptoInfo[]>([]);

  useEffect(() => {
    fetchHandler(setCryptos);
    const interval = setInterval(() => {
      fetchHandler(setCryptos);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return cryptos;
};
