import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);
  return (
    <div>
      <S.Header isScroll={isScroll} />
      <S.Test {...useScrollFadeIn('up')} />
      <S.Test {...useScrollFadeIn('down')} />
      <S.Test {...useScrollFadeIn('left')} />
      <S.Test {...useScrollFadeIn('right')} />
      <S.Test {...useScrollFadeIn('up')} />
      <S.Test {...useScrollFadeIn('down')} />
      <S.Test {...useScrollFadeIn('left')} />
      <S.Test {...useScrollFadeIn('right')} />
    </div>
  );
}

interface HeaderProps {
  readonly isScroll: boolean;
}

const S = {
  Header: styled('div')<HeaderProps>`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 136px;
    z-index: 1000;
    background-color: ${(props) => (props.isScroll ? 'black' : 'none')};
    transition: all 0.2s ease-in-out;
  `,
  Test: styled('div')`
    height: 200px;
    width: 200px;
    margin: 100px;
    background-color: yellow;
  `,
};

export default Header;
