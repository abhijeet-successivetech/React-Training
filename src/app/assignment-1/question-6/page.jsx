<<<<<<< HEAD


import Button from "@/component/Button"; 
=======
import Button from "@/component/Button";
>>>>>>> ff70403607abd2968d3d3443c72b05e859e71eb0

const ButtonPage = () => {
  return (
    <>
      <div>
        <p className="question">
          Q6. .Create a functional component named Button that accepts props for
          text and color. Style the button using inline styles or CSS classes
          based on the color prop. Import and render the Button component in the
          App component with different text and color props
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
}
export default ButtonPage;
