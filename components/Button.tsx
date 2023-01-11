import React from "react";
import { useRouter } from "next/router";

const Button = ({
  click,
  name,
  currentPage,
}: {
  click: (e: React.MouseEvent) => void;
  name: string;
  currentPage: number;
}) => {
  const router = useRouter();
  return (
    <button
      style={
        String(currentPage) === name
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : {}
      }
      onClick={(e) => {
        click(e);
        router.push(`/?query=${name}`, undefined, { shallow: true });
      }}
      name={name}
    >
      {name}
    </button>
  );
};
export default Button;
