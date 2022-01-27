import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

export function Heading() {
  return (
    <div className="headingContainer">
      <h2>My Team</h2>
      <Link to="/add">Add user</Link>
    </div>
  );
}
