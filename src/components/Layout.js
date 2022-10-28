import React from "react";
import styled from "styled-components";

const Contents = styled.div`
  height: 100%;
  width: 100%;
`;

function Layout({ children }) {
  return <Contents>{children}</Contents>;
}

export default Layout;
