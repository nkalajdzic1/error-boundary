import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const StyledNavLink = styled(({ underlined, ...rest }) => (
  <NavLink {...rest} end />
))`
  color: ${({ theme }) => theme.links.color};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.links.activeColor};
  }

  ${({ underlined }) => underlined && "text-decoration: underline;"}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
