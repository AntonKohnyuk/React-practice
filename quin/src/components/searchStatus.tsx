interface SearchStatusProps {
  length: number;
}
const SearchStatus = ({ length }: SearchStatusProps) => {
  const createPhrase = (number: number) =>
    number + (number > 1 ? " people want " : " person wants ") + "to meet you";

  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length ? createPhrase(length) : "So sad, no one wants to meet you..."}
      </span>
    </h2>
  );
};

export default SearchStatus;
