import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import styled from '@emotion/styled';

function Test() {
  return (
    <S.Wrapper>
      <S.Test {...useScrollFadeIn('up')} />
      <S.Test {...useScrollFadeIn('down')} />
      <S.Test {...useScrollFadeIn('left')} />
      <S.Test {...useScrollFadeIn('right')} />
      <S.Test {...useScrollFadeIn('up')} />
      <S.Test {...useScrollFadeIn('down')} />
      <S.Test {...useScrollFadeIn('left')} />
      <S.Test {...useScrollFadeIn('right')} />
    </S.Wrapper>
  );
}

export default Test;

const S = {
  Wrapper: styled('div')`
    margin: 0 auto;
  `,
  Test: styled('div')`
    height: 200px;
    width: 200px;
    margin: 100px;
    background-color: yellow;
  `,
};
