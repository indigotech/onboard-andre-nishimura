import { styled } from '../../theme';

interface RadioInputStyledProps {
  display?: string;
}

export const RadioInputStyled = styled.div<RadioInputStyledProps>`
  display: ${(props) => (props.display ? props.display : 'block')};
`;
