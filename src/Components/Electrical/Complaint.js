import React, { useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const phoneRegExp = /^(\+?234|0)[789]\d{9}$/;

const validationSchema = Yup.object().shape({
  complain: Yup.string().required().label("Complain"),
  telephone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid Nigerian phone number")
    .required("Phone number is required"),
});

const Complaint = () => {
  const form = useRef();
  const handleSubmit = (values) => {
    console.log(values);

    emailjs
      .sendForm(
        "service_l3bov0o",
        "template_o0slnis",
        form.current,
        "l2r3KJWv4Sx3jmpZ2"
      )
      .then(
        (result) => {
          console.log("mail sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{
          complain: "",
          telephone: "",
        }}>
        {({ errors, touched, handleBlur, handleChange }) => (
          <Form ref={form}>
            <div className="mb-6">
              <input
                onBlur={handleBlur}
                onChange={handleChange("telephone")}
                name="telephone"
                type="tel"
                placeholder="Your Phone"
                className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
              />
              {errors.telephone && touched.telephone ? (
                <p className="mt-2 text-sm text-red-700">{errors.telephone}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <textarea
                onBlur={handleBlur}
                onChange={handleChange("complain")}
                name="complain"
                rows="6"
                placeholder="Your Complaint"
                className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"></textarea>
              {errors.complain && touched.complain ? (
                <p className="mt-2 text-sm text-red-700">{errors.complain}</p>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded border border-primary bg-orange-900 p-3 text-white transition hover:bg-opacity-90">
                Send Complaint
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Complaint;
