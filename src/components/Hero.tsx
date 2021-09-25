import styled from '@emotion/styled';
import Image from 'next/image';
import cat1 from '../../public/cat/cat-1.jpg';

function Hero() {
  return <S.BackGround src={cat1} layout="fill" />;
}

export default Hero;

export const S = {
  BackGround: styled(Image)`
    position: absolute;
    top: 0;
  `,
};
