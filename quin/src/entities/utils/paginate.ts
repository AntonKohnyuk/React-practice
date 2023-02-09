import { User } from "../types/userTypes";

function paginate(items: User[], pageNumber: number, pageSize: number): User[] {
  const startIndex = (pageNumber - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
}

export default paginate;
