import { css } from "styled-components";
export const breakpoint = {
  ms: (...args) => css`
    @media (max-width: 320px) {
      ${css(...args)}
    }
  `,
  mm: (...args) => css`
    @media (max-width: 375px) {
      ${css(...args)}
    }
  `,
  ml: (...args) => css`
    @media (max-width: 426px) {
      ${css(...args)}
    }
  `,
  tb: (...args) => css`
    @media (max-width: 769px) {
      ${css(...args)}
    }
  `,
  ls: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  lm: (...args) => css`
    @media (max-width: 1440px) {
      ${css(...args)}
    }
  `
};
