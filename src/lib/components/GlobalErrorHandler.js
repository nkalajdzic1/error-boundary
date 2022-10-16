import { useCallback, useEffect, Component } from "react";
import { useNavigate } from "react-router";

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

  const errorHandler = useCallback(
    (_msg, _url, _lineNo, _columnNo, error) => {
      // falsy error, just return (errors like GlobalResizeObserver and etc. that are falsy)
      if (!error) return;

      // route to error page when the error occurred
      navigate("/404");

      return true;
    },
    [navigate]
  );

  const unhandledErrorRejectionHandler = useCallback(
    (_error) => {
      // route to error page when the error occurred
      navigate("/404");

      return true;
    },
    [navigate]
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
    <GlobalErrorHandlerWrapper
      routeToErrorPage={() => {
        navigate("/404");
        document.location.reload();
      }}
    >
      {children}
    </GlobalErrorHandlerWrapper>
  );
};
