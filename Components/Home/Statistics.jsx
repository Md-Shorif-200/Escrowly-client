import Container from "@/components/Shared/Container";
import Image from "next/image";

const HERO_IMAGE_PATH = "/newLife.png";

export default function Statistics() {
  return (
    <main className=" my-24 text-white">
      <Container>
        <div className="bg-[#13544E] lg:flex gap-10 items-center p-4 sm:px-6 md:p-8 lg:p-10 rounded-lg">
          <div className="w-full lg:w-[60%]">
            <h2 className="text-base sm:text-lg font-bold ">Explore New Life</h2>

            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold mt-4 ">
              Don't just find. Be found put your CV in front of great employers
            </h1>

            <p className="text-sm lg:text-base text-gray-200 my-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>

            <div className="pt-4">
              <button className="flex items-center justify-center bg_color hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300  cursor-pointer">
                Job Post Now →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <StatCard value="950M+" label="Total Freelancers" />
              <StatCard value="32M+" label="Total Freelancers" />
              <StatCard value="120M+" label="Total Freelancers" />
            </div>
          </div>

          <div className="w-full  lg:w-[40%] h-[300px] lg:h-[400px] relative rounded-xl overflow-hidden shadow-2xl mt-6 ">
            <Image
              src={HERO_IMAGE_PATH}
              alt="Team members discussing work with a world map background"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg flex-1  w-full text-center">
      <p className="text-2xl sm:text-3xl font-bold">{value}</p>
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
};
