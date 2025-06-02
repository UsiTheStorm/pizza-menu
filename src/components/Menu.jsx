import React from 'react';

import pizzaData from '../data';

function Pizza() {
  return (
    <div>
      <img src="./pizzas/focaccia.jpg" alt="" />
      <h3>Pizza</h3>
      <p>yummyyyy!!</p>
    </div>
  );
}

console.log(pizzaData);
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

export default Menu;

// export default Pizza;
