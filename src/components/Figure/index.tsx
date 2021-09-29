import styled from '@emotion/styled';

const S = {
  Background: styled('section')`
    width: 100%;
    background-color: #fff9db;
  `,
  Wrapper: styled('div')`
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;
    padding: 1rem 0;
  `,
  List: styled('ul')`
    display: flex;
    @media ${({ theme }) => theme.media.tablet} {
      flex-direction: column;
    }
  `,
  ListItem: styled('li')`
    width: 100%;
    text-align: center;
    padding: 0 2rem;
    @media ${({ theme }) => theme.media.tablet} {
      padding: 1rem;
    }
  `,
  Title: styled('h3')`
    font-size: 1rem;
    color: #20c997;
    font-weight: 700;
    margin-bottom: 1rem;
  `,
  Description: styled('p')``,
};

function Figure() {
  const FIGURE_ITEMS: { title: string; description: string }[] = [
    {
      title: 'Title-1',
      description: 'Description-1',
    },
    {
      title: 'Title-2',
      description: 'Description-2',
    },
    {
      title: 'Title-3',
      description: 'Description-3',
    },
  ];

  return (
    <S.Background>
      <S.Wrapper>
        <S.List>
          {FIGURE_ITEMS.map((item, index) => (
            <S.ListItem key={index}>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>
            </S.ListItem>
          ))}
        </S.List>
      </S.Wrapper>
    </S.Background>
  );
}

export default Figure;
