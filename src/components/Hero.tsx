import styled from '@emotion/styled';
import Image from 'next/image';
import background from '../../public/background.jpg';

export const S = {
  Wrapper: styled('section')`
    width: 100%;
    height: 780px;
    position: relative;
    top: 0;
  `,
  Background: styled(Image)`
    z-index: -1;
  `,

  TextWrapper: styled('div')`
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled('h1')`
    font-size: 10rem;
    text-shadow: 6px 2px 2px gray;
    color: white;
    margin-bottom: 2rem;
  `,
  Description: styled('p')`
    font-size: 5rem;
    text-shadow: 6px 2px 2px gray;
    color: white;
  `,
};

function Hero() {
  return (
    <S.Wrapper>
      <S.Background src={background} layout="fill" />
      <S.TextWrapper>
        <S.Title>TITLE</S.Title>
        <S.Description>DESCRIPTION</S.Description>
      </S.TextWrapper>
    </S.Wrapper>
  );
}

export default Hero;
