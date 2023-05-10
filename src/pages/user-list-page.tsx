import { useQuery } from '@apollo/client';
import React from 'react';
import { UserList } from '../components/user-list';
import { userListQuery, UserListQueryData } from '../queries/user-list-query';

export const UserListPage = (): React.ReactElement => {
  const { loading, error, data } = useQuery<UserListQueryData>(userListQuery);

  const content = loading ? <p>Loading...</p> : <UserList users={data?.users.nodes} />;

  return error ? <p>Error: {error.message}</p> : content;
};
