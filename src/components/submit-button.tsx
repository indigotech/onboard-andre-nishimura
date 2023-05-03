import React from 'react';

interface IInput {
  label: string;
}

const SubmitButton = ({ label }: IInput): React.ReactElement => {
  return <input type='submit' value={label} />;
};

export default SubmitButton;
