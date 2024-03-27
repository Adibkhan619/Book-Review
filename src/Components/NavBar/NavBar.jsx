import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 text-lg font-medium"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listed/readBook">Listed Books</NavLink>
              </li>
              <li>
                <NavLink>Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-3xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" px-1 text-gray-600 text-lg font-medium flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-green-300 text-green-400  px-5 py-3 font-semibold rounded-md "
                    : "text-gray-600  px-5 py-3 rounded-md "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listed/readBook"
                className={({ isActive }) =>
                  isActive
                    ? "border border-green-300 text-green-400  px-5 py-3 font-semibold rounded-md "
                    : "text-gray-600  px-5 py-3 rounded-md "
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-green-300 text-green-400  px-5 py-3 font-semibold rounded-md "
                    : "text-gray-600  px-5 py-3 rounded-md "
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn text-white bg-[#23BE0A]">Sign In</a>
          <a className="btn text-white bg-[#59C6D2]">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
