import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../components/pagination';
import { UserList } from '../components/user-list';
import { userListQuery, UserListQueryData } from '../queries/user-list-query';

const PAGE_LIMIT = 20;

export const UserListPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const paginationOffset = currentPage * PAGE_LIMIT;

  const { loading, error, data } = useQuery<UserListQueryData>(userListQuery, {
    variables: {
      offset: paginationOffset,
      limit: PAGE_LIMIT,
    },
    fetchPolicy: 'cache-and-network',
  });

  const count = data?.users.count;

  const content = loading ? <p>Loading...</p> : <UserList users={data?.users.nodes} />;

  return (
    <Fragment>
      <button onClick={() => navigate('/add-user', { replace: true })}>+</button>
      {error ? <p>Error: {error.message}</p> : content}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsCount={count}
        limit={PAGE_LIMIT}
        neighbours={2}
        loading={loading}
      />
    </Fragment>
  );
};
