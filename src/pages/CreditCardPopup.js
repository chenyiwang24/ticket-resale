import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreditCardPopup.css'

const CreditCardPopup = ({ isOpen, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePurchase = () => {
    // In a real-world scenario, you would send this data to a secure server
    // for payment processing, and not handle sensitive data on the client side.
    // Additionally, you would use a secure payment gateway.
    alert('Purchase Successful!');
    onClose();
  };
  
const customModalStyles = {
    content: {
      width: '350px', // Set your desired width
      margin: 'auto', // Center the modal horizontally
      overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the alpha channel for transparency
      },
  };

  return (
    <Modal style={customModalStyles} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <div>
        <h1 className="prompt">Enter Credit Card Information</h1>
        <form className="popup">

          <input
            placeholder="Card Number"
            type="text"
            id="cardNumber"
            className="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <input
            placeholder="Expiration Date"
            type="text"
            id="expiryDate"
            className = "expiry-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />

          <input
            type="text"
            placeholder="CVV"
            id="cvv"
            value={cvv}
            className="cvv"
            onChange={(e) => setCvv(e.target.value)}
          />

          
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Cardholder Name"
            className="cardholder"
            onChange={(e) => setName(e.target.value)}
          />
        <div className="button-wrap">
          <button className="purchase" type="button" onClick={handlePurchase}>
            Purchase
          </button>
          <button className="cancel" type="button" onClick={onClose}>
            Cancel
          </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreditCardPopup;