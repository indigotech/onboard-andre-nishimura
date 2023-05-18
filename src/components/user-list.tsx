import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../queries/user-list-query';

interface UserListProps {
  users?: User[];
}

export const UserList = ({ users }: UserListProps): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <ul>
      {users?.map((user: User) => {
        return (
          <li key={user.id}>
            <a
              onClick={() => {
                navigate(`/user-details/${user.id}`), { replace: true };
              }}
            >
              {user.name} - {user.email}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
