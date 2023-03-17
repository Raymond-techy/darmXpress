import React from "react";
import { Content } from "../Components/Content/content1";
import { Content2 } from "../Components/Content/content2";
import Footer from "../Components/Footer";

const texts = [
  "Why clean when someone else can do it for you?  DarmXpress is here to deliver the best cleaning experience for your house and office. Contact us and we’ll be happy to match you with champions among cleaning experts who are super capable, dedicated and sweet, and who’ll take delicate care of your lovely home and office. We perform strict background checks and detailed screening of every of our workers, for your peace of mind. So what are you waiting for? Book now!",
];

const Home = () => {
  return (
    <div>
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div
              className="flex flex-col text-center w-full mb-20  bg-opacity-30 overflow-hidden py-40 
            ">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-900">
                Store for a quick repair and cleaning
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We help in repairing the likely electric faults, plumbing faults
                and best cleaning services all at an affordable, secured
                environment with quick delivery.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <h5 className="mb-4 text-4xl font-extrabold leading-none text-left text-orange-900">
            WHAT WE DO
          </h5>
          <p className="mb-6 text-gray-600 text-left leading-8 md:leading-loose">
            {texts[0]}
          </p>
        </div>
      </div>
      <Content
        title="Cleaning services"
        text={texts[0]}
        image={
          "https://img.freepik.com/free-photo/young-girl-is-holding-cleaning-product-gloves-rags-basin-white-wall_1150-21780.jpg?size=626&ext=jpg&ga=GA1.2.1938237910.1672528748&semt=ais"
        }
      />

      <Content2
        title="Cleaning services"
        text={texts[0]}
        image={
          "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        }
      />
      <Content
        title="Cleaning services"
        text={texts[0]}
        image={
          "https://img.freepik.com/free-photo/young-girl-is-holding-cleaning-product-gloves-rags-basin-white-wall_1150-21780.jpg?size=626&ext=jpg&ga=GA1.2.1938237910.1672528748&semt=ais"
        }
      />
      <Footer />
    </div>
  );
};

export default Home;
