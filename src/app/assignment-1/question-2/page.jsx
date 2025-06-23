import UserCard from "@/component/assignment-1/UserCard";


const ShowCards = () => {
  return (
    <>
    <div>
    <p className = "question">
      Q2. Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.<br />
      Use the props to display the user's name, email, and an image (avatar) in the UserCard component.Create multiple instances of the UserCard component with different user data.

    </p>
    </div>

    <div className = "usercard">
      <br />
      <UserCard name={"Ajay"} email={"ajay@gmail.com"} avatar={"/boy.png"} />
      <UserCard name={"Varun"} email={"varun@gmail.com"} avatar={"/man_2.png"} />
      <UserCard name={"Raj"} email={"raj@gmail.com"} avatar={"/man_3.png"} />

    </div>
    </>
  );
};

export default ShowCards;