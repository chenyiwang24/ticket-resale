import React, { useState } from 'react';
import NavBar from './NavBar1';
import './PlaneTicketList.css'
import plane from '../assets/plane.png'

const PlaneTicketList = () => {
  const planeTicketData = [
    { id: 1, destination: 'New York', departureTime: '10:45 am', arrivalTime: '1:45 pm'
    , arrivalZone: 'London Standard', departureZone: 'London Standard', price: 300, availableSeats: 50 },
    { id: 1, destination: 'New York', departureTime: '10:45 am', arrivalTime: '1:45 pm'
    , arrivalZone: 'London Standard', departureZone: 'London Standard', price: 300, availableSeats: 50 },
    { id: 1, destination: 'New York', departureTime: '10:45 am', arrivalTime: '1:45 pm'
    , arrivalZone: 'London Standard', departureZone: 'London Standard', price: 300, availableSeats: 50 },
  ];

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
    <div>
      <NavBar></NavBar>
      <div className='here'>
        <div className='searches'>
            <h2 className='searches'>Search</h2>
            <h4>To</h4>
            <input
            type="text"
            placeholder="Departure"
            className="date-set"
            />
            <h4>From</h4>
            <input
            type="text"
            placeholder="Departure"
            className="date-set"
            />
            <h4>Date</h4>
            <input 
            type = "date"
            placeholder = "Date"
            className="date-set1"
            />
        </div>
        <ul className = 'op'>
        {planeTicketData.map((ticket) => (
          <div  key={ticket.id}>
            <div className='all dep'>
              June 10th - Departure
            <div className='map dep'>
              <div className='dep dep1'>{ticket.departureTime}</div>
              <img src={plane} alt="" className='img1'/>
              <div className='dep dep1'>{ticket.arrivalTime}</div>
              <div className="verticalLine"> 1</div>
            </div>
            </div>
            
          </div>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default PlaneTicketList;
