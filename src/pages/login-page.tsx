import React, { Fragment } from 'react';
import { H1 } from '../components/heading';
import { LoginForm } from '../components/login-form';

export const LoginPage = (): React.ReactElement => {
  return (
    <Fragment>
      <H1>Welcome to Taqtile!</H1>
      <LoginForm />
    </Fragment>
  );
};
