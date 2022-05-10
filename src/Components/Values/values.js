import { IoMdGlobe } from "react-icons/io";

const Value = () => {
  return (
    <div className="pt-20 px-10 bg-gray-200 ">
      <div className="grid md:grid-cols-3 mt-5">
        <IoMdGlobe className="h-60 w-60 text-orange-600 ml-5 mt-5 md:mt-32" />

        <div className="col-span-2 mt-20 md:-0">
          <h1 className="text-3xl font-semibold mb-20 text-gray-700">
            OUR VALUES
          </h1>

          <p className=" text-lg font-semibold text-gray-700 mb-20 ">
            <span className="font-bold">MISSION: </span>
            Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className=" text-gray-600 mb-20 ">
            <span className="font-bold">VISION: </span>
            Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
