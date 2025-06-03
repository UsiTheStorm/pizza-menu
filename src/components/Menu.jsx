import React from 'react';

import pizzaData from '../data';

function Pizza({ name, ingredients, photoName, price }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
      <span>{price}$</span>
    </div>
  );
}

console.log(pizzaData);
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map(({ name, ingredients, photoName, price }) => (
          <Pizza
            key={name}
            name={name}
            ingredients={ingredients}
            photoName={photoName}
            price={price}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;

// export default Pizza;
