import React from 'react';

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

export const SubmitButton = ({ label, disabled }: SubmitButtonProps): React.ReactElement => {
  return <input type='submit' value={label} disabled={disabled} />;
};
