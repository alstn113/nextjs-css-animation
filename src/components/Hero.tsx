import styled from '@emotion/styled';
import Image from 'next/image';
import background from '../../public/background.jpg';

function Hero() {
  return (
    <S.Background>
      <Image src={background} layout="fill" />
      <S.Wrapper>
        <S.Title>TITLE</S.Title>
        <S.Description>DESCRIPTION</S.Description>
      </S.Wrapper>
    </S.Background>
  );
}

export default Hero;

export const S = {
  Background: styled('section')`
    width: 100%;
    height: 780px;
    position: relative;
    top: 0;
  `,
  Wrapper: styled('div')`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  `,

  Title: styled('h1')`
    color: white;
  `,
  Description: styled('p')`
    color: white;
  `,
};
