import { css } from '@styles/styled-components';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryBackground};
`;

export default buttonStyles;
