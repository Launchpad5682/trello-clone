import { Redirect, Route } from "react-router";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser === null ? (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};
