import styled from '@emotion/styled';

const S = {
  Wrapper: styled('div')`
    width: 100px;
    height: 100px;
    background-color: black;
    @media ${({ theme }) => theme.media.custom(1500)} {
      background-color: red;
    }
    @media ${({ theme }) => theme.media.labtop_L} {
      background-color: yellow;
    }
    @media ${({ theme }) => theme.media.labtop_S} {
      background-color: blue;
    }
    @media ${({ theme }) => theme.media.tablet} {
      background-color: purple;
    }
  `,
};

function test() {
  return (
    <div>
      <S.Wrapper />
    </div>
  );
}

export default test;
