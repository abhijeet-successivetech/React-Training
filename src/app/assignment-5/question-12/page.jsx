"use client";
import { Button } from "../../../component/assignment-5/Button";

const ButtonPage = () => {
  const clickHandlers = () => {
    console.log("Button is clicked");
  };

  return (
    <div className="container-center">
      <p className="question">
        Q12. Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>

      <h1>Reusable Button</h1>

      <Button variant="Primary" label="Primary Button" onClick={clickHandlers} />
      <Button
        variant="Secondary"
        label="Secondary Button"
        onClick={clickHandlers}
      />
      <Button variant="Danger" label="Danger Button" onClick={clickHandlers} />
    </div>
  );
};

export default ButtonPage;
