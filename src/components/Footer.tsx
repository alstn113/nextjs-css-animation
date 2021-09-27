import styled from '@emotion/styled';

function Footer() {
  return (
    <S.Wrapper>
      <S.Info>
        <S.Logo>something</S.Logo>
        <S.Text>
          <span>something-1</span>
          <span>something-2</span>
          <span>something-3</span>
        </S.Text>
      </S.Info>
      <S.Menu>
        <S.MenuTitle>title-1</S.MenuTitle>
        <S.MenuItem>item-1</S.MenuItem>
        <S.MenuItem>item-2</S.MenuItem>
        <S.MenuItem>item-3</S.MenuItem>
      </S.Menu>
      <S.Menu>
        <S.MenuTitle>title-2</S.MenuTitle>
        <S.MenuItem>item-1</S.MenuItem>
        <S.MenuItem>item-2</S.MenuItem>
        <S.MenuItem>item-3</S.MenuItem>
      </S.Menu>
      <S.Menu>
        <S.MenuTitle>title-3</S.MenuTitle>
        <S.MenuItem>item-1</S.MenuItem>
        <S.MenuItem>item-2</S.MenuItem>
        <S.MenuItem>item-3</S.MenuItem>
      </S.Menu>
      <S.Bottom>
        <span>someone © 2021</span>
      </S.Bottom>
    </S.Wrapper>
  );
}

export default Footer;

const S = {
  Wrapper: styled('footer')`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 100px 0 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Info: styled('div')``,
  Logo: styled('span')`
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  Text: styled('p')`
    span {
      display: block;
      margin-bottom: 1.5rem;
    }
  `,
  Menu: styled('ul')`
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled('h4')`
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled('a')`
    margin-bottom: 1.5rem;
  `,
  Bottom: styled('div')`
    width: 100%;

    display: flex;
    justify-content: center;
    border-top: 1px solid lightgray;
    padding-top: 30px;
    margin-top: 120px;
    span {
      color: gray;
    }
  `,
};
