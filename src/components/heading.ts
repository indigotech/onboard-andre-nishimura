import { styled } from '../theme';

interface HeadingProps {
  color?: string;
  weight?: string;
  margin?: string;
  size?: string;
}

export const H1 = styled.h1<HeadingProps>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-weight: ${(props) => (props.weight ? props.weight : props.theme.fontWeights.bold)};
  font-size: ${(props) => (props.size ? props.size : props.theme.fontSizes.large)};
  margin: ${(props) => (props.margin ? props.margin : '20px 0px')};
`;
