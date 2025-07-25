import React from "react";

interface ButtonProps {
  text:string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  const style = {
    backgroundColor: color,
    color: "red",
    text: "xl",
    padding: 8,
    borderColor: "white",
    borderRadius: "14px",
  };
  return <button style={style}>{text}</button>;
}
export default Button;
