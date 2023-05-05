import React from 'react';

interface SubmitButtonProps {
  label: string;
}

export const SubmitButton = ({ label }: SubmitButtonProps): React.ReactElement => {
  return <input type='submit' value={label} />;
};
