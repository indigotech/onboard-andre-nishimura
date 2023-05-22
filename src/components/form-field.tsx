import React, { Fragment } from 'react';
import { TextInput } from './text-input.styled';
import { Label } from './label.styled';
import { FormFieldErrorList } from './form-field-error/form-field-error-list';

export interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onValueChange?: (value: string) => void;
  errors?: string[];
  children?: React.ReactNode;
}

export const FormField = ({
  label,
  type,
  name,
  value,
  onValueChange,
  errors,
  children,
}: FormFieldProps): React.ReactElement => {
  const haveError = errors && errors.length !== 0;

  return (
    <Fragment>
      <Label haveError={haveError}>{label}</Label>
      {type === 'radio' ? (
        children
      ) : (
        <TextInput
          type={type}
          name={name}
          value={value}
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          haveError={haveError}
        />
      )}
      {haveError && <FormFieldErrorList errors={errors} />}
    </Fragment>
  );
};
