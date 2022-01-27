import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalState";
import "./UserList.css";

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <div>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <div key={user.id} className="userContainer">
              <strong>{user.name}</strong>
              <div className="userButton">
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => removeUser(user.id)}>Delete</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h4 className="noUser">No User</h4>
      )}
    </div>
  );
}

export default UserList;
