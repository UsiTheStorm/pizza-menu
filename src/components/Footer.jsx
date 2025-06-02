import React from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  if (isOpen) {
    return <footer>We are open until {closeHour}:00</footer>;
  }
  return <footer>We are currently closed</footer>;
}

export default Footer;
