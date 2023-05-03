import React, { Fragment } from 'react';

interface ITextInput {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
}

const TextInput = ({ name, label, value, onValueChange }: ITextInput): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='text' value={value} onChange={(e) => onValueChange(e.target.value)} />
    </Fragment>
  );
};

export default TextInput;
