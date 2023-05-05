import React, { FormEventHandler, useState } from 'react';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';

export const LoginForm = (): React.ReactElement => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (emailValue && passwordValue) {
      console.log(`Logged in with email ${emailValue} and password ${passwordValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput name='email' label='E-mail' value={emailValue} onValueChange={setEmailValue} />
        <PasswordInput name='password' label='Password' value={passwordValue} onValueChange={setPasswordValue} />
      </div>
      <div>
        <SubmitButton label='Log in' />
      </div>
    </form>
  );
};
