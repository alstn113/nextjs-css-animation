import styled from '@emotion/styled';

function Works() {
  return <S.Wrapper>Works</S.Wrapper>;
}

export default Works;

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 100px 0px;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
  `,
};
