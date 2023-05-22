import { styled } from '../theme';

interface TextInputProps {
  haveError?: boolean;
}

export const TextInput = styled.input<TextInputProps>`
  border-style: ${(props) => props.theme.input.defaultBorderStyle};
  border-width: ${(props) => props.theme.input.defaultBorderWidth};
  border-color: ${(props) => (props.haveError ? props.theme.colors.red : props.theme.colors.gray)};
`;
