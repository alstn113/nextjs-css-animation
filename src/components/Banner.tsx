import styled from '@emotion/styled';

function Banner() {
  return (
    <S.Wrapper>
      <S.Label>Get Started</S.Label>
      <S.Title>Title</S.Title>
    </S.Wrapper>
  );
}

export default Banner;

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(248, 245, 242);
  `,
  Label: styled('p')`
    font-size: 1rem;
    color: red;
    margin-bottom: 1rem;
  `,
  Title: styled('h2')`
    font-size: 3rem;
  `,
};
