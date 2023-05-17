import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface DateInputProps {
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  errors?: string[];
}

export const DateInput = ({ name, label, value, onValueChange, errors }: DateInputProps): React.ReactElement => {
  return (
    <Fragment>
      <div>{label}</div>
      <input name={name} type='date' value={value} onChange={(e) => onValueChange(e.target.value)} />
      {errors && <FormFieldErrorList errors={errors} />}
    </Fragment>
  );
};
