import Counter from "@/component/Counter"

const CountPage = () => {
  return (
    <div className="flex">
    <p className="question">
      Q1. Create a functional component called Counter.
      Inside the component, use the useState hook to manage a state variable named count initialized to 0.
      Render the current value of count in a  element.
     Add two buttons, one for incrementing the count and another for decrementing it.
     When the user clicks on the buttons, update the count state accordingly.
    </p>
    <div>
    <Counter />
    </div>
    </div>
  );
};
export default CountPage;