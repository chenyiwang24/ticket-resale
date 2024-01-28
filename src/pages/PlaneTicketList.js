import React, { useState, useEffect } from 'react';
import NavBar from './NavBar1';
import './PlaneTicketList.css'
import { useNavigate } from 'react-router-dom';
import plane from '../assets/plane.png'
import CreditCardPopup from './CreditCardPopup';
import {useLocation} from 'react-router-dom';

const PlaneTicketList = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const [planeTicketDataAll, setPlaneTicketDataAll] = useState([]);
  const [listGenerated, setListGenerated] = useState(false);
  const [DepartureCity, setSearchQuery1] = useState('');
  const [ArrivalCity, setSearchQuery2] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  console.log(location.state.date)
  const openPopup = () => {
    setPopupOpen(true);
  };
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
    navigate('/tickets',{state:{id:1,arrive:ArrivalCity}, state:{id:2, depart:DepartureCity}, state:{id:3, date:selectedDate}});
  };
  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    
    // Increment the day by 1
    date.setDate(date.getDate() + 1);
  
    // If the day becomes 1, set the month to the next month
    if (date.getDate() === 1) {
      date.setMonth(date.getMonth() + 1);
    }
  
    const day = date.getDate();
    const suffix = getDaySuffix(day);
  
    return date.toLocaleDateString('en-US', options) + suffix;
  };
  
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  

  const closePopup = () => {
    setPopupOpen(false);
  };
  const divStyle = {
    backgroundColor: '#f7f9fe', // Set the desired background color using a color code
    width: '100%', // Set width to 100% to cover the entire width of the container
    height: '1000px', // Set height to 100% to cover the entire height of the container
  };

  useEffect(() => {
    if (!listGenerated) {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Dictionary to store generated times for each date
const generatedTimes = {};

const generateRandomDate = () => {
  const year = 2024;
  const month = getRandomInt(1, 12);
  const day = getRandomInt(1, 28); // Assuming all months have 28 days for simplicity

  const paddedMonth = month.toString().padStart(2, '0');
  const paddedDay = day.toString().padStart(2, '0');

  return `${year}-${paddedMonth}-${paddedDay}`;
};

const formatTime = (hour, minute) => {
  const period = hour >= 12 ? 'pm' : 'am';
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const formattedMinute = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${period}`;
};

const calculateFlightTime = (departureTime, arrivalTime) => {
  const [depHour, depMinute] = departureTime.split(':').map(Number);
  const [arrHour, arrMinute] = arrivalTime.split(':').map(Number);

  const totalMinutes = (arrHour * 60 + arrMinute) - (depHour * 60 + depMinute);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

const generateRandomTicket = (id) => {
  const destinations = ['New York', 'Paris', 'Tokyo', 'London', 'Dubai'];
  const arrivalZones = ['London Standard', 'Paris Standard', 'Tokyo Standard', 'Dubai Standard'];
  const departureZones = ['London Standard', 'Paris Standard', 'Tokyo Standard', 'Dubai Standard'];

  const destination = destinations[getRandomInt(0, destinations.length - 1)];
  const arrivalZone = arrivalZones[getRandomInt(0, arrivalZones.length - 1)];
  const departureZone = departureZones[getRandomInt(0, departureZones.length - 1)];

  // Generate a random date
  const date = generateRandomDate();

  // Generate consistent departure and arrival times for each unique date
  let departureTime = generatedTimes[date];
  if (!departureTime) {
    const hour = getRandomInt(8, 11);
    const minute = getRandomInt(0, 59);
    departureTime = formatTime(hour, minute);
    generatedTimes[date] = departureTime;
  }

  const arrivalHour = getRandomInt(13, 19);
  const arrivalMinute = getRandomInt(0, 59);
  const arrivalTime = formatTime(arrivalHour, arrivalMinute);

  const flightTime = calculateFlightTime(departureTime, arrivalTime);

  const price = getRandomInt(300, 800);
  const availableSeats = getRandomInt(20, 100);

  return {
    id,
    destination,
    departureTime,
    arrivalTime,
    flightTime,
    arrivalZone,
    departureZone,
    price,
    availableSeats,
    date,
  };
};

const generateRandomTicketsForYear = () => {
  const numTicketsPerDay = getRandomInt(1, 5); // Adjust the range as needed
  const tickets = [];

  for (let day = 1; day <= 365; day++) {
    for (let ticketIndex = 1; ticketIndex <= numTicketsPerDay; ticketIndex++) {
      tickets.push(generateRandomTicket(tickets.length + 1));
    }
  }

  return tickets;
};


const generatedTickets = generateRandomTicketsForYear();
      setPlaneTicketDataAll(generatedTickets);
      setListGenerated(true);

console.log(planeTicketDataAll);

}
}, [listGenerated]);
const serch = () => {
  navigate('/tickets',{state:{id:3, date:selectedDate}})
  setListGenerated(false);
};
  const planeTicketData = planeTicketDataAll.filter(ticket => ticket.date === '2024-03-01');
  console.log(planeTicketData);
  const [selectedTickets, setSelectedTickets] = useState({});

  const handleTicketSelection = (ticketId, quantity) => {
    setSelectedTickets((prevSelectedTickets) => ({
      ...prevSelectedTickets,
      [ticketId]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const ticketId in selectedTickets) {
      const ticket = planeTicketData.find((t) => t.id === parseInt(ticketId, 10));
      if (ticket) {
        totalPrice += ticket.price * selectedTickets[ticketId];
      }
    }
    return totalPrice;
  };

  return (
    <div style={divStyle} >
      
      <div className='h12'>
      <NavBar></NavBar>
      <div className='here'>
        <div className='searches'>
            <h2 className='searches'>Search</h2>
            <h4>To</h4>
            <input
            type="text"
            placeholder="Departure"
            className="date-set12"
            />
            <h4>From</h4>
            <input
            type="text"
            placeholder="Arrival"
            className="date-set12"
            />
            <h4>Date</h4>
            <input 
            type = "date"
            placeholder = "Date"
            onChange={handleDateChange}
            className="date-set1"
            />
            <button className='btn-search' onClick={serch}>Search</button>
        </div>
        
        <ul className = 'op'>
        {planeTicketData.map((ticket) => (
          <div  key={ticket.id}>
            <div className='all dep'>
              {formatDate(location.state.date)} - Departure
              <div className='fl'>

              
            <div className='map dep'>
              <div className='dep dep1'>{ticket.departureTime}</div>
              <img src={plane} alt="" className='img1'/>
              <div className='dep dep1'>{ticket.arrivalTime}</div>
              
            </div>
            <div className='line'></div>
            <div>
              <div className='ewjfoiwe'>${ticket.price}</div>
              <button onClick={openPopup}>Book</button>
              <CreditCardPopup isOpen={isPopupOpen} onClose={closePopup} />
            </div>
            </div>
            </div>
            
          </div>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PlaneTicketList;