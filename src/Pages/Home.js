import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as userActions from "../Store/Actions/User";

const Home = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    const { name, value } = event.target;
    console.log("]]]]", name, value);
    setUser((previoesitems) => {
      return {
        ...previoesitems,
        [name]: value,
      };
    });
  };
  const addUser = () => {
    dispatch(userActions.addUser(user));
    setUser({
      id: "",
      name: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Add User</h1>
      <input
        name="id"
        placeholder="Enter a Id"
        onChange={inputHandler}
        value={user.id}
      />
      <input
        name="name"
        placeholder="Enter a name"
        onChange={inputHandler}
        value={user.name}
      />
      <input
        name="password"
        placeholder="Enter a password"
        onChange={inputHandler}
        value={user.password}
      />
      <button type="submit" onClick={addUser}>
        Add User
      </button>
      <Link to="/user">Users List</Link>
    </div>
  );
};

export default Home;
