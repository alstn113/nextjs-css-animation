import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import styled from '@emotion/styled';

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 100px 0px;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled('p')`
    margin-bottom: 2rem;
    ${({ theme }) => theme.typography.label}
  `,
  Title: styled('h2')`
    margin-bottom: 2rem;
    ${({ theme }) => theme.typography.title};
  `,
  CardWrapper: styled('ul')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${({ theme }) => theme.media.tablet} {
      flex-direction: column;
      align-items: center;
    }
  `,
  Card: styled('li')`
    background-color: orange;
    color: white;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 3rem 2rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    @media ${({ theme }) => theme.media.tablet} {
      width: 70%;
      margin: 1rem;
    }
  `,
  CardTitle: styled('h3')`
    margin-bottom: 2rem;
    font-size: 2rem;
  `,
  CardDescription: styled('p')``,
};

const SERVICES_ITEMS: { title: string; description: string }[] = [
  { title: 'title-1', description: 'description-1' },
  { title: 'title-2', description: 'description-2' },
  { title: 'title-3', description: 'description-3' },
];

function Services() {
  return (
    <S.Wrapper>
      <S.Label>Services</S.Label>
      <S.Title>Title</S.Title>
      <S.CardWrapper>
        {SERVICES_ITEMS.map((item, index) => (
          <S.Card key={index} {...useScrollFadeIn('up', 1, index * 0.1)}>
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.CardDescription>{item.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.CardWrapper>
    </S.Wrapper>
  );
}

export default Services;
