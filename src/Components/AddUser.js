import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalState";
import { v4 as uuid } from "uuid";
import "./AddUser.css";

export function AddUser() {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSubmit() {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    navigate("/");
  }

  function handleChange({ target }) {
    setName(target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="addInput">
        <label>Name</label>
        <input
          required
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
        ></input>
      </div>
      <div className="addButton">
        <button type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
}
