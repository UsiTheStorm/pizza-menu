import React from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  // if (isOpen) {
  //   return (
  //     <footer className="footer">
  //       We are open until {closeHour}:00. Come visit us or order online.
  //     </footer>
  //   );
  // }
  // return (
  //   <footer className="footer">
  //     We are currently closed. Come visit us or order online between {openHour}:00 and {closeHour}
  //     :00
  //   </footer>
  // );
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {isOpen
            ? `We're open until ${closeHour}:00.`
            : `We are currently closed. We are happy to welcome you between ${openHour}:00 and ${closeHour}:00.`}{' '}
          Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
