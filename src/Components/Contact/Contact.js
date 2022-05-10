import map from "../../images/map.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="contact" className="bg-gray-200 ">
      <h1 className="text-center text-gray-700 text-3xl font-semibold uppercase pt-20">
        contact
      </h1>
      <div
        data-aos="fade-up"
        className="md:grid grid-cols-3 items-center mt-5 mb-5 px-10"
      >
        <div className=" text-gray-600 font-semibold mb-20 flex flex-col gap-2">
          <p>Contact me and i will get back to you within 24 hours</p>
          <p>Kwara Nigeria</p>
          <p>09121488365</p>
          <p>muhammaduljamih@gmail.com</p>
        </div>

        <form action="" className="md:col-span-2 md:ml-20">
          <div className="flex gap-4 justify-center ">
            <input
              type="text"
              placeholder="Name"
              className="form border border-gray-300 rounded  outline-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className=" form border border-gray-300 rounded outline-blue-300"
              required
            />
          </div>

          <div className="mt-5 te">
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Comment"
              required
              className=" form2 border border-gray-300 rounded  outline-blue-300 "
            ></textarea>
          </div>
          <div className="flex justify-end mt-10 ">
            <button className="border bg-white border-gray-400 px-5 py-1 hover:bg-gray-200  rounded">
              Send
            </button>
          </div>
        </form>
      </div>
      <div data-aos="zoom-in" className="pb-10">
        <img src={map} alt="" className="max-w-screen" />
      </div>
    </div>
  );
};

export default Contact;
