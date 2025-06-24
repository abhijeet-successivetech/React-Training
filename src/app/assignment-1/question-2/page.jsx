import UserCard from "@/component/assignment-1/UserCard";

const ShowCards = () => {
  const users = [
    { name: "Ajay", email: "ajay@gmail.com", avatar: "/boy.png" },
    { name: "Varun", email: "varun@gmail.com", avatar: "/man_2.png" },
    { name: "Raj", email: "raj@gmail.com", avatar: "/man_3.png" },
  ];
  return (
    <>
      <div>
        <p className="question">
          Q2. Create a functional component named UserCard that accepts the
          following props: name, email, and avatarURL.
          Use the props to display the user's name, email, and an image (avatar)
          in the UserCard component. Create multiple instances of the UserCard
          component with different user data.
        </p>
      </div>
      <div className="usercard">
        <br />
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>
    </>
  );
}
export default ShowCards;
