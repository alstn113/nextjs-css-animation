import styled from '@emotion/styled';

function Contact() {
  return <S.Wrapper>Contact</S.Wrapper>;
}

export default Contact;

const S = {
  Wrapper: styled('section')`
    width: 100%;
    margin: 0 auto;
    padding: 100px 0px;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
  `,
};
