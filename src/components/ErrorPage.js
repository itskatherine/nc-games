const ErrorPage = ({ message }) => {
  if (message) {
    return <p>{message}</p>;
  }
  return <p>404: url not found</p>;
};

export default ErrorPage;
