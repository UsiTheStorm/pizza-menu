import React from 'react';

import pizzaData from '../data';

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  const { name, ingredients, price, photoName } = pizzaObj;
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}$</span>
      </div>
    </li>
  );
}

console.log(pizzaData);
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
