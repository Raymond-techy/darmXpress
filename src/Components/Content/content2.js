import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Content2 = ({ title, text, image, target }) => {
  return (
    <div className="flex flex-col flex-col-reverse lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-4 lg:px-8 lg:py-12">
      <div className="lg:w-1/2 lg:flex lg:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-left">
            {title}
          </h1>
          <h2 className=" md:leading-relaxed font-medium text-gray-600 mb-6 text-gray-600 text-left leading-8">
            {text}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-start lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
            <Link
              to={target}
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-blue-700 bg-orange-900 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
              <span>Book Now!</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mr-4 lg:flex lg:justify-center lg:items-center h-1/3">
        <div className="lg:w-96 relative">
          <div className="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
          <div className="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
          <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12" />
          <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
          <motion.img
            src={image}
            alt=""
            className="relative rounded-lg mx-auto shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};
