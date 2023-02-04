import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

interface BookMarkProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  status: boolean;
}

const BookMark = ({ status, ...rest }: BookMarkProps) => {
  return (
    <button {...rest}>{status ? <TurnedInIcon /> : <TurnedInNotIcon />}</button>
  );
};

export default BookMark;
