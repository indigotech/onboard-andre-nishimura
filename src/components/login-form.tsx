import React, { FormEventHandler, Key, useState } from 'react';
import { FetchResult, useMutation } from '@apollo/client';
import { loginMutation, LoginData } from '../mutations/login-mutation';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';
import { validateEmail, validatePassword } from '../functions/form-validations';
import { useNavigate } from 'react-router-dom';

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
      <TextInput
        name='email'
        label='E-mail'
        value={emailValue}
        onValueChange={setEmailValue}
        errors={formErrors.email}
      />
      <PasswordInput
        name='password'
        label='Password'
        value={passwordValue}
        onValueChange={setPasswordValue}
        errors={formErrors.password}
      />
      <div>{loading ? <SubmitButton label='Loading...' disabled /> : <SubmitButton label='Log in' />}</div>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};
