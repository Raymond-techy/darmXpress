import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
const goods = [
  { id: "1", name: "A room socket and fault replacement", price: 1500 },
  { id: "2", name: "A room lampholder fault and replacement", price: 1500 },
  { id: "3", name: "A Room installation and wiring", price: 5000 },
  { id: "4", name: "Extension box repair", price: 1000 },
  { id: "5", name: "A room socket and fault replacement", price: 1500 },
  { id: "6", name: "A room lampholder fault and replacement", price: 1500 },
  { id: "7", name: "A Room installation and wiring", price: 5000 },
  { id: "8", name: "Extension box repair", price: 1000 },
  { id: "9", name: "A room socket and fault replacement", price: 1500 },
  { id: "10", name: "A room lampholder fault and replacement", price: 1500 },
  { id: "11", name: "A Room installation and wiring", price: 5000 },
  { id: "12", name: "Extension box repair", price: 1000 },
  { id: "13", name: "A room socket and fault replacement", price: 1500 },
  { id: "14", name: "A room lampholder fault and replacement", price: 1500 },
  { id: "15", name: "A Room installation and wiring", price: 5000 },
  { id: "16", name: "Extension box repair", price: 1000 },
  { id: "17", name: "A room socket and fault replacement", price: 1500 },
  { id: "18", name: "A room lampholder fault and replacement", price: 1500 },
  { id: "19", name: "A Room installation and wiring", price: 5000 },
  { id: "20", name: "Extension box repair", price: 1000 },
];

const Calculator2 = ({ handleNextStep, data }) => {
  const formik = useFormik({
    initialValues: {
      goods: goods.map((good) => ({
        name: good.name,
        quantity: false,
        price: good.price,
      })),
    },
    validate: (values) => {
      const errors = {};
      const hasNonZeroQuantity = values.goods.some((good) => good.quantity);
      if (!hasNonZeroQuantity) {
        errors.goods = "At least one good must be selected";
        toast("At least one service must be selected! ", {
          toastId: "453hjnjhfnj",
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
          "https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      });
      // Handle form submission
      // ...
      // Set submitting to false after submission is complete
      setSubmitting(false);
    },
  });

  const handleCheckboxChange = (event, index) => {
    const newQuantity = event.target.checked;
    formik.setFieldValue(`goods.${index}.quantity`, newQuantity);
  };

  const calculateTotalPrice = () => {
    return formik.values.goods.reduce(
      (total, good) => total + (good.quantity ? good.price : 0),
      0
    );
  };

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="mt-24 mx-8">
          <div className="flex justify-between px-8">
            <h3 className="mb-4 font-semibold text-gray-900">
              Electrical Services
            </h3>
            <h3 className="mb-4 font-bold text-gray-900">
              Total Price : ₦ {calculateTotalPrice().toLocaleString()}
            </h3>
          </div>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {goods.map((good, index) => (
              <li key={good.id} className="w-full py-4 dark:border-gray-600">
                <div className="flex items-center  pl-3">
                  <input
                    type="checkbox"
                    id={`quantity_${good.name}`}
                    name={`goods.${index}.quantity`}
                    checked={formik.values.goods[index]?.quantity || false} // Default quantity to false if not set
                    onChange={(event) => handleCheckboxChange(event, index)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 pt-4"
                  />
                  <div className="flex flex-col">
                    <label
                      htmlFor="laravel-checkbox-list"
                      className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {good.name}
                    </label>
                    <label
                      htmlFor="laravel-checkbox-list"
                      className="w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      ₦{good.price.toLocaleString()}
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
  );
};

export default Calculator2;
