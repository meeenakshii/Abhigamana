import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar"; // Import SearchBar component
import "./adoption.css";

const Adoption = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("adoption centers near me");

  // Handle the search query passed from SearchBar
  const handleSearch = (query) => {
    // Avoid setting an empty query to prevent invalid Google Maps request
    if (query.trim() === "") {
      setSearchQuery("adoption centers near me"); // Default search term if input is empty
    } else {
      setSearchQuery(query); // Update the search query state
    }
  };

  // Build the Google Maps Embed API URL dynamically based on the search query
  const buildIframeUrl = () => {
    const encodedQuery = encodeURIComponent(searchQuery); // Ensure the query is URL-safe
    return `https://www.google.com/maps/embed/v1/search?key=AIzaSyAFFB3rRw3xcMZPI6J4e_Uj-VAAmTsEaec&q=${encodedQuery}`;
  };

  useEffect(() => {
    // If the searchQuery is empty (even though we set a default), set it to the default value
    if (!searchQuery.trim()) {
      setSearchQuery("adoption centers near me");
    }
  }, [searchQuery]);

  return (
    <div className="adoption-container">
      <div className="search-container">
        {/* Pass handleSearch to SearchBar */}
        <SearchBar
          placeholder="Search Adoption Services..."
          onSearch={handleSearch} // Send the query back to parent component
        />
      </div>

      <h1>Adoption Page</h1>
      <p>Find trusted adoption centers near you.</p>

      <div className="iframe-container">
        {/* Dynamically update the iframe src based on the search query */}
        <iframe
          className="adoption-iframe"
          src={buildIframeUrl()}  // Call the function to update the iframe src
          allowFullScreen
          loading="lazy"
          title="Adoption Centers Near Me"
        ></iframe>
      </div>
    </div>
  );
};

export default Adoption;
