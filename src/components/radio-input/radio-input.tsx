import React from 'react';
import { Label } from '../label.styled';
import { RadioInputStyled } from './radio-input.styled';

interface RadioInputProps {
  name: string;
  label: string;
  onValueChange: () => void;
  checked?: boolean;
  display?: string;
}

export const RadioInput = ({ name, label, onValueChange, checked, display }: RadioInputProps): React.ReactElement => {
  return (
    <RadioInputStyled display={display}>
      <input name={name} type='radio' onChange={onValueChange} checked={checked} />
      <Label display='inline'>{label}</Label>
    </RadioInputStyled>
  );
};
