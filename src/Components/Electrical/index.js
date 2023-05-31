import { useState } from "react";
import Calculator2 from "./Calc2";
import UserDetail from "../DryCleaning/Page2";

export const ElectricalShop = () => {
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
    <Calculator2 handleNextStep={handleNext} data={data} />,
    <UserDetail handleNextStep={handleNext} data={data} />,
  ];
  return page[currentStep];
};
