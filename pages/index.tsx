import styles from "../styles/Home.module.css";
import { useState } from "react";
import Pagination from "../components/Pagination";
import useFilters from "../hooks/useFilters";
import { useFetchPrices } from "../hooks/useFetch";
import DisplayPairs from "../components/DisplayPairs";
import Header from "../components/Header";

export default function Home() {
  const cryptos = useFetchPrices();

  const [filter, setFilter] = useState<string>("");
  const filtered = useFilters(cryptos ?? [], filter);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(30);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <main>
      <Header setFilter={setFilter} />
      <DisplayPairs
        pairs={filtered}
        currentPage={currentPage}
        perPage={perPage}
      />
      <aside className={styles["pagination-and-per-page"]}>
        <div>
          {totalPages > 10 ? (
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          ) : (
            Array.from(Array(totalPages), (x, i) => {
              return (
                <button
                  style={
                    currentPage === i + 1
                      ? { backgroundColor: "black", color: "white" }
                      : {}
                  }
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              );
            })
          )}
        </div>
        <label htmlFor="perPage">Per Page:</label>
        <select id="perPage" className={styles["per-page"]}>
          <option onClick={() => setPerPage(30)}>30</option>
          <option onClick={() => setPerPage(60)}>60</option>
          <option onClick={() => setPerPage(90)}>90</option>
        </select>
      </aside>
    </main>
  );
}
