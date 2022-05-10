import { BiBarChart } from "react-icons/bi";

const About = () => {
  return (
    <div id="about" className="grid md:grid-cols-3 pt-20 pb-20 px-7">
      <div className="col-span-2 md:ml-10  ">
        <h1 className="text-2xl font-bold text-gray-700  ">
          ABOUT COMPANY PAGE
        </h1>
        <p className="text-xl font-semibold text-gray-700 mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-2sm text-gray-400 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
        </p>

        <button className="text-xl font-semibold text-gray-700 mt-10 border border-1 border-gray-400 rounded py-2 px-4 hover:bg-orange-600 transition-all duration-300 ease-out hover:text-white ">
          Get in Touch
        </button>
      </div>
      <BiBarChart className="h-60 w-60 text-orange-600 ml-10 mt-20 pt-10 mb-10 md:ml-20 " />
    </div>
  );
};

export default About;
