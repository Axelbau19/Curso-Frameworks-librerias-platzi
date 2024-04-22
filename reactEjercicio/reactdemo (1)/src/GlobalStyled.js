import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
html,
body{
    background:${(p) => p.theme.bg};
}
`;
