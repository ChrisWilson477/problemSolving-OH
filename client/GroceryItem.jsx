import React from "react";

const GroceryItem = ({gList}) => {


  return (
    <div>
      <h3>
      {gList.map((item, i) =>
        <li key={i}> {item.groceryItem} </li>)}

        </h3>
    </div>

  )};

export default GroceryItem;
