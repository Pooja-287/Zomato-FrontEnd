import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Define the range of pages to display around the current page (2 pages before and 2 pages after)
  const pageLimit = 2; // Number of pages to show before and after the current page
  let startPage = currentPage - pageLimit;
  let endPage = currentPage + pageLimit;

  // Ensure the page range stays within bounds
  if (startPage < 1) startPage = 1;
  if (endPage > totalPages) endPage = totalPages;

  // Populate the pages array based on the current range
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination mb-5">
      <ul className="pages d-flex justify-content-center">
        {/* Previous button */}
        <li
          className="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </li>

        {/* Page buttons */}
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </li>
        ))}

        {/* Next button */}
        <li
          className="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;









// import React from "react";

// export default function FilterPagination({ filterData, pageCount }) {
//   return (
//     <>
//       <div className="my-4 btn-main d-flex justify-content-center mx-0">
//         {Array(pageCount)
//           .fill(1)
//           .map((v, i) => {
//             return (
//               <button
//                 className="btn btn-clr  ms-2"
//                 onClick={(event) => filterData(event, "page")}
//                 value={i + 1}
//                 key={i}
//               >
//                 {i + 1}
//               </button>
//             );
//           })}
//       </div>
//     </>
//   );
// }
