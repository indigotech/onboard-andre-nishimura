import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { userDetailsQuery, UserDetailsQueryData } from '../queries/user-details-query';

export const UserDetailsPage = (): React.ReactElement => {
  const { userId } = useParams();

  const { data, error, loading } = useQuery<UserDetailsQueryData>(userDetailsQuery, { variables: { userId } });

  if (loading) {
    return <p>Loading user detail...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const user = data?.user;

  return (
    <Fragment>
      <p>Name: {user?.name}</p>
      <p>E-mail: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Birth date: {user?.birthDate}</p>
      <p>Role: {user?.role}</p>
    </Fragment>
  );
};
