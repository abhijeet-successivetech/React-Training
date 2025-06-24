import Counter from "@/component/Counter";

const countClick = () => {
  return (
    <>
      <div>
        <p className="qustion">
          Q4.Create a functional component named Counter that displays a count
          and two buttons: "Increment" and "Decrement".
          <br />
          Implement event handlers for the "Increment" and "Decrement" buttons
          to increase and decrease the count.Display the updated count on the
          screen.
        </p>
      </div>
      <div>
        <br />
        <Counter />
      </div>
    </>
  );
}
export default countClick;
