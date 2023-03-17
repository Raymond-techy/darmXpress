import React, { useState } from "react";
import { Funmigation, Regular, Spring } from "../Components/plans/regular";
import Footer from "../Components/Footer";
const Services = () => {
  const [activePlan, setActivePlan] = useState("regular");
  const plans = [
    {
      id: 1,
      plan: "regular",
    },
    {
      id: 2,
      plan: "spring",
    },
    {
      id: 3,
      plan: "funmigation",
    },
  ];
  return (
    <div>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Professional
              <strong className="block font-extrabold text-rose-700">
                Handyman Services.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 py-24 mx-auto flex-items-center">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start mx-auto">
              <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 dark:border-gray-800 dark:bg-gray-900">
                {plans.map((plan) => (
                  <button
                    onClick={() => setActivePlan(plan.plan)}
                    key={plan.id}
                    className={
                      activePlan === plan.plan
                        ? "inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative dark:bg-gray-800"
                        : "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200"
                    }>
                    {plan.plan}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-start">
              {activePlan === "regular" && <Regular />}
              {activePlan === "spring" && <Spring />}
              {activePlan === "funmigation" && <Funmigation />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
