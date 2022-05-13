import React from "react";

const Apple = (name, id, password) => {
  return (
    <ul>
      <li>
        <p>{name}</p>
        <p>{id}</p>
        <p>{password}</p>
      </li>
    </ul>
  );
};

export default Apple;
