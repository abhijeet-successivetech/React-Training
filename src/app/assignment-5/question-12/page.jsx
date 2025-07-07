"use client";
import { Button } from "./Button";

const ButtonPage = () => {
  const clickHandlers = () => {
    console.log("Button is clicked");
  };
  return (
    <div className="container-center">
      <p className="question">
        Q12 Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>
      <h1>Reusable Button</h1>
      <Button buttonType={"Primary"} onClick={clickHandlers} />
      <Button buttonType={"Secondary"} onClick={clickHandlers} />
      <Button buttonType={"Danger"} onClick={clickHandlers} />
    </div>
  );
};

export default ButtonPage;
