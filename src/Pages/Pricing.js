import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Drycleaning, Apartment } from "../Components/plans/Drycleaning";

const tabs = [
  {
    id: 1,
    name: "Dry Cleaning",
  },
  {
    id: 2,
    name: "Apartment Cleaning",
  },
  {
    id: 3,
    name: "Workplace Cleaning",
  },
];

const Pricing = () => {
  const [currentTab, setCurrentTab] = useState("Clothing");

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white-500 uppercase rounded-full bg-orange-900">
            Our Pricing
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Transparent</span>
          </span>
          pricing. Pay as you grow.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Apartments</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$8,500</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div>
              <p className="my-4 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className=" text-left font-medium text-gray-800">
                    Checked and verified by dern associates
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Giving you the best cleaning services
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Best pricing for you
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Neat and healthy services
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link
              to="/services/dryCleaning"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
              Get started
            </Link>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Corporate</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$6,500</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className=" text-left font-medium text-gray-800">
                    Checked and verified by dern associates
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Giving you the best cleaning services
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Best pricing for you
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium  text-left text-gray-800">
                    Neat and healthy services
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link
              to="/services/dryCleaning"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              Get started
            </Link>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto pt-16">
        <ul className="flex border-b border-gray-100">
          <li className="flex-1">
            <div
              className="relative block p-4"
              onClick={() => setCurrentTab("Clothing")}>
              {currentTab === "Clothing" && (
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
              )}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  Clothing
                </span>
              </div>
            </div>
          </li>
          <li className="flex-1">
            <div
              className="relative block p-4"
              onClick={() => setCurrentTab("Apartment")}>
              {currentTab === "Apartment" && (
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
              )}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  Apartment
                </span>
              </div>
            </div>
          </li>
          <li className="flex-1">
            <div
              className="relative block p-4"
              onClick={() => setCurrentTab("Office")}>
              {currentTab === "Office" && (
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
              )}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  Office
                </span>
              </div>
            </div>
          </li>
        </ul>

        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Price
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {currentTab === "Clothing" &&
              Drycleaning.map((plan) => (
                <tr key={plan.Name}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {plan.Name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {plan.Price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to="/"
                      className="inline-block rounded bg-deep-orange-800 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            {currentTab === "Office" &&
              Drycleaning.map((plan) => (
                <tr key={plan.Name}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {plan.Name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {plan.Price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to="/"
                      className="inline-block rounded bg-deep-orange-800 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            {currentTab === "Apartment" &&
              Apartment.map((plan) => (
                <tr key={plan.Name}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {plan.Name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {plan.Price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to="/"
                      className="inline-block rounded bg-deep-orange-800 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
