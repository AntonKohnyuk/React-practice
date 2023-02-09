import { User } from "../entities/types/userTypes";
import UserComponent from "./user";

interface UsersTableProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  users: User[];
  onDelete: (id: string) => void;
  onToggleBookMark: (id: string) => void;
  onSort: (item: string) => void;
}

const UsersTable = ({
  users,
  onSort,
  ...rest
}: UsersTableProps): JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              onSort("name");
            }}
            scope="col"
          >
            Name
          </th>
          <th
            onClick={() => {
              onSort("profession.name");
            }}
            scope="col"
          >
            Profession
          </th>
          <th scope="col">Traits</th>
          <th
            onClick={() => {
              onSort("completedMeetings");
            }}
            scope="col"
          >
            Meetings
          </th>
          <th
            onClick={() => {
              onSort("rate");
            }}
            scope="col"
          >
            Rating
          </th>
          <th
            onClick={() => {
              onSort("bookmark");
            }}
            scope="col"
          >
            Favourites
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserComponent key={user._id} {...user} {...rest} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
