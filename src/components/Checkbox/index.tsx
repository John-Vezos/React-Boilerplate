import { FunctionComponent, InputHTMLAttributes } from 'react';

import Input from './Input';
import Label from './Label';
import Span from './Span';
import Wrapper from './Wrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: FunctionComponent<InputProps> = ({ label, ...props }) => {
  return (
    <Wrapper>
      <Input {...props} />
      <Label htmlFor={props?.id}>
        <span>
          <Span>{label}</Span>
        </span>
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
