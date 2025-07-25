import React from "react";

interface CardProps {
  name:string;
  email:string;
  avatar:string;
}

const UserCard: React.FC<CardProps> = ({ name, email, avatar }) => {
  return (
    <>
      <div className="card">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        <img className="user-avatar" src={avatar} alt="user-avatar" />
      </div>
    </>
  );
}
export default UserCard;
