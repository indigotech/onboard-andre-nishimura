import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface PasswordInputProps {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  errors: string[];
}

export const PasswordInput = ({
  name,
  label,
  value,
  onValueChange,
  errors,
}: PasswordInputProps): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='password' value={value} onChange={(e) => onValueChange(e.target.value)} />
      <FormFieldErrorList errors={errors} />
    </Fragment>
  );
};
