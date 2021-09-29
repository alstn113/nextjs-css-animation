import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const S = {
  Wrapper: styled('header')`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    color: black;
    background-color: white;
  `,
  Header: styled('div')`
    max-width: 800px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled('span')`
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0 1rem;
  `,
  Hamburger: styled('div')<{ open: boolean }>`
    display: none;
    z-index: 20;
    margin: 0 1rem;
    color: ${({ open }) => (open ? 'white' : 'black')};
    @media ${({ theme }) => theme.media.tablet} {
      display: flex;
    } ;
  `,
  Navigation: styled('ul')<{ open: boolean }>`
    display: flex;
    justify-content: center;
    @media ${({ theme }) => theme.media.tablet} {
      flex-flow: column nowrap;
      background-color: #0d2538;
      position: fixed;

      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: all 0.3s ease-in-out;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

      li {
        color: #fff;
      }
    } ;
  `,
  NavigationItem: styled('li')`
    margin: 0 1rem;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>LOGO</S.Logo>
        <S.Hamburger open={open} onClick={() => setOpen(!open)}>
          햄버거 버튼
        </S.Hamburger>
        <S.Navigation open={open}>
          {NAVIGATION_ITEMS.map((item, index) => (
            <S.NavigationItem key={index}>{item}</S.NavigationItem>
          ))}
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
