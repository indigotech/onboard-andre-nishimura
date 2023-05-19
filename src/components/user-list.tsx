import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../queries/user-list-query';

interface UserListProps {
  users?: User[];
}

export const UserList = ({ users }: UserListProps): React.ReactElement => {
  return (
    <ul>
      {users?.map((user: User) => {
        return (
          <li key={user.id}>
            <Link to={`/user-details/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
