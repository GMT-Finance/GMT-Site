import React, { useContext, useState } from "react";
import { searchSymbols } from "../api/stock.api";
import SearchResults from "./SearchResults";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

const Search = () => {

  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 `}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md bg-[#00011200] text-white`}
        placeholder="Procurar ação"
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-[#BDA475] rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-[#000112]"
      >
        <SearchIcon className="h-4 w-4  fill-[#000112]" />
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
