import React from 'react';

function Order({ openHour, closeHour, isOpen }) {
  return (
    <div className="order">
      <p>
        {isOpen
          ? `We're open until ${closeHour}:00.`
          : `We are currently closed. We are happy to welcome you between ${openHour}:00 and ${closeHour}:00.`}{' '}
        Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  return (
    <footer className="footer">
      <Order openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
    </footer>
  );
}

export default Footer;
