import styled from '@emotion/styled';
import { cat1, cat2, cat3 } from '../../../public/cat';
import Image from 'next/image';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import { Button } from '@/components/Common';

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
    margin-bottom: 1rem;
    ${({ theme }) => theme.typography.label}
  `,
  Title: styled('h2')`
    ${({ theme }) => theme.typography.title};
    margin-bottom: 1rem;
  `,
  Description: styled('p')`
    margin-bottom: 2rem;
  `,
  CardWrapper: styled('ul')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
    @media ${({ theme }) => theme.media.tablet} {
      flex-direction: column;
      align-items: center;
    }
  `,
  Card: styled('li')`
    width: 30%;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    @media ${({ theme }) => theme.media.tablet} {
      width: 70%;
      margin: 1rem;
    }
  `,
  Image: styled(Image)`
    border-radius: 1rem 1rem 0 0;
  `,
  TextWrapper: styled('div')`
    padding: 2rem;
  `,
  CardTitle: styled('h3')`
    margin-bottom: 1rem;
  `,
  CardLabel: styled('p')`
    margin-bottom: 1rem;
  `,
  CardDesciption: styled('p')`
    margin-bottom: 1rem;
  `,
};

function Works() {
  const WORKS_ITEMS = [
    {
      image: cat1,
      title: 'Title-1',
      label: 'Date-1',
      description: 'Description-1',
    },
    {
      image: cat2,
      title: 'Title-2',
      label: 'Date-2',
      description: 'Description-2',
    },
    {
      image: cat3,
      title: 'Title-3',
      label: 'Date-3',
      description: 'Description-3',
    },
  ];

  return (
    <S.Wrapper>
      <S.Label>Our Recent Works</S.Label>
      <S.Title>Title</S.Title>
      <S.Description>Description</S.Description>
      <S.CardWrapper>
        {WORKS_ITEMS.map((item, index) => (
          <S.Card key={index} {...useScrollFadeIn('up', 1, index * 0.1)}>
            <S.Image src={item.image} width={300} height={300} layout="responsive" />
            <S.TextWrapper>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardLabel>{item.label}</S.CardLabel>
              <S.CardDesciption>{item.description}</S.CardDesciption>
            </S.TextWrapper>
          </S.Card>
        ))}
      </S.CardWrapper>
      <Button outline>MORE WORKS</Button>
    </S.Wrapper>
  );
}

export default Works;
