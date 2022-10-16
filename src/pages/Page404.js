import { Layout, StyledNavLink } from "lib/components";
import { ROUTE_PATHS } from "lib/constants";

export const Page404 = () => {
  return (
    <Layout>
      <h2>404</h2>
      <StyledNavLink to={ROUTE_PATHS.HOME} underlined>
        Go Back home
      </StyledNavLink>
    </Layout>
  );
};

export default Page404;
