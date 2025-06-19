"use client"

const UserCard = ({name,email,avatar}) => {
  return (
    <>
    <div className="card">
      <div className="user-name">{name}</div>
      <div className="user-email">{email}</div>
      <img className="user-avatar" src = {avatar}  alt ="user-avatar"/>
    </div>
    </>

  );
};

export default UserCard