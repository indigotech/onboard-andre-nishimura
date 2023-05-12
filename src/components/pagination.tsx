import React, { Fragment, useState } from 'react';

export const Pagination = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = 7;
  const neighbours = 2;
  const selectedPages = selectPagesToShow(currentPage, maxPage, neighbours);

  const pageButtons = selectedPages.map((page) => {
    if (typeof page == 'string') {
      return '...';
    } else {
      return (
        <button
          onClick={() => setCurrentPage(page)}
          style={currentPage === page ? { backgroundColor: 'lightGray' } : {}}
        >
          {page + 1}
        </button>
      );
    }
  });

  const previousButton = (
    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
      {'<'}
    </button>
  );

  const nextButton = (
    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === maxPage}>
      {'>'}
    </button>
  );

  return (
    <Fragment>
      {previousButton}
      {pageButtons}
      {nextButton}
    </Fragment>
  );
};

const selectPagesToShow = (currentPage: number, maxPage: number, neighbours: number): (number | string)[] => {
  const expectedTotalPages = neighbours * 2 + 3;

  if (maxPage + 1 > expectedTotalPages) {
    const startPage = Math.max(currentPage - neighbours, 1);
    const endPage = Math.min(currentPage + neighbours, maxPage - 1);

    let selectedPages: (number | string)[] = range(startPage, endPage);

    const pagesCount = selectedPages.length;
    const extraPagesQuantity = expectedTotalPages - pagesCount - 2;

    const isLeftEllipsed = startPage > 1;
    const isRightEllipsed = endPage < maxPage - 1;

    if (isLeftEllipsed && !isRightEllipsed) {
      const extraPages = range(startPage - extraPagesQuantity, startPage - 1);
      selectedPages = ['...', ...extraPages, ...selectedPages];
    } else if (!isLeftEllipsed && isRightEllipsed) {
      const extraPages = range(endPage + 1, endPage + extraPagesQuantity);
      selectedPages = [...selectedPages, ...extraPages, '...'];
    } else if (isLeftEllipsed && isRightEllipsed) {
      selectedPages = ['...', ...selectedPages, '.,.'];
    }

    return [0, ...selectedPages, maxPage];
  }

  return range(0, maxPage);
};

const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};
