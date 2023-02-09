import { Profession, Trait } from "../entities/types/userTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import TraitBadge from "./trait";
import BookMark from "./bookMark";

interface UserProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  _id: string;
  name: string;
  profession: Profession;
  qualities: Trait[];
  completedMeetings: number;
  rate: number;
  bookmark: boolean;
  onDelete: (id: string) => void;
  onToggleBookMark: (id: string) => void;
}

const UserComponent = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookMark,
}: UserProps): JSX.Element => {
  return (
    <tr>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((q) => (
          <TraitBadge key={q._id} {...q} />
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark
          status={bookmark}
          onClick={() => {
            onToggleBookMark(_id);
          }}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          <DeleteIcon sx={{ color: "white" }} />
        </button>
      </td>
    </tr>
  );
};

export default UserComponent;
