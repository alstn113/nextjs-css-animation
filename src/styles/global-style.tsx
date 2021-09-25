import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::before, *::after {
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyle;
