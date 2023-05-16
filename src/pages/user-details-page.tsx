import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetailsPage = (): React.ReactElement => {
  const { userId } = useParams();
  return <div>{userId}</div>;
};
