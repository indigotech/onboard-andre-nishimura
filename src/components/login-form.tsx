import React, { FormEventHandler, useState } from 'react';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';

export const LoginForm = (): React.ReactElement => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emaiLErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailErrors(['The e-mail field is required']);
      return false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i;
    const isFormatValid = emailRegex.test(email);

    if (isFormatValid) {
      setEmailErrors([]);
      return true;
    } else {
      setEmailErrors(['The value has an invalid e-mail format']);
      return false;
    }
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordErrors(['The password is required']);
      return false;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z]).{0,}$/;
    const isFormatValid = passwordRegex.test(password);

    const errors: string[] = [];
    if (password.length < 7) errors.push('The password must have a minimun of 7 characters');
    if (!isFormatValid) errors.push('The password must have at least one letter and one digit');

    setPasswordErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(emailValue);
    const isPasswordValid = validatePassword(passwordValue);

    if (isEmailValid && isPasswordValid) {
      console.log(`Logged in with email ${emailValue} and password ${passwordValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput name='email' label='E-mail' value={emailValue} onValueChange={setEmailValue} errors={emaiLErrors} />
        <PasswordInput
          name='password'
          label='Password'
          value={passwordValue}
          onValueChange={setPasswordValue}
          errors={passwordErrors}
        />
      </div>
      <div>
        <SubmitButton label='Log in' />
      </div>
    </form>
  );
};
