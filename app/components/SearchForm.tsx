import React from "react";
import {Search} from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action="/"  className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input" // Corrected `clasName` to `className`
        placeholder="Search Here" // Corrected `Searhc` to `Search`
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;