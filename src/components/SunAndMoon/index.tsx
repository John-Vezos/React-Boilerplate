import SvgSunAndMoon from '@src/assets/icons/SunAndMoon&Moon';

import { ThemeToggleStyle } from './ThemeToggleStyle';

interface Props {
  onClick: (dispatchValue: { type: string }) => void;
}

const Toggle = (props: Props) => {
  return (
    <ThemeToggleStyle {...props}>
      <SvgSunAndMoon />
    </ThemeToggleStyle>
  );
};

export default Toggle;
