import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface RadioInputProps {
  name: string;
  label: string;
  onValueChange: () => void;
  checked?: boolean;
  errors?: string[];
}

export const RadioInput = ({ name, label, onValueChange, checked, errors }: RadioInputProps): React.ReactElement => {
  return (
    <Fragment>
      <input name={name} type='radio' onChange={onValueChange} checked={checked} />
      <label>{label}</label>
      {errors && <FormFieldErrorList errors={errors} />}
    </Fragment>
  );
};
