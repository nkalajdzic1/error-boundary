import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

/* don't lazy load the loading page, it will be needed immediately as a fallback for the rest of the pages */
import { LoadingPage } from "pages";
import { ROUTE_PATHS } from "lib/constants";

const HomePage = lazy(() => import("pages/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const Page404 = lazy(() => import("pages/Page404"));

const ROUTES = {
  HOME: {
    path: ROUTE_PATHS.HOME,
    exact: true,
    element: <HomePage />,
  },
  ABOUT: {
    path: ROUTE_PATHS.ABOUT,
    exact: true,
    element: <AboutPage />,
  },
  /* this page needs to be always the last in this object, it will be the last one for the user redirection */
  PAGE404: {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <Page404 />,
  },
};

const routesArr = Object.values(ROUTES);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {routesArr.map((x, i) => (
          <Route key={`route-${i}`} {...x} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
