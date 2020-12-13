import { createGlobalStyle, css } from 'styled-components'

const next = css`
  #__next {
    height: 100vh;
  }
`

const a = css`
  a {
    color: ${({ theme }) => theme.colors.black};
  }
`

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Victor Mono', 'Menlo', monospace;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

const fonts = css`
  @font-face {
    font-family: "Victor Mono";
    src: url("/fonts/victor-mono/VictorMono-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Victor Mono";
    src: url("/fonts/victor-mono/VictorMono-Bold.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${next}
  ${a}
`

export default GlobalStyle
