import { Profession, Trait } from "../entities/types/userTypes";
import DeleteIcon from "@mui/icons-material/Delete";

interface UserProps {
  _id: string;
  name: string;
  profession: Profession;
  qualities: Array<Trait>;
  completedMeetings: number;
  rate: number;
}

const User = ({
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
}: UserProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((q) => (
          <p key={q._id}>{q.name}</p>
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <button className="btn btn-danger">
          <DeleteIcon sx={{ color: "white" }} />
        </button>
      </td>
    </tr>
  );
};

export default User;
