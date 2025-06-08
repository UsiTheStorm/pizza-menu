import React from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  if (isOpen) {
    return (
      <footer className="footer">
        We are open until {closeHour}:00. Come visit us or order online.
      </footer>
    );
  }
  return (
    <footer className="footer">
      We are currently closed. Come visit us or order online between {openHour}:00 and {closeHour}
      :00
    </footer>
  );
}

export default Footer;
