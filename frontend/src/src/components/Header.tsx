import React from "react";

export const Header = () => {
  return (
    <header className="h-16 w-full bg-slate-400">
      <nav className="flex justify-between max-w-2xl p-4 mx-auto">
        <div></div>
        <div>
          <h1>さけめも</h1>
        </div>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};
