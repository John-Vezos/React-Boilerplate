/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import A from './A';
import StyledButton from './StyledButton';

export interface Props {
  href?: string;
  children?: ReactNode;
  css?: FlattenSimpleInterpolation;

  handleRoute?(): void;

  onClick?(): void;
}

const Button = ({ handleRoute, href, onClick, css, children }: Props) => {
  // Render an anchor tag
  let button = (
    <A href={href} onClick={onClick} css={css}>
      {Children.toArray(children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (handleRoute) {
    button = (
      <StyledButton onClick={handleRoute}>
        {Children.toArray(children)}
      </StyledButton>
    );
  }

  return button;
};

export default Button;
