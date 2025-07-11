"use client";

import React, { useState } from "react";

const FetchData = ({ data }) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h3>Fetched Data:</h3>
      <button 
      onClick={() => setShow(!show)} >
        {show ? "Hide" : "Show"} Data
      </button>

      {show && (
        <>
          {data.length === 0 ? (
            <p>No data found</p>
          ) : (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  ID: {item.id}, Name: {item.name}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default FetchData;
