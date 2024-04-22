import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./GlobalStyled";
const themes = {
  avengers: {
    bg: "#ceceff",
    color: "#335",
    color2: "rgba(5,5,100,0.5)",
  },
  terminator: {
    bg: "#ccffcc",
    color: "#010",
    color2: "rgba(5,5,100,0.5)",
  },
};
export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
    <GlobalStyled />
    {props.children}
  </ThemeProvider>
);
