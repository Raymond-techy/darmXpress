import { motion } from "framer-motion";
export const Content = ({ title, text, image }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex md:flex-nowrap flex-wrap-reverse flex-row gap-x-4">
        <div className="lg:basis-1/2">
          <h5 className="mb-4 text-4xl font-bold leading-8 text-left text-orange-900">
            {title}
          </h5>
          <p className="mb-6 text-gray-600 text-left leading-8">{text}</p>
          <button className="px-8 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-900 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Explore More
          </button>
        </div>
        <div>
          <motion.img
            src={image}
            alt=""
            className="z-10 rounded-tl-3xl rounded-br-3xl"
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
