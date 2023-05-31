import React, { useEffect, useState } from "react";
import { useFormik, Formik, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./index.css";
import UserDetail from "./Page2";
import Complaint from "../Electrical/Complaint";
const goods = [
  { name: "Agbada(Coloured)", id: 1, price: 1000 },
  { name: "Agbada(White)", id: 2, price: 1300 },
  { name: "complete Native(White)", id: 3, price: 600 },
  { name: "complete Native(Coloured)", id: 4, price: 500 },
  { name: "Packing Suit", id: 5, price: 300 },
  { name: "Trouser", id: 6, price: 300 },
  { name: "Lady's Gown(White)", id: 7, price: 600 },
  { name: "Lady's Gown(coloured)", id: 8, price: 500 },
];

const Calculator = ({ handleNextStep }) => {
  const formik = useFormik({
    initialValues: {
      goods: goods.map((good) => ({
        name: good.name,
        quantity: 0,
        price: good.price,
      })),
    },
    validate: (values) => {
      const errors = {};
      const hasNonZeroQuantity = values.goods.some((good) => good.quantity > 0);
      if (!hasNonZeroQuantity) {
        errors.goods =
          "At least one good must have a quantity greater than zero";
        toast.warn("one good item must have at least 1 item!", {
          toastId: "w4re45",
        });
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      handleNextStep({
        values,
        totalPrice: calculateTotalPrice(),
        image:
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      });
      // Handle form submission
      // ...
      // Set submitting to false after submission is complete
      setSubmitting(false);
    },
  });

  const handleQuantityChange = (event, index) => {
    const newQuantity = parseInt(event.target.value);
    formik.setFieldValue(`goods.${index}.quantity`, newQuantity);
  };

  const calculateTotalPrice = () => {
    return formik.values.goods.reduce(
      (total, good) => total + good.quantity * good.price,
      0
    );
  };

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center mt-24 md:mt-0">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>
          <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <form onSubmit={formik.handleSubmit}>
              <div className="justify-center pl-10">
                <div className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-left my-6">
                  <label htmlFor="totalPrice">Total Price:</label>
                  <input
                    type="text"
                    id="totalPrice"
                    name="totalPrice"
                    className="h-1 border-none text-gray-900"
                    value={calculateTotalPrice().toLocaleString()}
                    readOnly
                    disabled={true}
                  />
                </div>
                <div className="flex flex-cols-2 gap-4 text-center sm:flex-cols-3 flex-wrap">
                  {goods.map((good, index) => (
                    <div className="input-container" key={good.name}>
                      <input
                        type="number"
                        id={`quantity_${good.name}`}
                        name={`goods.${index}.quantity`}
                        value={formik.values.goods[index]?.quantity || 0} // Default quantity to 0 if not set
                        min={0}
                        onChange={(event) => handleQuantityChange(event, index)}
                      />
                      <h2 className="invite-btn">{good.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="flex rounded-lg bg-black ml-10 mt-8 px-5 py-3 font-medium text-white sm:w-auto items-center">
                Proceed
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2 text-center"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="relative  h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 w-full">
          <h3 className="mb-4 font-semibold text-gray-900">
            Complaint not Listed?
          </h3>
          <Complaint />
        </div>
      </section>
    </>
  );
};

export default Calculator;

export const WatchCloth = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        <Calculator />
        {/* <UserDetails /> */}
      </div>

      <div className="relative  h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export const ClothingShop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState();

  const makeRequest = (formData) => {
    console.log(formData);
  };

  const handleNext = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));

    console.log(newData, "data");
    if (currentStep >= page.length - 1) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };
  const handleNextS = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const page = [
    <Calculator handleNextStep={handleNext} data={data} />,
    <UserDetail handleNextStep={handleNext} data={data} />,
  ];
  return page[currentStep];
};
