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
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

export default Menu;

// export default Pizza;
