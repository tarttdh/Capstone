import React from 'react';

const Pagination = (props) => {
  // destructuring the currentPage and setCurrentPage from the props
  const { currentPage, setCurrentPage } = props;

  // logic for changing the current page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  // logic for displaying the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalArticles / props.articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => handleClick(number)}
      >
        {number}
      </li>
    );
  });

  return (
    <ul>
      <li onClick={() => handleClick(currentPage - 1)}>Prev</li>
      {renderPageNumbers}
      <li onClick={() => handleClick(currentPage + 1)}>Next</li>
    </ul>
  );
};

export default Pagination;
