import { Navigate } from "react-router-dom";

const RequireAuth = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
