import styled, { css } from '@styles/styled-components';
interface Props {
  status?: string;
}

export const Wrapper = styled.section<Props>`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 10%;
  color: white;
  background-color: #1A8ED1;
  
  &  h1,
  & p {
    margin: 0;
    font-size: 1rem;
  }
  ${props =>
    props.status === 'success' &&
    css`
      & {
        background-color: #1ad1b9;
      }
    `};
  
    ${props =>
      props.status === 'error' &&
      css`
        & {
          background-color: #690000;
        }
      `};
  }
`;
