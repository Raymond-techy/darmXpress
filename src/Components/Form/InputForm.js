import React, { useState } from "react";
import { Field, useFormikContext } from "formik";

const InputForm = ({ name, price, title }) => {
  const { handleChange } = useFormikContext();
  return (
    <div className="w-72 mx-12 my-20 rounded border-gray-200 pr-2 shadow-sm">
      <input
        type="number"
        id="UserEmail"
        onChange={handleChange(name)}
        placeholder="Quantity"
        className="sm:text-sm w-24"
        min={0}
        defaultValue={0}
      />

      <span className="pointer-events-none inset-y-0 pl-2 w-48 h-4 text-gray-500">
        {title}
      </span>
    </div>
  );
};

export default InputForm;
