export const If = ({ predicate, children }) => {
  if (!predicate) return null;

  return children;
};
