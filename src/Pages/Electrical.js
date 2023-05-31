import React from "react";
import { Content } from "../Components/Content/content1";
import { Content2 } from "../Components/Content/content2";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const texts = [
  "Why clean when someone else can do it for you?  DarmXpress is here to deliver the best cleaning experience for your house and office. Contact us and we’ll be happy to match you with champions among cleaning experts who are super capable, dedicated and sweet, and who’ll take delicate care of your lovely home and office. We perform strict background checks and detailed screening of every of our workers, for your peace of mind. So what are you waiting for? Book now!",
  "Electrical maintenance is without question, one of the foremost and sure steps towards fostering a safe environment.  A home is designed to be a safe haven for its dwellers, and therefore anything and everything that favors home safety should always be accorded first priority. ",
  "Proper maintenance of the plumbing system at your place is essential to ensure that water either clean or waste is running properly. This is necessary because proper maintenance of the plumbing system will provide a healthy environment for you and your family. DarmXpress won’t overlook when they are determined to save time and money  of people while avoiding stress in matters of home upkeep.",
];

const Electrical = () => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-hidden">
        <div className="">
          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto">
              <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] bg-gray-700 bg-blend-multiply bg-cover">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Store For all Electrical Repair.
                  </h1>
                  <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    we help in repairing the likely electric faults,plumbing
                    faults and best cleaning services all at an affordable,
                    secured environment with quick delivery.
                  </p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/services/shop/electrical"
                      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
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
          target="/services/shop/electrical"
          title="The best Electricity Services"
          text={texts[1]}
          image={
            "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGVsZWN0cmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          }
        />
        <Content
          target="/services/shop/electrical"
          title="Electricity services"
          text={texts[0]}
          image={
            "https://images.unsplash.com/photo-1646640345481-81d36b291b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVsZWN0cmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          }
        />
        <Footer />
      </div>
    </div>
  );
};

export default Electrical;
