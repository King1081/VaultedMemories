import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        {["/", "/categories", "/upload", "/preview", "/print"].map((path) => {
          const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`
                  ${
                    isActive ? "text-blue-700 font-bold" : "text-blue-500"
                  } hover:underline
                `}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationBar;