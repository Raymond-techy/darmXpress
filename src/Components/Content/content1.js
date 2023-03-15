export const Content = ({ title, text, image }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="">
          <h5 className="mb-4 text-4xl font-bold leading-none text-left text-orange-900">
            {title}
          </h5>
          <p className="mb-6 text-gray-600 text-left">{text}</p>
          <hr className="mb-5 border-gray-300" />
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
