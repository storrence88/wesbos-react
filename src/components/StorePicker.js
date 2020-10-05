import React, { useRef } from 'react';
import { getFunName } from '../helpers';

const StorePicker = () => {
  const inputVal = useRef(null);
  const goToStore = (event) => {
    event.preventDefault();
    console.log(inputVal.current.value);
    console.log('Going to store!');
  };

  return (
    <form className='store-selector' onSubmit={goToStore}>
      <h2>Please Enter a Store</h2>
      <input
        type='text'
        required
        placeholder='Store Name'
        defaultValue={getFunName()}
        ref={inputVal}
      />
      <button type='submit'>Visit Store</button>
    </form>
  );
};

export default StorePicker;
