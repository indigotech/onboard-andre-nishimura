import React, { FormEventHandler, useState } from 'react';
import PasswordInput from './password-input';
import SubmitButton from './submit-button';
import TextInput from './text-input';

interface ILoginFormValues {
  email?: string;
  password?: string;
}

const LoginForm = (): React.ReactElement => {
  const [formValues, setFormValues] = useState<ILoginFormValues>({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const email = formValues?.email;
    const password = formValues?.password;

    if (email && password) {
      console.log(`Logged in with email ${email} and password ${password}`);
    }
  };

  const handleEmailChange = (emailValue: string) => {
    setFormValues({
      ...formValues,
      email: emailValue,
    });
  };

  const handlePasswordChange = (passwordValue: string) => {
    setFormValues({
      ...formValues,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          name='email'
          label='E-mail'
          value={formValues?.email}
          onValueChange={(value) => handleEmailChange(value)}
        />
        <PasswordInput
          name='password'
          label='Password'
          value={formValues?.password}
          onValueChange={(value) => handlePasswordChange(value)}
        />
      </div>
      <div>
        <SubmitButton label='Log in' />
      </div>
    </form>
  );
};

export default LoginForm;
