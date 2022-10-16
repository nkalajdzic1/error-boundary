import styled from "styled-components";

const Wrapper = styled.div``;

export const Layout = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
