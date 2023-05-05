import React, { Fragment } from 'react';

interface TextInputProps {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
}

export const TextInput = ({ name, label, value, onValueChange }: TextInputProps): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='text' value={value} onChange={(e) => onValueChange(e.target.value)} />
    </Fragment>
  );
};
