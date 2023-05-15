import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface RadioInputProps {
  name: string;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  checked?: boolean;
  errors?: string[];
}

export const RadioInput = ({
  name,
  label,
  value,
  onValueChange,
  checked,
  errors,
}: RadioInputProps): React.ReactElement => {
  return (
    <Fragment>
      <input name={name} type='radio' value={value} onChange={(e) => onValueChange(e.target.value)} checked={checked} />
      {label}
      {errors && <FormFieldErrorList errors={errors} />}
    </Fragment>
  );
};
