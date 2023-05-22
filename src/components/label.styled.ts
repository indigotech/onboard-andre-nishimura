import { styled } from '../theme';

interface LabelProps {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
  display?: string;
  haveError?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: ${(props) => (props.size ? props.size : props.theme.fontSizes.medium)};
  font-weight: ${(props) => (props.weight ? props.weight : props.theme.fontWeights.regular)};
  color: ${(props) => (props.haveError ? props.theme.colors.red : props.color ? props.color : props.theme.colors.gray)};
  margin: ${(props) => (props.margin ? props.margin : '20px 0px 8px 0px')};
  display: ${(props) => (props.display ? props.display : 'block')};
`;
