import { IoPowerOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="service" className="py-20">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold uppercase text-gray-700 ">
          Services
        </h1>
        <p className="text-xl my-5">What we Offer</p>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap gap-20 md:gap-52 justify-center text-center "
      >
        <div>
          <IoPowerOutline className="h-40 w-40 text-orange-600" />
          <p className="mr-10 text-2xl font-semibols uppercase my-5">Power</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>

        <div className="">
          <IoHeartOutline className="h-40 w-40 text-orange-600" />
          <p className="mr-10 text-2xl font-semibols uppercase my-5">Love</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>

        <div className="">
          <IoBriefcaseOutline className="h-40 w-40 text-orange-600" />
          <p className="mr-10 text-2xl font-semibols uppercase my-5">
            Job Done
          </p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>

        <div className="">
          <IoBulbOutline className="h-40 w-40 text-orange-600" />
          <p className="mr-10 text-2xl font-semibols uppercase my-5">
            Innovative
          </p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>

        <div className="">
          <IoGameControllerOutline className="h-40 w-40 text-orange-600" />

          <p className="mr-10 text-2xl font-semibols uppercase my-5">Games</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>

        <div className="">
          <IoBookOutline className="h-40 w-40 text-orange-600" />

          <p className="mr-10 text-2xl font-semibols uppercase my-5">
            eDUCATION
          </p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
