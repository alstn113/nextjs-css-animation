import styled from '@emotion/styled';
import { cat2 } from '../../../public/cat';
import Image from 'next/image';
import { Button, TextField } from '@/components/Common';

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${({ theme }) => theme.media.mobile} {
      flex-flow: column-reverse;
    }
  `,
  TextWrapper: styled('div')`
    width: 50vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${({ theme }) => theme.media.mobile} {
      width: 90vw;
    }
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
};

function Contact() {
  return (
    <S.Wrapper>
      <Image src={cat2} width={512} height={512} />
      <S.TextWrapper>
        <S.Label>Contact Us</S.Label>
        <S.Title>Title</S.Title>
        <S.Description>Description</S.Description>
        <S.Form>
          <TextField type="text" placeholder="Name" />
          <TextField type="text" placeholder="Work Email" />
          <TextField type="text" placeholder="Company Name" />
          <Button type="submit">BECOME A PARTNER</Button>
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
}

export default Contact;
