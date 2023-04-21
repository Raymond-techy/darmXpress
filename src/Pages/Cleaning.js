import React from "react";
import Footer from "../Components/Footer";
import { Content } from "../Components/Content/content1";
import { Content2 } from "../Components/Content/content2";
import { Link } from "react-router-dom";
const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac",
  "We help you create a good and conducive leaving environment in your house with proper hygiene by removing all the dirt that can cause harm to health.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris .",
];

const Cleaning = () => {
  return (
    <div>
      <div className="mt-24">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <span className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-orange-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </span>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                      <defs>
                        <pattern
                          id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30">
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Store </span>
                  </span>{" "}
                  For a quick Cleaning
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  We offer the best cleaning services in a secured environment
                  with better hygiene using the appropriate working instrument
                  at an affordable price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Content2
        target="/"
        title="House Cleaning"
        text={texts[1]}
        image={
          "https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlJTIwY2xlYW5pbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
      />
      <Content
        target="/"
        title="Office Cleaning"
        text={texts[0]}
        image={
          "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmclMjBvZmZpY2V8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
      />

      <Content2
        target="/services/dryCleaning"
        title="Clothes Dry Cleaning"
        text={texts[2]}
        image={
          "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNsZWFuaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
      />
      <Footer />
    </div>
  );
};

export default Cleaning;
