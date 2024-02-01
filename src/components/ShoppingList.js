import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter';


function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);

  function handleCategoryChange(category) {
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      setFilteredItems(filteredItems);
    }
  }

  return (
    <div className='ShoppingList'>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className='Items'>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
