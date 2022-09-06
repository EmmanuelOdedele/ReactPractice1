import React from "react";
import OnClick from "./OnClick";
import "../assets/styles/avatar.css"
import "../assets/styles/users.css"

function ListOfUsers() {
  const users = [
    {
      name: "Emmanuel Odedele",
      bio: "I am a web developer",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Stephen Olorunsesan",
      bio: "Agba Corel (Pablo Richie)",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  const userList = users.map((user) => {
    return (
      <div className="users">
        <img src={user.avatar} alt="pic" className="card-image" />
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <OnClick />
      </div>
    );
  });

  return <div>{userList}</div>;
}

export default ListOfUsers;
