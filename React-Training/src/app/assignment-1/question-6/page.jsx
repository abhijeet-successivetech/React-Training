

import Button from "@/component/assignment-1/Button"; 

const App = () => {
  return (
    <>
    <div>
      <p className="question">
        Q6. .Create a functional component named Button that accepts props for text and color.<br />
        Style the button using inline styles or CSS classes based on the color prop.<br />
        Import and render the Button component in the App component with different text and color props<br />

      </p>
    </div>
    <div>
      <br />
      <h3>Buttons rendered from components</h3>
      <Button text="Click Me" color="blue" />
      <Button text="Submit" color="white" />
      <Button text="Cancel" color="yellow" />
    </div>
    </>
  );
};

export default App;
