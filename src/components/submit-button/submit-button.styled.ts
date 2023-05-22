import { css } from 'styled-components';
import { styled } from '../../theme';

export interface SubmitInputStyledProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  margin?: string;
  display?: string;
}

export const SubmitInputStyled = styled.input<SubmitInputStyledProps>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.colors.blue)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : props.theme.fontSizes.medium)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.fontWeights.semibold)};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  height: ${(props) => (props.height ? props.height : props.theme.button.minHeight)};
  border-radius: ${(props) => props.theme.button.defaultBorderRadius};
  margin: ${(props) => props.margin};
  display: ${(props) => (props.display ? props.display : 'inline')};

  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.disabled &&
    css`
      color: ${props.theme.colors.gray};
      background-color: ${props.theme.colors.lightGray};

      :hover {
        cursor: not-allowed;
      }
    `}
`;
