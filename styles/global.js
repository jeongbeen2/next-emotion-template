import { css } from "@emotion/react";

export const globalStyles = css`
  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    margin: 0;
    padding: 0;
  }
`;
