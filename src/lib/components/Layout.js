import styled from "styled-components";

import { ROUTE_PATHS } from "lib/constants";
import { Nav, NavMenu, StyledNavLink } from "./NavComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <StyledNavLink to={ROUTE_PATHS.HOME}>HOME</StyledNavLink>
          <StyledNavLink to={ROUTE_PATHS.ABOUT}>ABOUT</StyledNavLink>
        </NavMenu>
      </Nav>
      <Wrapper {...rest}>{children}</Wrapper>
    </>
  );
};
