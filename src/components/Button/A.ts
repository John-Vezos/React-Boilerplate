import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import styled from '@styles/styled-components';

import buttonStyles from './buttonStyles';

export interface Props {
  css?: FlattenSimpleInterpolation;
}

const A = styled.a<Props>`
  ${buttonStyles};
  ${props => props.css};
`;

export default A;
