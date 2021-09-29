import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

interface isScroll {
  isScroll: boolean;
}

interface isOpen {
  isOpen: boolean;
}

const S = {
  Wrapper: styled('header')<isScroll>`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
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
    justify-content: space-between;
  `,
  Logo: styled('span')<isScroll>`
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0 1rem;
  `,
  Navigation: styled('ul')<isOpen>`
    display: flex;

    @media ${({ theme }) => theme.media.tablet} {
      background-color: #0d2538;
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 5rem;
      transition: all 0.3s ease-in-out;
      transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

      li {
        color: #fff;
        margin: 1.5rem;
      }
    } ;
  `,
  NavigationItem: styled('li')<isScroll>`
    margin: 0 1rem;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `,

  HamburgerMenu: styled('div')<isOpen>`
    display: none;
    z-index: 20;
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0 1rem;
    @media ${({ theme }) => theme.media.tablet} {
      color: ${({ isOpen }) => isOpen && 'white'};
      display: flex;
    } ;
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <S.Navigation isOpen={isOpen}>
          {NAVIGATION_ITEMS.map((item, index) => (
            <S.NavigationItem key={index} isScroll={isScroll}>
              {item}
            </S.NavigationItem>
          ))}
        </S.Navigation>
        <S.HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          TAP
        </S.HamburgerMenu>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
