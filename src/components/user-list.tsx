import React from 'react';
import { UserType } from '../pages/user-list-page';

interface UserListProps {
  users: UserType[];
}

export const UserList = ({ users }: UserListProps): React.ReactElement => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.name}>
            {user.name} - {user.email}
          </li>
        );
      })}
    </ul>
  );
};
