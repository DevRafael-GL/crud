import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalState";
import "./Edit.css";

export const EditUser = () => {
  const { id } = useParams();

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = id;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [id, users]);

  function handleSubmit() {
    editUser(selectedUser);
    navigate("/");
  }

  function handleChange({ target }) {
    setSelectedUser({ ...selectedUser, [target.name]: target.value });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="editInput">
        <label>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={selectedUser.name}
          placeholder="Enter Name"
        ></input>
      </div>
      <div className="editButton">
        <button type="submit">Edit Name</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
};
