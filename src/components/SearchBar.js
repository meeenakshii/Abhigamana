import React, { useState } from "react";
import "./SearchBar.css"; // Style the search bar

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Send the search query back to parent
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={placeholder || "Search..."}
      />
    </div>
  );
};

export default SearchBar;
