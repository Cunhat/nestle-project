import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";

const navItem = cva(
  "text-base h-full p-3 py-4 hover:text-text-primary hover:border-b-2 hover:border-indigo-500",
  {
    variants: {
      active: {
        true: "text-text-primary border-b-2 border-primary font-semibold",
        false: "text-slate-600",
      },
    },
  }
);

export const MainLayout: React.FC = () => {
  return (
    <div className="grid h-full grid-rows-[auto_1fr]">
      <div className="z-10 flex justify-center shadow-md">
        <div className="flex h-full w-full max-w-[120em] items-center bg-white px-3">
          <NavLink
            to="/"
            className={({ isActive }) => navItem({ active: isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="/config"
            className={({ isActive }) => navItem({ active: isActive })}
          >
            Config
          </NavLink>

          <div className="relative ml-auto">
            <div>
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
