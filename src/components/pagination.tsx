import React, { Fragment, useState } from 'react';

export const Pagination = (): React.ReactElement => {
  const [page, setPage] = useState(1);
  const maxPage = 4;
  const selectedPages = selectPagesToShow(page, maxPage);
  console.log(selectedPages);

  return (
    <Fragment>
      {selectedPages?.map((page) => {
        return <button>{page + 1}</button>;
      })}
    </Fragment>
  );
};

const selectPagesToShow = (currentPage: number, maxPage: number): number[] | void => {
  if (maxPage < 5) {
    return Array.from({ length: maxPage }, (value, index) => index);
  }
};
