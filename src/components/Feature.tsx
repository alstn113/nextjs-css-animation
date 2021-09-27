import styled from '@emotion/styled';
import Image from 'next/image';
import cat1 from '../../public/cat/cat-4.jpg';

function Feature() {
  const FEAURE_ITEMS: string[] = [
    'blah blah blah blah blah blah blah blah 1',
    'blah blah blah blah blah blah blah blah 2',
    'blah blah blah blah blah blah blah blah 3',
  ];
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>Title</S.Title>
        <S.Description>Description</S.Description>
        <S.List>
          {FEAURE_ITEMS.map((item, index) => (
            <S.ListItem key={index}>
              <span>•</span> {item}
            </S.ListItem>
          ))}
        </S.List>
      </S.TextWrapper>
      <Image src={cat1} width={512} height={512} />
    </S.Wrapper>
  );
}

export default Feature;

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 100px 0px;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 512px;
  `,
  Label: styled('p')`
    margin-bottom: 1rem;
    color: red;
  `,
  Title: styled('h2')`
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Description: styled('p')`
    margin-bottom: 2rem;
  `,
  List: styled('ul')`
    margin-bottom: 2rem;
    width: fit-content;
  `,
  ListItem: styled('p')`
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid black;
  `,
};
