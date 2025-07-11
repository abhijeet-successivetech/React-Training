"use client";
import { useState } from "react";

const Filter = () => {
  const myitems = [
    "Red",
    "Blue",
    "Yello",
    "Green",
    "Brown",
    "White",
  ];
  
  const [items, setItems] = useState(myitems);
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (e) => {
    const searchValue = e.target.value; 
    setSearchTerm(searchValue);
    
    if (searchValue === "") {
      setItems(myitems);
    } else {
      setItems(myitems.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase())));
    }
  };

  return (
    <div className="container-center">
      <label>Search here: </label>
      <input type="text" onChange={changeHandler} value={searchTerm} />
      <ul>
        {items.map((mobile, index) => (
          <li key={index}>{mobile}</li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
