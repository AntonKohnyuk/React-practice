import _ from "lodash";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.length > 1 &&
        pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? " active" : "")}
            key={`page_ ${page}`}
            onClick={() => {
              onPageChange(page);
            }}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
