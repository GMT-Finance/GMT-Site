import React, { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {

  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll custom-scrollbar text-white bg-[#000112] `}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md`}
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
