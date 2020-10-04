import React from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

const App = () => {
  return (
    <div className='catch-of-the-day'>
      <div className='menu'>
        <Header />
      </div>
      <Order />
      <Inventory />
    </div>
  );
};

export default App;
