export const Content2 = ({ title, text, image }) => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <h5 className="mb-4 text-3xl font-bold leading-none text-left text-orange-900">
            {title}
          </h5>
          <p className="mb-6 text-gray-600 text-left leading-8">{text}</p>
          <button class="px-8 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-900 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Explore More
          </button>
          <hr className="mb-5 border-gray-300" />
        </div>
      </div>
    </div>
  );
};
