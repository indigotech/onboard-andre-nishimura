import React, { Fragment } from 'react';

interface PasswordInputProps {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
}

export const PasswordInput = ({ name, label, value, onValueChange }: PasswordInputProps): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='password' value={value} onChange={(e) => onValueChange(e.target.value)} />
    </Fragment>
  );
};
