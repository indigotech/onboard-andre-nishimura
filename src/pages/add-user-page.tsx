import React, { Fragment } from 'react';
import { AddUserForm } from '../components/add-user-form';
import { H1 } from '../components/heading';

export const AddUserPage = (): React.ReactElement => {
  return (
    <Fragment>
      <H1>Create user</H1>
      <AddUserForm />
    </Fragment>
  );
};
