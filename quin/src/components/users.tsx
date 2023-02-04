import { useState } from "react";
import { User } from "../entities/types/userTypes";
import paginate from "../entities/utils/paginate";
import Pagination from "./paginations";
import UserComponent from "./user";

interface UsersProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  users: User[];
  onDelete(id: string): void;
  onToggleBookMark(id: string): void;
}

const UsersList = ({ users, ...rest }: UsersProps) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const usersCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {count > 0 && (
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {usersCrop.map((user) => (
                <UserComponent key={user._id} {...user} {...rest} />
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default UsersList;
