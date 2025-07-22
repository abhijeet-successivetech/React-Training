import UserProfile from "@/component/assignment-6/UserProfile";

const Page = () => {
  return (
    <div className="container-center">
      <p className="question">
        Q4. Implement a UserProfile component that displays a user's name,
        email, and phone number using props. Write tests using React Testing
        Library to ensure the component correctly renders the provided user
        data.
      </p>
      <UserProfile name={"Abhijeet"} email={"Abhijeet@gmail.com"} phone={66712221112} />
    </div>
  );
};

export default Page;