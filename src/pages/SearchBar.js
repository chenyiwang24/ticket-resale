import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [DepartureCity, setSearchQuery1] = useState('');
  const [ArrivalCity, setSearchQuery2] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();
  const var1 = 'value1';
  const var2 = 'value2';
  const var3 = 'value3';

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setSearchQuery1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setSearchQuery2(event.target.value);
  };

  const handleSearch = () => {
    // Pass the searchQuery to the parent component for further processing
    onSearch(DepartureCity);
    onSearch(ArrivalCity);
    onSearch(selectedDate);
    navigate('/tickets',{state:{id:1,arrive:ArrivalCity}, state:{id:2, depart:DepartureCity}, state:{id:3, date:selectedDate}});
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
        type = "date"
        placeholder = "Date"
        value = {selectedDate}
        className="date-set"
        onChange = {handleDateChange}
        />
        </div>
      <button className="search-button"onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;

