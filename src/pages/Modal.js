import React, { useState } from 'react';
import './Modal.css'; // Import your modal styles

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
            <div className="modal-content">
              {/* Add your modal content here */}
              <p>This is the modal content</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
