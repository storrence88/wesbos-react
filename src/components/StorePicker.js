import React, { useRef } from 'react';
import { getFunName } from '../helpers';

const StorePicker = (props) => {
  const inputVal = useRef(null);
  const goToStore = (event) => {
    event.preventDefault();
    const storeName = inputVal.current.value;
    props.history.push(`/store/${storeName}`);
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
