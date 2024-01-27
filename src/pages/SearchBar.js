import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [DepartureCity, setSearchQuery1] = useState('');
  const [ArrivalCity, setSearchQuery2] = useState('');

  const handleInputChange1 = (event) => {
    setSearchQuery1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setSearchQuery2(event.target.value);
  };

  const handleSearch = () => {
    // Pass the searchQuery to the parent component for further processing
    onSearch(DepartureCity);
    onSearch(DepartureCity);

  };

  return (
    <div className="search">
      <input
        
        type="text"
        placeholder="Departure"
        value={DepartureCity}
        onChange={handleInputChange1}
        className="departure-city"
      />
      <input
        
        type="text"
        placeholder="Arrival"
        value={ArrivalCity}
        onChange={handleInputChange2}
        className="arrival-city"
      />
      
      <button className="search-button"onClick={handleSearch}>Search</button>
    </div>
    
  );
};

export default SearchBar;

