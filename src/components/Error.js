import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Opps! Something went wrong!</h1>
      <h3>
        {error.status} - {error.statusText}
      </h3>
      {/* <h3>{error.error.message}</h3> */}
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Error;
