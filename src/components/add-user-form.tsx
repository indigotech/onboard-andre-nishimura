import React, { FormEventHandler, Key, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { createUserMutation } from '../mutations/create-user-mutation';
import { userListQuery } from '../queries/user-list-query';
import { PasswordInput } from './password-input';
import { SubmitButton } from './submit-button/submit-button';
import { TextInput } from './text-input';
import {
  validateRequired,
  validatePassword,
  validateBirthDate,
  validatePhone,
  validateEmail,
} from '../functions/form-validations';
import { RadioInput } from './radio-input';
import { PhoneInput } from './phone-input';
import { DateInput } from './date-input';

enum UserRole {
  user = 'user',
  admin = 'admin',
}

export const AddUserForm = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [birthDateValue, setBirthDateValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [roleValue, setRoleValue] = useState(UserRole.user);

  const [formErrors, setFormErrors] = useState<Record<Key, string[]>>({
    name: [],
    email: [],
    phone: [],
    birthDate: [],
    password: [],
  });

  const [createUser, { loading, error }] = useMutation(createUserMutation);

  const navigate = useNavigate();

  const isFormValid = () => {
    const errors: Record<Key, string[]> = {
      name: validateRequired(nameValue),
      email: validateEmail(emailValue),
      phone: validatePhone(phoneValue),
      birthDate: validateBirthDate(birthDateValue),
      password: validatePassword(passwordValue),
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => error.length === 0);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      createUser({
        variables: {
          data: {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            birthDate: birthDateValue,
            password: passwordValue,
            role: roleValue,
          },
        },
        refetchQueries: [{ query: userListQuery }],
      })
        .then(() => {
          navigate('/user-list', { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name='name' label='Name' value={nameValue} onValueChange={setNameValue} errors={formErrors.name} />
      <TextInput
        name='email'
        label='E-mail'
        value={emailValue}
        onValueChange={setEmailValue}
        errors={formErrors.email}
      />
      <PhoneInput
        name='phone'
        label='Phone'
        value={phoneValue}
        onValueChange={setPhoneValue}
        errors={formErrors.phone}
      />
      <DateInput
        name='birthdate'
        label='Birth date'
        value={birthDateValue}
        onValueChange={setBirthDateValue}
        errors={formErrors.birthDate}
      />
      <PasswordInput
        name='password'
        label='Password'
        value={passwordValue}
        onValueChange={setPasswordValue}
        errors={formErrors.password}
      />
      <RadioInput
        name='role'
        label='User'
        onValueChange={() => setRoleValue(UserRole.user)}
        checked={roleValue === UserRole.user}
      />
      <RadioInput
        name='role'
        label='Admin'
        onValueChange={() => setRoleValue(UserRole.admin)}
        checked={roleValue === UserRole.admin}
      />
      <SubmitButton label='Log in' loading={loading} margin='16px 0px' display='block' />
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};
