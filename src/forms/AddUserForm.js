import React, { useState } from "react";

const state = { id: null, name: "", username: "" };

const AddUserForm = ({ addUser }) => {
  const [user, setUser] = useState(state);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmiteHandler = e => {
    e.preventDefault();

    if (!user.name || !user.username) return;

    addUser(user);
    setUser(state);
  };

  return (
    <form onSubmit={onSubmiteHandler}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
