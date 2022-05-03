import { FormEvent, FunctionComponent } from 'react';

import Label from '@components/TextField/Label';
import outlinedStyle from '@components/TextField/outlinedStyle';
import Wrapper from '@components/TextField/Wrapper';

import styled from '@styles/styled-components';

interface PropsName {
  variant?: string;
}
const InputStyle = styled.input<PropsName>`
  ${props => props.variant === 'outlined' && outlinedStyle}
`;

interface Props {
  id?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  required?: boolean;
  placeholder?: string;
  maxWidth?: string;
  variant?: string;
}
const TextField: FunctionComponent<Props> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  maxWidth,
  variant,
}) => (
  <Wrapper maxWidth={maxWidth}>
    <InputStyle
      id={id}
      type={type}
      name={'test'}
      value={value}
      onChange={event => onChange && onChange(event.target.value)}
      placeholder={placeholder}
      required={required}
      variant={variant}
    />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
);

export default TextField;
