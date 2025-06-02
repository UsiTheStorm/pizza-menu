function Pizza() {
  return (
    <div>
      <img src="./pizzas/focaccia.jpg" alt="" />
      <h2>Pizza</h2>
      <p>yummyyyy!!</p>
    </div>
  );
}

import React from 'react';

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

export default Menu;

// export default Pizza;
