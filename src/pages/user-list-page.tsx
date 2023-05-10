import React, { Fragment } from 'react';
import { UserList } from '../components/user-list';

export type UserType = {
  id: string;
  name: string;
  email: string;
};

export const UserListPage = (): React.ReactElement => {
  const usersMockData: UserType[] = [
    {
      id: '1',
      name: 'Grayson Nunez',
      email: 'grayson.nunez@email.com',
    },
    {
      id: '2',
      name: 'Brendon Palmer',
      email: 'brendon.palmer@email.com',
    },
    {
      id: '3',
      name: 'Shannon Reyes',
      email: 'shannon.reyes@email.com',
    },
    {
      id: '4',
      name: 'Sydney Sherman',
      email: 'sydney.sherman@email.com',
    },
  ];

  return (
    <Fragment>
      <UserList users={usersMockData} />
    </Fragment>
  );
};
