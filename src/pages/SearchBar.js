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
    <div className='full'>
      <h2 className='t'>Find Your Flight</h2>
    <div className="search">
      
      <div className="departure-box">
      <input
        
        type="text"
        placeholder="Departure"
        value={DepartureCity}
        onChange={handleInputChange1}
        className="departure-city"
      />
      </div>
      <div className="arrival-box">
      <input
        
        type="text"
        placeholder="Arrival"
        value={ArrivalCity}
        onChange={handleInputChange2}
        className="arrival-city"
      />
      </div>
    <div className="date-box">
      <input 

        type = "text"
        placeholder = "Date"
        
        className="date-set"
        />
        </div>
      <button className="search-button"onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;

