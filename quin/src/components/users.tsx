import { useState } from "react";
import api from "../entities/api";
import User from "./user";

const UsersList = () => {
  const [users, setUsers] = useState(api.getUsers());
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Profession</th>
            <th scope="col">Traits</th>
            <th scope="col">Meetings</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user._id} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
