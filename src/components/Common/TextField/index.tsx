import styled from '@emotion/styled';
import React from 'react';

interface Props {
  type?: string;
  placeholder?: string;
}

const S = {
  TextField: styled('input')`
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid gray;

    :focus {
      outline: none;
      border-color: black;
    }
    ::placeholder {
      color: gray;
    }
  `,
};

function TextField({ type, placeholder }: Props) {
  return <S.TextField {...{ type, placeholder }} />;
}

export default TextField;
