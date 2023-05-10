import React from 'react';
import { UserType } from '../queries/user-list-query';

interface UserListProps {
  users?: UserType[];
}

export const UserList = ({ users }: UserListProps): React.ReactElement => {
  return (
    <ul>
      {users?.map((user) => {
        return (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        );
      })}
    </ul>
  );
};
