import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="max-w-full text-center my-10 bg-gray-100 rounded-3xl">
        <h1 className="py-8 font-bold text-3xl">Books</h1>
      </div>

      {/* tabs */}
      <div className="flex justify-start  sm:justify-start text-gray-100">
        <Link
          to="readBook"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1
              ? "border border-b-0 text-gray-600 font-semibold "
              : "border-b font-medium text-gray-400"
          } rounded-t-lg dark:border-gray-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0
              ? "border border-b-0 text-gray-600 font-semibold"
              : "border-b font-medium text-gray-400"
          } rounded-t-lg dark:border-gray-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>

      <Outlet></Outlet>

    </div>
  );
};

export default ListedBooks;
