import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div>
      <h1>Login Layout</h1>
      <Outlet />
    </div>
  );
};
