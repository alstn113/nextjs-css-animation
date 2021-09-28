import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/Common';

interface isScroll {
  isScroll: boolean;
}

const S = {
  Wrapper: styled('header')<isScroll>`
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
  Header: styled('div')<isScroll>`
    max-width: 800px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `,
  Logo: styled('span')<isScroll>`
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;
  `,
  Navigation: styled('div')`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  NavigationItem: styled('a')<isScroll>`
    margin: 0 1rem;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `,
  ButtonWrapper: styled('div')`
    display: flex;
    max-width: 25%;
    flex: 0 0 25%;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

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
        <S.Logo isScroll={isScroll}>LOGO</S.Logo>
        <S.Navigation>
          {NAVIGATION_ITEMS.map((item, index) => (
            <S.NavigationItem key={index} isScroll={isScroll}>
              {item}
            </S.NavigationItem>
          ))}
        </S.Navigation>
        <S.ButtonWrapper>
          <Button>GET QUOTE</Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
