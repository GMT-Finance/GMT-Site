import React, { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        results.length > 0
          ? " bg-[#00011295] border-[1px] border-[#BDA475]"
          : " bg-[#00011295]"
      } custom-scrollbar`}
    >
      {results.map((item) => {
        return (
          <li
            key={item['1. symbol']} // Certifique-se de usar o nome correto da propriedade, com base no retorno da API
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md transition duration-300"
            onClick={() => setStockSymbol(item['1. symbol'])} // Usa o símbolo correto da API
          >
            <span>{item['1. symbol']}</span> {/* Mostra o símbolo da ação */}
            <span>{item['2. name']}</span> {/* Mostra o nome da ação ou descrição */}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
