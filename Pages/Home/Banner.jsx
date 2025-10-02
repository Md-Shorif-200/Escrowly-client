
import { FaSearch } from "react-icons/fa";

const BannerImg = "/banner.jpg";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className=" md:text-center  px-4">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold capitalize">
          Hire the best freelancers for <br /> any job, online.
        </h1>

        {/* Sub text */}
        <p className="mt-4 text-xs sm:text-lg text-gray-200 capitalize">
          Millions of people use freeio.com to turn their ideas into reality.
        </p>

        <div className="mt-8  sm:rounded-lg shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-0 items-center overflow-hidden w-full ">
          <div className="  w-full sm:w-[80%] flex bg-white items-center px-3  sm:px-4 sm:py-3 text-gray-500   ">
            <FaSearch />

            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-3 py-3 outline-none text-gray-700 w-full "
            />
          </div>

          <button className=" w-full sm:w-[20%] h-full  bg-[#10B981] hover:bg-green-500 text-white px-6 py-3 sm:py-6 font-semibold mt-2 sm:mt-0 cursor-pointer">
            Search
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-200">
          Popular Searches: Designer, Developer, Web, IOS, PHP, Senior, Engineer
        </p>
      </div>
    </div>
  );
}
