const ErrorPage = ({ message }) => {
  if (message) {
    return <p>{message}</p>;
  }
  return <p>404: That URL isn't valid</p>;
};

export default ErrorPage;
