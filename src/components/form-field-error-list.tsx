import React, { Fragment } from 'react';

interface FormFieldErrorListProps {
  errors: string[];
}

export const FormFieldErrorList = ({ errors }: FormFieldErrorListProps): React.ReactElement => {
  return (
    <Fragment>
      {errors.length !== 0 && (
        <ul>
          {errors.map((errorMessage) => {
            return <li key={errorMessage}>{errorMessage}</li>;
          })}
        </ul>
      )}
    </Fragment>
  );
};
