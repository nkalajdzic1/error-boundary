import { useCallback, useEffect, useMemo, Component } from "react";
import { useNavigate } from "react-router";
import { If } from "./If";

// this handler will catch all errors during render time of the UI
export class GlobalErrorHandlerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (_error) => ({ hasError: true });

  render() {
    // if there is an error, route to the error page and refresh the document
    // (needs page refresh because the UI is corrupt after an render error)
    return this.state.hasError
      ? this.props.routeToErrorPage()
      : this.props.children;
  }
}

export const GlobalErrorHandler = ({ children }) => {
  const navigate = useNavigate();
  const showErrors = useMemo(
    () => process.env.REACT_APP_SHOW_ERRORS === "true",
    []
  );

  const errorHandler = useCallback(
    (_msg, _url, _lineNo, _columnNo, error) => {
      // falsy error, just return (errors like GlobalResizeObserver and etc. that are falsy)
      if (!error) return;

      // route to error page when the error occurred
      if (!showErrors) navigate("/404");

      return true;
    },
    [navigate, showErrors]
  );

  const unhandledErrorRejectionHandler = useCallback(
    (_error) => {
      // route to error page when the error occurred
      if (!showErrors) navigate("/404");

      return true;
    },
    [navigate, showErrors]
  );

  useEffect(() => {
    window.onerror = errorHandler;
    window.onunhandledrejection = unhandledErrorRejectionHandler;

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, [errorHandler, unhandledErrorRejectionHandler]);

  return (
    <>
      <If predicate={showErrors}>{children}</If>
      <If predicate={!showErrors}>
        <GlobalErrorHandlerWrapper
          routeToErrorPage={() => {
            navigate("/404");
            document.location.reload();
          }}
        >
          {children}
        </GlobalErrorHandlerWrapper>
      </If>
    </>
  );
};
