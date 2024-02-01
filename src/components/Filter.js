import React from 'react';

function Filter({ onCategoryChange }) {

  function handleCategoryChange(event) {
    const category = event.target.value;
    onCategoryChange(category); 
  }

  return (
    <div className='Filter'>
      <select name='filter' onChange={handleCategoryChange}>
        <option value='All'>Filter by category</option>
        <option value='Produce'>Produce</option>
        <option value='Dairy'>Dairy</option>
        <option value='Dessert'>Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
