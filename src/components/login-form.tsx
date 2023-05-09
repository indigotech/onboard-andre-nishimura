import React, { FormEventHandler, useState } from 'react';
import { FetchResult, useMutation } from '@apollo/client';
import { loginMutation, LoginType } from './login-mutation';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';
import { validateEmail, validatePassword } from '../functions/form-validations';
import { useNavigate } from 'react-router-dom';

export const LoginForm = (): React.ReactElement => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emaiLErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const [login, { loading, error }] = useMutation(loginMutation);

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(emailValue, setEmailErrors);
    const isPasswordValid = validatePassword(passwordValue, setPasswordErrors);

    if (isEmailValid && isPasswordValid) {
      login({ variables: { email: emailValue, password: passwordValue } })
        .then((result: FetchResult<Record<string, LoginType>>) => {
          const token = result.data ? result.data.login.token : '';
          localStorage.setItem('token', token);
          navigate('/blank-page', { replace: true });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name='email' label='E-mail' value={emailValue} onValueChange={setEmailValue} errors={emaiLErrors} />
      <PasswordInput
        name='password'
        label='Password'
        value={passwordValue}
        onValueChange={setPasswordValue}
        errors={passwordErrors}
      />
      <div>{loading ? <SubmitButton label='Loading...' disabled /> : <SubmitButton label='Log in' />}</div>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};
