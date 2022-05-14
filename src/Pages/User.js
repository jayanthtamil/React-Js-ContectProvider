import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Apple from "../Components/Users";
import * as userActions from "../Store/Actions/User";

const User = () => {
  const users = useSelector((state) => {
    return state.users;
  });
  console.log("user", users);
  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(userActions.RemoveList());
  };

  return (
    <div>
      {users.length != 0 ? (
        users.map((user, i) => {
          return (
            <div>
              <div key={i}>
                <h1>Name : {user.name}</h1>
                <h1>ID : {user.id}</h1>
                <h1>password : {user.password}</h1>
                <hr />
              </div>
              <button type="button" onClick={removeUser}>
                Clear List
              </button>
            </div>
          );
        })
      ) : (
        <h1>NO RESULT FOUND</h1>
      )}
    </div>
  );
};

export default User;
