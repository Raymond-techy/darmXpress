import { useState } from "react";
import { Link } from "react-router-dom";
import DarmXpress from "../assets/logo.png";
import DropDown from "./NavComponent";
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      target: "/",
      title: "Home",
    },
    {
      target: "/pricing",
      title: "Pricing",
    },
    {
      target: "/contact",
      title: "Contact Us",
    },
  ];

  const subPricing = [
    { href: "/services/cleaning", label: "Cleaning" },
    { href: "/services/plumbing", label: "Plumbing" },
    { href: "/services/electrical", label: "Electrical" },
  ];

  return (
    <div className="bg-gray-100 fixed top-0 left-0 right-0 space z-40">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center mr-8">
              <img className="w-24 text-teal-accent-400" src={DarmXpress} />
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              {/* {links.map((link) => ( */}
              <li>
                <Link
                  to={links[0].target}
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-orange-accent-400">
                  {links[0].title}
                </Link>
              </li>
              {/* ))} */}
              <DropDown title="Services" sub={subPricing} />
              <li>
                <Link
                  to={links[1].target}
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-orange-accent-400">
                  {links[1].title}
                </Link>
              </li>
              <li>
                <Link
                  to={links[2].target}
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-orange-accent-400">
                  {links[2].title}
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/login"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400">
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}>
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-40">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img
                          className="w-24 text-teal-accent-400"
                          src={DarmXpress}
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}>
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {links.map((link) => (
                        <li>
                          <Link
                            onClick={() => setIsMenuOpen(false)}
                            to={link.target}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-purple-accent-400">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                      <DropDown
                        title="Pricing"
                        sub={subPricing}
                        handleClick={() => setIsMenuOpen(false)}
                      />
                      <DropDown
                        title="Services"
                        sub={subPricing}
                        handleClick={() => setIsMenuOpen(false)}
                      />
                      <li>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          to="/login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-orange-accent-400 hover:bg-deep-orange-accent-700 focus:shadow-outline focus:outline-none">
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
