import styled from '@emotion/styled';
import { cat2 } from '../../../public/cat';
import Image from 'next/image';
import { Button } from '@/components/Common';

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
    width: 512px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Label: styled('p')`
    ${({ theme }) => theme.typography.label};
    margin-bottom: 1rem;
  `,
  Title: styled('h2')`
    ${({ theme }) => theme.typography.title};
    margin-bottom: 1rem;
  `,
  Description: styled('p')`
    margin-bottom: 1rem;
  `,
  Form: styled('form')`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
  TextField: styled('input')`
    border-radius: 0.5rem;
    padding: 1rem;
    border: 2px solid gray;

    :focus {
      outline: none;
      border-color: #1c19bb;
    }
  `,
};

function Contact() {
  return (
    <S.Wrapper>
      <Image src={cat2} width={512} height={512} />
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>Title</S.Title>
        <S.Description>Description</S.Description>
        <S.Form>
          <S.TextField type="text" placeholder="Name" />
          <S.TextField type="text" placeholder="Work Email" />
          <S.TextField type="text" placeholder="Company Name" />
          <Button type="submit">BECOME A PARTNER</Button>
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
}

export default Contact;
