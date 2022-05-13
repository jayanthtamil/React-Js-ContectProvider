import React from "react";
import { useSelector } from "react-redux";
import Apple from "../Components/Users"

const User = () => {
  const users = useSelector((state) => {
    return state.users;
  });
  console.log(users);

  return <div>{users.map((user) =>{
      {
      return    <Apple name={user.name} id={user.id} password={user.password}  />
      }
  })}</div>;
};

export default User;
