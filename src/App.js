import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState({});

  const updateCart = (id, amount) => {
    setCart(prevCart => {
      const newCart = { ...prevCart, [id]: (prevCart[id] || 0) + amount };
      if (newCart[id] <= 0) delete newCart[id];
      return newCart;
    });
  };

  const clearCart = () => setCart({});

  const getTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      return total + (item.price * quantity);
    }, 0).toFixed(2);
  };

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert('Your cart is empty!');
      return;
    }
    let receipt = 'Order placed!\n\nYour order:\n';
    Object.entries(cart).forEach(([id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      receipt += `${quantity} x ${item.title} - $${(item.price * quantity).toFixed(2)}\n`;
    });
    receipt += `\nTotal: $${getTotal()}`;
    alert(receipt);
  };

  return (
    <div className='container'>
      <div className='logo'>
        <img src={`https://alanakoshi.github.io/cs378-p2/images/Japanese-House-logo.png`} alt='Japanese House logo' />
      </div>
      <div className="row">
        <div className="cafe_desc" id="first">Experience Japanese cuisine</div>
        <div className="cafe_desc" id="second">Ingredients sourced from Japan</div>  
      </div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((item) => (
          <MenuItem 
            id={item.id}
            title={item.title} 
            description={item.description} 
            imageName={item.imageName}
            price={item.price}
            count = {cart[item.id] || 0}
            updateCart={updateCart}
          />
        ))}
      </div>
      <div className='row cart'>
        <div className='col' style={{ paddingLeft: '30px' }}>
          <h2 className='subtotal'>Subtotal: ${getTotal()}</h2>
        </div>
        <div className='col-2 d-flex justify-content-center cart-button'>
          <button className='btn btn-light' onClick={handleOrder} style={{ borderRadius: '40px', padding: '0px 15px', border: '2px solid black' }}>Order</button>
        </div>
        <div className='col-3 d-flex justify-content-center cart-button'>
          <button className='btn btn-light' onClick={clearCart} style={{ borderRadius: '40px', padding: '0px 15px', border: '2px solid black' }}>Clear all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
