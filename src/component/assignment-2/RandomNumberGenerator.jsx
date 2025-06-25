"use client"
import { useState } from "react"

const RandomNumberGenerator = () => {
  const [randomNumber,setrandomNumber] = useState(0);

  const generateRandom = () => {
    setrandomNumber( Math.ceil(Math.random()*100))
  }
  return (

    <>
    <label>The number is : {randomNumber}</label>
    <button onClick={generateRandom}>Genrate Random</button>
    </>

  );
}
export default RandomNumberGenerator;