import React from 'react';
import { ErrorList } from './error-list.styled';

interface FormFieldErrorListProps {
  errors: string[];
}

export const FormFieldErrorList = ({ errors }: FormFieldErrorListProps): React.ReactElement => {
  return (
    <ErrorList>
      {errors.map((errorMessage) => {
        return <li key={errorMessage}>{errorMessage}</li>;
      })}
    </ErrorList>
  );
};
