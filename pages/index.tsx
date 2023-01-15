import styles from "../styles/Home.module.css";
import { useState } from "react";
import Pagination from "../components/Pagination";
import useFilters from "../hooksAndHelpers/useFilters";
import { useFetchPrices } from "../hooksAndHelpers/useFetch";
import DisplayPairs from "../components/DisplayPairs";
import Header from "../components/Header";
import Loader from "../components/Loader";

export default function Home() {
  const { cryptos, loaded } = useFetchPrices();

  const [filter, setFilter] = useState<string>("");
  const filtered = useFilters(cryptos ?? [], filter);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(30);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <main style={{ overflow: "hidden" }}>
      {loaded ? (
        <>
          <Loader loaded={true} />
          <Header setFilter={setFilter} pairs={cryptos} />
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
                          ? { backgroundColor: "black" }
                          : {}
                      }
                      className={styles.button}
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  );
                })
              )}
            </div>
            <div>
              <label htmlFor="perPage">Per Page:</label>
              <select
                id="perPage"
                className={styles["per-page"]}
                onChange={(e) => setPerPage(Number(e.target.value))}
              >
                <option value={30}>30</option>
                <option value={60}>60</option>
                <option value={90}>90</option>
              </select>
            </div>
          </aside>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
