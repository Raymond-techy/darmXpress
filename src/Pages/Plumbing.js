import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { Content } from "../Components/Content/content1";
import { Content2 } from "../Components/Content/content2";
import { Link } from "react-router-dom";
const texts = [
  "Cleanliness is next to godliness. You can save your time for something else by using DarmXpress cleaning services to handle your laundry professionally at an affordable, secured and you will feel more comfortable in the cloths and around people. Therefore, yes, cleanliness is indeed next to godliness by making use of Darm Xpress cleaning services.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui ",
  "Cleanliness is next to godliness. You can save your time for something else by using DarmXpress cleaning services to handle your laundry professionally at an affordable, secured and you will feel more comfortable in the cloths and around people. Therefore, yes, cleanliness is indeed next to godliness by making use of Darm Xpress cleaning services.",
];

const Plumbing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-hidden">
        <div className="">
          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto">
              <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1562159937-194305937c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsdW1iaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')] bg-gray-700 bg-blend-multiply bg-cover w-full">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Store For Quick Plumbing Services
                  </h1>
                  <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    we help in repairing the likely plumbing faults and best
                    cleaning services all at an affordable price.
                  </p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/services/shop/plumbing"
                      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-900 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-blue-900">
                      Apply Here
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              <div className="flex flex-wrap -m-4 mt-4">
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-orange-900 text-lg title-font font-medium">
                        Giving You Best Services
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base text-center">
                        At an affordable price.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 className="text-orange-900 text-lg title-font font-medium">
                        Giving Secured Environment
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base text-center ">
                        Help You with Cleaning
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 className="text-orange-900 text-lg title-font font-medium">
                        Quick Delivery
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base text-center">
                        No dissapointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Content2
          target="/services/shop/plumbing"
          title="The best Plumbing Services"
          text={texts[1]}
          image={
            "https://images.unsplash.com/photo-1634921283005-3cc48dc8b28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBsdW1iaW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
        <Content
          target="/services/shop/plumbing"
          title="Plumbing Sevices"
          text={texts[0]}
          image={
            "https://images.unsplash.com/photo-1601520525418-4d7ff1314879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBsdW1iaW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
        <Footer />
      </div>
    </div>
  );
};

export default Plumbing;
