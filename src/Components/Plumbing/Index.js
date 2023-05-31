import { useEffect, useState } from "react";
import UserDetail from "../DryCleaning/Page2";
import PlumbingCalc from "./Plumbing";
import Footer from "../Footer";

export const PlumbingShop = () => {
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
    <PlumbingCalc handleNextStep={handleNext} data={data} />,
    <UserDetail handleNextStep={handleNext} data={data} />,
  ];
  return (
    <div>
      {page[currentStep]}
      <Footer />
    </div>
  );
};
