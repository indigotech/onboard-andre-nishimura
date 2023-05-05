import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface TextInputProps {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  errors: string[];
}

export const TextInput = ({ name, label, value, onValueChange, errors }: TextInputProps): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='text' value={value} onChange={(e) => onValueChange(e.target.value)} />
      <FormFieldErrorList errors={errors} />
    </Fragment>
  );
};
