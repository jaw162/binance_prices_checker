import { useCallback } from "react";
import styles from "../styles/Pagination.module.css";
import Button from "./Button";
import { useRouter } from "next/router";

const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: {
  setCurrentPage: (arg: number) => void;
  currentPage: number;
  totalPages: number;
}) => {
  const click = useCallback(
    (e: React.MouseEvent) => {
      const { name } = e.target as HTMLButtonElement;
      setCurrentPage(Number(name));
    },
    [setCurrentPage]
  );

  const router = useRouter();

  return (
    <span className={styles["buttons-container"]}>
      {currentPage !== 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            router.push(`/?query=${currentPage - 1}`, undefined, {
              shallow: true,
            });
          }}
        >
          Prev
        </button>
      )}
      {currentPage > 2 && totalPages - currentPage > 3 ? (
        <span className={styles["buttons-container"]}>
          <Button currentPage={currentPage} click={click} name={"1"} />
          <Button currentPage={currentPage} click={click} name={"2"} />
          {currentPage > 4 && <p>...</p>}
          {currentPage !== 3 && (
            <Button
              currentPage={currentPage}
              click={click}
              name={String(currentPage - 1)}
            />
          )}
          <Button
            currentPage={currentPage}
            click={click}
            name={String(currentPage)}
          />
          <Button
            currentPage={currentPage}
            click={click}
            name={String(currentPage + 1)}
          />
          <p>...</p>
          <Button
            currentPage={currentPage}
            click={click}
            name={String(totalPages - 1)}
          />
          <Button
            currentPage={currentPage}
            click={click}
            name={String(totalPages)}
          />
        </span>
      ) : (
        <span className={styles["buttons-container"]}>
          <Button currentPage={currentPage} click={click} name="1" />
          <Button currentPage={currentPage} click={click} name="2" />
          <p>...</p>
          {totalPages - currentPage < 4 && (
            <>
              <Button
                currentPage={currentPage}
                click={click}
                name={String(totalPages - 3)}
              />
              <Button
                currentPage={currentPage}
                click={click}
                name={String(totalPages - 2)}
              />
            </>
          )}
          <Button
            currentPage={currentPage}
            click={click}
            name={String(totalPages - 1)}
          />
          <Button
            currentPage={currentPage}
            click={click}
            name={String(totalPages)}
          />
        </span>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            router.push(`/?query=${currentPage + 1}`, undefined, {
              shallow: true,
            });
          }}
        >
          Next
        </button>
      )}
    </span>
  );
};
export default Pagination;
