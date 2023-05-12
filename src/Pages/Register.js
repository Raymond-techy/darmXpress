import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarmXpress from "../assets/logo.png";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

const ValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required("Password field is required"),
  first_name: Yup.string().required("First Name field is required"),
  last_name: Yup.string().required("Last Name field is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    const { first_name, last_name, email, password } = values;

    setLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        first_name,
        userEmail: email,
      });
      const formDataCopy = { ...values };
      delete formDataCopy.password;
      delete formDataCopy.confirm_password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Account successfully registered");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        toast.warning("Email already exist!", {
          toastId: "r34-xAcu9#@(*12",
        });
        setLoading(false);
        return;
      } else if (error.code === "auth/weak-password") {
        toast.warning(
          "Use a strong password!",
          { toastId: "r34-xAcu56^%(*" },
          { autoClose: 1000 }
        );
        setLoading(false);
        return;
      } else {
        toast.error(
          "An error occured While registering User",
          { toastId: "r34-xAcu9#678@(*" },
          { autoClose: 1000 }
        );
      }
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <span className="block text-white">
                <span className="sr-only">Home</span>
                <Link
                  to="/"
                  className="inline-flex items-center mr-8 bg-white rounded-full">
                  <img className="p-4 text-teal-accent-400" src={DarmXpress} />
                </Link>
              </span>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to DarmXpress
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20">
                  <span className="sr-only">Home</span>
                  <span className="block text-white">
                    <span className="sr-only">Home</span>
                    <Link to="/">
                      <img
                        className="p-4 w-46 text-teal-accent-400"
                        src={DarmXpress}
                      />
                    </Link>
                  </span>
                </span>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to DarmXpress
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
              <Formik
                onSubmit={handleSubmit}
                validationSchema={ValidationSchema}
                initialValues={{
                  email: "",
                  password: "",
                  first_name: "",
                  last_name: "",
                  confirm_password: "",
                }}>
                {({ errors, touched, handleBlur, handleChange }) => (
                  <Form>
                    <div className="mt-8 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="FirstName"
                          className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>

                        <input
                          onChange={handleChange("first_name")}
                          onBlur={handleBlur}
                          type="text"
                          id="FirstName"
                          name="first_name"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                        {errors.first_name && touched.first_name ? (
                          <p className="mt-2 text-sm text-red-700">
                            {errors.first_name}
                          </p>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="LastName"
                          className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>

                        <input
                          onChange={handleChange("last_name")}
                          onBlur={handleBlur}
                          type="text"
                          id="LastName"
                          name="last_name"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="block text-sm font-medium text-gray-700">
                          Email
                        </label>

                        <input
                          onChange={handleChange("email")}
                          onBlur={handleBlur}
                          type="email"
                          id="Email"
                          name="email"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                        {errors.email && touched.email ? (
                          <p className="mt-2 text-sm text-red-700">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Password"
                          className="block text-sm font-medium text-gray-700">
                          Password
                        </label>

                        <input
                          onChange={handleChange("password")}
                          onBlur={handleBlur}
                          type="password"
                          id="Password"
                          name="password"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                        {errors.password && touched.password ? (
                          <p className="mt-2 text-sm text-red-700">
                            {errors.password}
                          </p>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium text-gray-700">
                          Password Confirmation
                        </label>

                        <input
                          onChange={handleChange("confirm_password")}
                          onBlur={handleBlur}
                          type="password"
                          id="PasswordConfirmation"
                          name="confirm_password"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <p className="mt-2 text-sm text-red-700">
                            {errors.confirm_password}
                          </p>
                        ) : null}
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            I want to receive emails about events, product
                            updates and company announcements.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                          By creating an account, you agree to our
                          <a href="#" className="text-gray-700 underline">
                            terms and conditions
                          </a>
                          and
                          <a href="#" className="text-gray-700 underline">
                            privacy policy
                          </a>
                          .
                        </p>
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                          type="submit">
                          Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Already have an account?
                          <a href="#" className="text-gray-700 underline">
                            Log in
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
