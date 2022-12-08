import { FlattenSimpleInterpolation } from 'styled-components';

import styled from '@styles/styled-components';

import buttonStyles from './buttonStyles';

export interface Props {
  css?: FlattenSimpleInterpolation;
}

const StyledButton = styled.button<Props>`
  ${buttonStyles};
  ${props => props.css};
`;

export default StyledButton;
