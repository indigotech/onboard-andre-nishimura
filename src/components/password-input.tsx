import React, { Fragment } from 'react';

interface IPasswordInput {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
}

const PasswordInput = ({ name, label, value, onValueChange }: IPasswordInput): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='password' value={value} onChange={(e) => onValueChange(e.target.value)} />
    </Fragment>
  );
};

export default PasswordInput;
