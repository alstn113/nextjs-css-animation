import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

const S = {
  Wrapper: styled('header')<{ isScroll: boolean }>`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    color: white;
    background-color: none;
    box-shadow: none;
    ${({ isScroll }) =>
      isScroll &&
      css`
        color: black;
        background-color: white;
        box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.5);
      `};
  `,
  Header: styled('div')<{ isScroll: boolean }>`
    max-width: 800px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .links {
      margin-left: auto;
      a + a {
        margin-left: 20px;
      }
    }
  `,
};

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        WEB NAME
        <div className="links">
          <a>SOMETHING 1</a>
          <a>SOMETHING 2</a>
          <a>SOMETHING 3</a>
        </div>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
