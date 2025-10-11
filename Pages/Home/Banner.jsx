"use client";
import Image from "next/image";
import Container from "@/components/Shared/Container";


import img_1 from "../../public/banner.svg";  

export default function Banner() {
  return (
    <div className=" w-full bg-[#F6FBFF] min-h-screen md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[85vh] flex items-center pt-20 sm:pt-24">
      <Container>
        <div className="md:grid grid-cols-12 items-center   ">
          {/* Left Section */}
          <div className="  md:col-span-6 lg:col-span-7">
            <h1 className="text_hero  font-bold capitalize text_secondary_color text-center md:text-start">
              Secure online transactions with escrow
            </h1>

            <p className="mt-4 paragrap text-center md:text-start">
              Millions of people use our platform to turn their ideas into reality.
            </p>
            
            <div className="w-full flex justify-center md:justify-start">
               <button className="mt-8 bg-[#10B981] hover:bg-green-600 text-white font-bold px-6 py-2 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            </div>
          </div>

          {/* Right Section: Banner Image */}
          <div className=" w-[80%] sm:w-[70%] md:w-[90%] mx-auto md:col-span-6 lg:col-span-5 mt-8 lg:mt-0">
            <Image
              src={img_1}
              alt="Escrow banner"
              width={600}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
