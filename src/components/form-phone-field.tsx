import React from 'react';
import { FormField } from './form-field';

interface FormPhoneFieldProps {
  label: string;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  errors?: string[];
}

export const FormPhoneField = ({
  label,
  name,
  value,
  onValueChange,
  errors,
}: FormPhoneFieldProps): React.ReactElement => {
  const handleInputChange = (phoneDigits: string) => {
    const rawValue = formatPhoneToRawValue(phoneDigits);
    rawValue.length < 11 ? onValueChange(rawValue) : onValueChange(rawValue.substring(0, 11));
  };

  return (
    <FormField
      label={label}
      type='text'
      name={name}
      value={formatRawValueToPhone(value)}
      onValueChange={handleInputChange}
      errors={errors}
    />
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
