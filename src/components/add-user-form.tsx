import React, { FormEventHandler, useState } from 'react';
import { FetchResult, useMutation } from '@apollo/client';
import { loginMutation, LoginData } from '../mutations/login-mutation';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';
import {
  validateEmail,
  validatePassword,
  validateBirthDate,
  validatePhone,
  required,
} from '../functions/form-validations';
import { RadioInput } from './radio-input';
import { PhoneInput } from './phone-input';
import { DateInput } from './date-input';

enum UserRole {
  user = 'user',
  admin = 'admin',
}

export const AddUserForm = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [birthDateValue, setBirthDateValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [roleValue, setRoleValue] = useState<string>(UserRole.user);

  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [emaiLErrors, setEmailErrors] = useState<string[]>([]);
  const [phoneErrors, setPhoneErrors] = useState<string[]>([]);
  const [birthDateErrors, setBirthDateErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  // const [createUser, { loading, error }] = useMutation();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const isNameValid = required(nameValue, setNameErrors);
    const isEmailValid = validateEmail(emailValue, setEmailErrors);
    const isPasswordValid = validatePassword(passwordValue, setPasswordErrors);
    const isPhoneValid = validatePhone(phoneValue, setPhoneErrors);
    const isBirthDateValid = validateBirthDate(birthDateValue, setBirthDateErrors);

    if (isNameValid && isEmailValid && isPasswordValid && isPhoneValid && isBirthDateValid) {
      console.log(`User created \n
        ${nameValue}\n
        ${emailValue}\n
        ${phoneValue}\n
        ${birthDateValue}\n
        ${passwordValue}\n
        ${roleValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name='name' label='Name' value={nameValue} onValueChange={setNameValue} errors={nameErrors} />
      <TextInput name='email' label='E-mail' value={emailValue} onValueChange={setEmailValue} errors={emaiLErrors} />
      <PhoneInput name='phone' label='Phone' value={phoneValue} onValueChange={setPhoneValue} errors={phoneErrors} />
      <DateInput
        name='birthdate'
        label='Birth date'
        value={birthDateValue}
        onValueChange={setBirthDateValue}
        errors={birthDateErrors}
      />
      <PasswordInput
        name='password'
        label='Password'
        value={passwordValue}
        onValueChange={setPasswordValue}
        errors={passwordErrors}
      />
      <RadioInput
        name='role'
        label='User'
        value={UserRole.user}
        onValueChange={setRoleValue}
        checked={roleValue === UserRole.user}
      />
      <RadioInput
        name='role'
        label='Admin'
        value={UserRole.admin}
        onValueChange={setRoleValue}
        checked={roleValue === UserRole.admin}
      />
      <SubmitButton label='Add user' />
      {/* <div>{loading ? <SubmitButton label='Loading...' disabled /> : <SubmitButton label='Add user' />}</div>
      {error && <p>Error: {error.message}</p>} */}
    </form>
  );
};
