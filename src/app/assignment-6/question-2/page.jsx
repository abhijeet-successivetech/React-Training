import Counter from "@/component/assignment-6/Counter";

const Page = () => {
  return (
    <div className="container-center">
      <p className="question">
        Q2. Create a Counter component that shows a number with increment and
        decrement buttons. Write tests using React Testing Library to verify
        that the counter updates correctly on button clicks.
      </p>
     <Counter/>
    </div>
  );
};
export default Page;