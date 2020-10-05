import React from 'react';

const AddFishForm = () => {
  return (
    <form className='fish-edit'>
      <input name='name' type='text' placeholder='Name' />
      <input name='price' type='text' placeholder='Price' />
      <select name='status'>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold Out!</option>
      </select>
      <textarea name='desciption' placeholder='Desciption' />
      <input name='image' type='text' placeholder='Image' />
      <button type='submit'>+ Add Fish</button>
    </form>
  );
};

export default AddFishForm;
