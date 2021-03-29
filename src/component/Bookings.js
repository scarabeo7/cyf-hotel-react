import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;