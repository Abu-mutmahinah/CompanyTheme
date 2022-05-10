const Home = () => {
  return (
    <div
      id="Home"
      className="flex justify-center py-20 pt-40  bg-orange-600 sticky "
    >
      <div className="flex flex-col gap-4 text-center ">
        <h1 className="text-7xl text-white fonr-bold">Company</h1>
        <p className="text-xl text-white font-semibold">
          We specialize in blablabla
        </p>
        <div>
          <form action="" className="">
            <input
              className=" md:w-96 pr-5 px-2 py-1 outline-blue-300"
              type="email"
              placeholder="Enter your Email"
              required
            />
            <button className="bg-red-400 text-white ml-2 py-2 rounded px-2 mt-3 md:mt-0 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
