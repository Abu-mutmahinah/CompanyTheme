import { IoLogoIonic } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="fixed z-auto z-[1] w-full shadow-lg">
      <div className="bg-orange-600 flex justify-between lg:items-center px-10 md:px-36 py-3  ">
        <div className="text-xl text-white font-semibold">
          <a href="#Home" className="flex items-center gap-2">
            <IoLogoIonic className="h-7 w-7" />
            <h1 className="font-bold"> L o g o</h1>
          </a>
        </div>

        <div className="font-bold">
          <ul
            className={` flex flex-col lg:flex-row gap-5 uppercase text-white  ${
              open
                ? "block transition-all ease-in-out duration-500 mt-10"
                : "hidden transition-all ease-in-out duration-500 lg:block lg:flex"
            }`}
          >
            <a
              className="hover:bg-white hover:text-orange-600  p-3 rounded hover:shadow-xl  "
              href="#about"
            >
              <li>About</li>
            </a>
            <a
              className="hover:bg-white hover:text-orange-600  p-3 hover:rounded hover:shadow-xl transition ease-in-out duration-500"
              href="#service"
            >
              <li>Service</li>
            </a>

            <a
              className="hover:bg-white hover:text-orange-600  p-3 hover:rounded hover:shadow-xl transition ease-in-out duration-500"
              href="#contact"
            >
              <li>contact</li>
            </a>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer"
        >
          {open ? (
            // MENUE  AND CLOSE ICON
            <IoClose className="h-7 w-7  text-white" />
          ) : (
            <HiMenu className="h-7 w-7 text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
