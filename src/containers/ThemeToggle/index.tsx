import { FunctionComponent } from 'react';
import {  useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import SunAndMoon from '@src/components/SunAndMoon';
import { themeHandler } from '@src/Redux/UI/uiActions';

const ThemeToggle: FunctionComponent = () => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <SunAndMoon onClick={() => dispatch(themeHandler())} />
  );
};

export default ThemeToggle;
