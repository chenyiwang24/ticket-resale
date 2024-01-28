import React, { useState } from 'react';

const PlaneTicketList = () => {
  const planeTicketData = [
    { id: 1, destination: 'New York', departureTime: '2024-02-01T08:00:00Z', price: 300, availableSeats: 50 },
    { id: 2, destination: 'Los Angeles', departureTime: '2024-02-05T10:30:00Z', price: 400, availableSeats: 30 },
    { id: 3, destination: 'Miami', departureTime: '2024-02-10T12:45:00Z', price: 250, availableSeats: 20 },
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
      <h1>Available Plane Tickets</h1>
      <ul>
        {planeTicketData.map((ticket) => (
          <li key={ticket.id}>
            <strong>{ticket.destination}</strong>
            <br />
            Departure Time: {new Date(ticket.departureTime).toLocaleString()}
            <br />
            Price: ${ticket.price} per ticket
            <br />
            Available Seats: {ticket.availableSeats}
            <br />
            <label htmlFor={`quantity_${ticket.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity_${ticket.id}`}
              min="0"
              max={ticket.availableSeats}
              value={selectedTickets[ticket.id] || 0}
              onChange={(e) => handleTicketSelection(ticket.id, parseInt(e.target.value, 10))}
            />
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Price: ${calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default PlaneTicketList;
