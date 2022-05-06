import { FunctionComponent, InputHTMLAttributes } from 'react';

import Label from '@components/TextField/Label';
import outlinedStyle from '@components/TextField/outlinedStyle';
import Wrapper from '@components/TextField/Wrapper';

import styled from '@styles/styled-components';

// type Modify<T, R> = Omit<T, keyof R> & R;
//
// interface ModifiedType
//   extends Modify<
//     InputHTMLAttributes<HTMLInputElement>,
//     {
//       label?: string;
//       onChange?: (text: string) => void;
//       maxWidth?: string;
//       variant?: string;
//     }
//   > {}

interface PropsName {
  variant?: string;
}
const InputStyle = styled.input<PropsName>`
  ${props => props.variant === 'outlined' && outlinedStyle}
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxWidth?: string;
  variant?: string;
}

const TextField: FunctionComponent<Props> = ({
  label,
  maxWidth,
  variant,
  ...props
}) => (
  <Wrapper maxWidth={maxWidth}>
    <InputStyle {...props} variant={variant} />
    <Label htmlFor={props?.id}>{label}</Label>
  </Wrapper>
);

export default TextField;
