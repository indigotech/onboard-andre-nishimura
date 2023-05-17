import React, { Fragment } from 'react';
import { FormFieldErrorList } from './form-field-error-list';

interface PhoneInputProps {
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  errors?: string[];
}

export const PhoneInput = ({ name, label, value, onValueChange, errors }: PhoneInputProps): React.ReactElement => {
  const handleInputChange = (phoneDigits: string) => {
    const rawValue = formatPhoneToRawValue(phoneDigits);
    rawValue.length < 11 ? onValueChange(rawValue) : onValueChange(rawValue.substring(0, 11));
  };

  return (
    <Fragment>
      <div>{label}</div>
      <input
        name={name}
        type='text'
        value={formatRawValueToPhone(value)}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {errors && <FormFieldErrorList errors={errors} />}
    </Fragment>
  );
};

const formatRawValueToPhone = (value: string): string => {
  const numberSize = value.length;
  if (numberSize > 4 && numberSize <= 9) {
    return `${value.substring(0, numberSize - 4)} - ${value.substring(numberSize - 4)}`;
  }
  if (numberSize === 10) {
    return `(${value.substring(0, 2)}) ${value.substring(2, 6)} - ${value.substring(6)}`;
  }
  if (numberSize >= 11) {
    const ddd = value.substring(numberSize - 11, numberSize - 9);
    const firstHalf = value.substring(numberSize - 9, numberSize - 4);
    const secondHalf = value.substring(numberSize - 4);
    return `(${ddd}) ${firstHalf} - ${secondHalf}`;
  }
  return value;
};

const formatPhoneToRawValue = (phoneDigits: string): string => {
  return phoneDigits.replace(/[^0-9]+/g, '');
};
