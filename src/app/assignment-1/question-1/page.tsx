import Greeting from "@/component/assignment-1/Greeting";

const GreetPage = () => {
  return (
    <>
      <div>
        <p className="question">
          Q1. 1.Create a functional component named Greeting that displays a
          simple "Hello, Next.js!" message on the screen. Import and render the
          Greeting component in the App component.
        </p>
      </div>
      <div>
        <br />
        <Greeting />
      </div>
    </>
  );
}
export default GreetPage;
