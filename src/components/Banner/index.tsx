import styled from '@emotion/styled';
import { Button } from '@/components/Common';

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
    ${({ theme }) => theme.typography.label};
    margin-bottom: 1rem;
  `,
  Title: styled('h2')`
    ${({ theme }) => theme.typography.title};
    margin-bottom: 2rem;
  `,
};

function Banner() {
  return (
    <S.Wrapper>
      <S.Label>Get Started</S.Label>
      <S.Title>Title</S.Title>
      <Button>GET QUOTE</Button>
    </S.Wrapper>
  );
}

export default Banner;
