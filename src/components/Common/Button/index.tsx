import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
  outline?: boolean;
  type?: 'submit' | 'button';
}

const S = {
  Button: styled('button')<{ outline?: boolean }>`
    padding: 1rem 2rem;
    border: 0;
    outline: none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
    color: white;
    background-color: rgb(244, 93, 72);
    width: fit-content;
    ${({ outline }) =>
      outline &&
      css`
        background-color: transparent;
        color: rgb(244, 93, 72);
        border: 1px solid red;
      `};
  `,
};

function Button(props: Props) {
  return <S.Button {...props}></S.Button>;
}

export default Button;
