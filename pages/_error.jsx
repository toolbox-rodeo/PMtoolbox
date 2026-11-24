import LostInSpace from "../components/lost-in-space";

// Server errors (404s are handled by pages/404.jsx).
function Error({ statusCode }) {
  return <LostInSpace statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
