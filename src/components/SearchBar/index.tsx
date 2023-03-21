import React from "react";
import { PokeContext } from "@/context/PokeContext";
import { useContext } from "react";

const SearchBar = () => {
  const { setWordToSearch } = useContext(PokeContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Digite Pokemon para busca"
        onChange={(e) => setWordToSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
