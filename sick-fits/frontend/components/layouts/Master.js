import React, { useContext } from "react";
import Header from "../Header";
import Meta from "../Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
  red: "#ff0000",
  black: "#393939",
  grey: "#3a3a3a",
  lightGrey: "#e1e1e1",
  offWhite: "ededed",
  maxWidth: "1000px",
  bs: "0 2px 24px 0 rgba(0,0,0,0.89)"
};

const StyledMaster = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Master = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledMaster>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledMaster>
    </ThemeProvider>
  );
};

export default Master;
