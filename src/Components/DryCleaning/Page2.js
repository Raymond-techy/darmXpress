import React from "react";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const phoneRegExp = /^(\+?234|0)[789]\d{9}$/;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  messsage: Yup.string().label("message"),
  address: Yup.string().required().label("Address"),
  cardNumber: Yup.string()
    .matches(
      /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/,
      "Invalid card number"
    )
    .required("Card number is required"),
  telephone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid Nigerian phone number")
    .required("Phone number is required"),
});

const UserDetail = ({ handleNextStep, data }) => {
  const handleSubmit = (values) => {
    handleNextStep(values);
  };

  const formatExpiryDate = (value) => {
    // Remove non-digit characters from the input value
    const expiryDate = value.replace(/\D/g, "");

    // Apply formatting by adding slashes
    let formattedDate = "";
    for (let i = 0; i < expiryDate.length; i++) {
      if (i === 2) {
        formattedDate += "/";
      }
      formattedDate += expiryDate[i];
    }
    return formattedDate;
  };

  const formatCardNumber = (value) => {
    // Remove non-digit characters from the input value
    const cardNumber = value.replace(/\D/g, "");

    // Apply formatting by adding spaces
    let formattedNumber = "";
    for (let i = 0; i < cardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedNumber += " ";
      }
      formattedNumber += cardNumber[i];
    }
    return formattedNumber;
  };
  console.log(data);

  return (
    <section className="mt-24">
      <h1 className="sr-only">Checkout</h1>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                messsage: "",
                address: "",
                telephone: "",
                cardNumber: "",
              }}>
              {({ errors, touched, handleBlur, handleChange, values }) => (
                <Form>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <label
                        htmlFor="FirstName"
                        className="block text-xs font-medium text-gray-700">
                        First Name
                      </label>

                      <input
                        onChange={handleChange("first_name")}
                        onBlur={handleBlur}
                        name="first_name"
                        type="text"
                        id="FirstName"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                      {errors.first_name && touched.first_name ? (
                        <p className="mt-2 text-sm text-red-700">
                          {errors.first_name}
                        </p>
                      ) : null}
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor="LastName"
                        className="block text-xs font-medium text-gray-700">
                        Last Name
                      </label>

                      <input
                        onChange={handleChange("last_name")}
                        onBlur={handleBlur}
                        name="last_name"
                        type="text"
                        id="LastName"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                      {errors.last_name && touched.last_name ? (
                        <p className="mt-2 text-sm text-red-700">
                          {errors.last_name}
                        </p>
                      ) : null}
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="Email"
                        className="block text-xs font-medium text-gray-700">
                        Email
                      </label>

                      <input
                        onChange={handleChange("email")}
                        onBlur={handleBlur}
                        name="email"
                        type="email"
                        id="Email"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                      {errors.email && touched.email ? (
                        <p className="mt-2 text-sm text-red-700">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="Phone"
                        className="block text-xs font-medium text-gray-700">
                        Phone(Please make sure it's your calling number!)
                      </label>

                      <input
                        onChange={handleChange("telephone")}
                        onBlur={handleBlur}
                        name="telephone"
                        type="tel"
                        id="Phone"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                      {errors.telephone && touched.telephone ? (
                        <p className="mt-2 text-sm text-red-700">
                          {errors.telephone}
                        </p>
                      ) : null}
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="Phone"
                        className="block text-xs font-medium text-gray-700">
                        Address
                      </label>

                      <input
                        onChange={handleChange("address")}
                        onBlur={handleBlur}
                        name="address"
                        type="tel"
                        id="Address"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                      {errors.address && touched.address ? (
                        <p className="mt-2 text-sm text-red-700">
                          {errors.address}
                        </p>
                      ) : null}
                    </div>

                    <fieldset className="col-span-6">
                      <legend className="block text-sm font-medium text-gray-700">
                        Card Details
                      </legend>

                      <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <div>
                          <label htmlFor="CardNumber" className="sr-only">
                            Card Number
                          </label>
                          <input
                            onChange={(e) => {
                              const formattedValue = formatCardNumber(
                                e.target.value
                              );
                              handleChange({
                                target: {
                                  name: "cardNumber",
                                  value: formattedValue,
                                },
                              });
                            }}
                            value={values.cardNumber}
                            name="cardNumber"
                            type="text"
                            id="CardNumber"
                            placeholder="Card Number"
                            className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                          />
                          {errors.cardNumber && touched.cardNumber ? (
                            <p className="mt-2 text-sm text-red-700">
                              {errors.cardNumber}
                            </p>
                          ) : null}
                        </div>

                        <div className="flex -space-x-px">
                          <div className="flex-1">
                            <label htmlFor="CardExpiry" className="sr-only">
                              Card Expiry
                            </label>

                            <input
                              type="text"
                              name="expiryDate"
                              placeholder="MM/YY"
                              maxLength="5"
                              onChange={(e) => {
                                const formattedValue = formatExpiryDate(
                                  e.target.value
                                );
                                handleChange({
                                  target: {
                                    name: "expiryDate",
                                    value: formattedValue,
                                  },
                                });
                              }}
                              value={values.expiryDate}
                              className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                            />
                          </div>

                          <div className="flex-1">
                            <label htmlFor="CardCVC" className="sr-only">
                              Card CVC
                            </label>

                            <input
                              type="text"
                              id="CardCVC"
                              placeholder="CVC"
                              className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6">
                      <legend className="block text-sm font-medium text-gray-700">
                        Billing Address
                      </legend>

                      <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <div>
                          <label htmlFor="Country" className="sr-only">
                            Country
                          </label>

                          <select
                            id="Country"
                            className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm">
                            <option>Ife</option>
                            <option>Ibadan</option>
                            <option>Osogbo</option>
                            <option>Ikire</option>
                            <option>Ogbomosho</option>
                            <option>Oyo</option>
                          </select>
                        </div>

                        <div>
                          <label className="sr-only" htmlFor="PostalCode">
                            ZIP/Post Code
                          </label>

                          <input
                            type="text"
                            id="PostalCode"
                            placeholder="ZIP/Post Code"
                            className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6">
                      <button
                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                        type="submit">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                ₦{data.totalPrice.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-gray-600">For the service of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  {data.values.goods.map((good) => {
                    if (good.quantity > 0) {
                      return (
                        <li
                          key={good.name}
                          className="flex items-center gap-4 py-4">
                          <img
                            src={data.image}
                            alt=""
                            className="h-16 w-16 rounded object-cover"
                          />

                          <div>
                            <h3 className="text-sm text-gray-900">
                              {good.name}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div>
                                <dt className="inline">Quantity:</dt>
                                <dd className="inline">{good.quantity}</dd>
                              </div>

                              <div>
                                <dt className="inline">SubTotal:</dt>
                                <dd className="inline">
                                  {good.quantity * good.price}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
