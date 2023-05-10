import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { Pagination } from '../components/pagination';
import { UserList } from '../components/user-list';
import { userListQuery, UserListQueryData } from '../queries/user-list-query';

export const UserListPage = (): React.ReactElement => {
  const { loading, error, data } = useQuery<UserListQueryData>(userListQuery);

  const content = loading ? <p>Loading...</p> : <UserList users={data?.users.nodes} />;

  return (
    <Fragment>
      {error ? <p>Error: {error.message}</p> : content}
      <Pagination />
    </Fragment>
  );
};
