import React from "react";

const GroceryItem = ({gList}) => {
  return gList.map((item, index) => (
    <div key={index}>
      <li key={index}> {item} </li>
    </div>
  ));
};

export default GroceryItem;
