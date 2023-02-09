import { Professions } from "../entities/types/userTypes";

interface GroupListProps {
  items: Professions;
  selectedItem: string;
  onItemSelect: (id: string) => void;
}

const GroupList = ({
  items,
  selectedItem,
  onItemSelect,
}: GroupListProps): JSX.Element => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          className={`list-group-item${
            items[item]._id === selectedItem ? " active" : ""
          }`}
          aria-current="true"
          key={items[item]._id}
          onClick={() => {
            onItemSelect(items[item]._id);
          }}
        >
          {items[item].name}
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
