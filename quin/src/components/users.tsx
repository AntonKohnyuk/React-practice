import { useEffect, useState } from "react";
import { User } from "../entities/types/userTypes";
import paginate from "../entities/utils/paginate";
import GroupList from "./groupList";
import Pagination from "./paginations";
import api from "../entities/api";
import _ from "lodash";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";

interface UsersProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  users: User[];
  onDelete: (id: string) => void;
  onToggleBookMark: (id: string) => void;
}

const UsersList = ({ users, ...rest }: UsersProps): JSX.Element => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState({});
  const [selectedProf, setSelectedProf] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "name", order: true });

  const handlePageChange = (pageIndex: number): void => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (id: string): void => {
    setSelectedProf(id);
  };

  const handleSort = (item: string): void => {
    sortBy.iter === item
      ? setSortBy((prev) => ({ ...prev, order: !prev.order }))
      : setSortBy({ iter: item, order: true });
  };

  const clearFilter = (): void => {
    setSelectedProf("");
  };

  useEffect(() => {
    api.professons.fetchAll().then((data) => {
      setProfessions(data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const filteredUsers =
    selectedProf.length > 0
      ? users.filter((user) => user.profession._id === selectedProf)
      : users;

  const count = filteredUsers.length;
  const sortedUsers = _.orderBy(
    filteredUsers,
    [sortBy.iter],
    [`${sortBy.order ? "asc" : "desc"}`],
  );

  const usersCrop = paginate(sortedUsers, currentPage, pageSize);

  return (
    <div className="d-flex flex-row justify-content-center mt-2">
      {!_.isEmpty(professions) && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button onClick={clearFilter} className="btn btn-secondary mt-2">
            Reset
          </button>
        </div>
      )}
      <div>
        <SearchStatus length={count} />
        {count > 0 && (
          <div className="d-flex flex-column">
            <UsersTable users={usersCrop} {...rest} onSort={handleSort} />
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
