import { useState } from "react";
import UsersList from "./components/users";
import api from "./entities/api";

function App(): JSX.Element {
  const [users, setUsers] = useState(api.getUsers());
  const handleDelete = (id: string): void => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookMark = (id: string): void => {
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user,
      ),
    );
  };
  return (
    <div>
      <UsersList
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  );
}

export default App;
