import React from 'react';
import { SubmitInputStyled, SubmitInputStyledProps } from './submit-button.styled';

interface SubmitButtonProps extends SubmitInputStyledProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
}

export const SubmitButton = ({
  label,
  disabled,
  loading,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  margin,
  display,
}: SubmitButtonProps): React.ReactElement => {
  return (
    <SubmitInputStyled
      type='submit'
      value={loading ? 'Loading...' : label}
      disabled={disabled || loading}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      backgroundColor={backgroundColor}
      margin={margin}
      display={display}
    />
  );
};
