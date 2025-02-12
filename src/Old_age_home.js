import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar"; // Import SearchBar component
import "./old_age_home.css"; // Assuming you have a separate CSS file for Old Age Home page

const OldAgeHome = () => {
  // State to store the search query for Old Age Homes
  const [searchQuery, setSearchQuery] = useState("old age homes near me");

  // Handle the search query passed from SearchBar
  const handleSearch = (query) => {
    // Avoid setting an empty query to prevent invalid Google Maps request
    if (query.trim() === "") {
      setSearchQuery("old age homes near me"); // Default search term if input is empty
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
      setSearchQuery("old age homes near me");
    }
  }, [searchQuery]);

  return (
    <div className="old-age-home-container">
      <div className="search-container">
        {/* Pass handleSearch to SearchBar */}
        <SearchBar
          placeholder="Search Old Age Homes..."
          onSearch={handleSearch} // Send the query back to parent component
        />
      </div>

      <h1>Old Age Home Page</h1>
      <p>Find trusted old age homes near you.</p>

      <div className="iframe-container">
        {/* Dynamically update the iframe src based on the search query */}
        <iframe
          className="old-age-home-iframe"
          src={buildIframeUrl()} // Call the function to update the iframe src
          allowFullScreen
          loading="lazy"
          title="Old Age Homes Near Me"
        ></iframe>
      </div>
    </div>
  );
};

export default OldAgeHome;
