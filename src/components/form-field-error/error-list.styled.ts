import { styled } from '../../theme';

interface ErrorListProps {
  margin?: string;
  padding?: string;
}

export const ErrorList = styled.ul<ErrorListProps>`
  margin: ${(props) => (props.margin ? props.margin : '8px 0px 0px 0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px 0px 0px 20px')};
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
