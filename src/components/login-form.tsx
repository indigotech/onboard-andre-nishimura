import React, { FormEventHandler, Key, useState } from 'react';
import { FetchResult, useMutation } from '@apollo/client';
import { loginMutation, LoginData } from '../mutations/login-mutation';
import { SubmitButton } from './submit-button/submit-button';
import { validateEmail, validatePassword } from '../functions/form-validations';
import { useNavigate } from 'react-router-dom';
import { FormField } from './form-field';

export const LoginForm = (): React.ReactElement => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formErrors, setFormErrors] = useState<Record<Key, string[]>>({
    email: [],
    password: [],
  });

  const [login, { loading, error }] = useMutation(loginMutation);

  const navigate = useNavigate();

  const isFormValid = () => {
    const errors = {
      email: validateEmail(emailValue),
      password: validatePassword(passwordValue),
    };

    setFormErrors(errors);
    return Object.values(errors).every((errors) => errors.length === 0);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      login({ variables: { email: emailValue, password: passwordValue } })
        .then((result: FetchResult<Record<string, LoginData>>) => {
          const token = result.data ? result.data.login.token : '';
          localStorage.setItem('token', token);
          navigate('/user-list', { replace: true });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        name='email'
        label='E-mail'
        type='text'
        value={emailValue}
        onValueChange={setEmailValue}
        errors={formErrors.email}
      />
      <FormField
        name='password'
        label='Password'
        type='password'
        value={passwordValue}
        onValueChange={setPasswordValue}
        errors={formErrors.password}
      />
      <SubmitButton label='Log in' loading={loading} />
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};
