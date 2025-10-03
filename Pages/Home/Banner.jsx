"use client";
import Image from "next/image";
import Container from "@/Components/Shared/Container";

// If the image is in the public folder, you don't need import.
// Just use: <Image src="/banner.svg" ... />
import img_1 from "../../public/banner.svg";  

export default function Banner() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-[#F6FBFF] text-gray-800 pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-3">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold capitalize text-gray-900 text-center md:text-start">
              Secure online transactions with escrow
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 text-center md:text-start">
              Millions of people use our platform to turn their ideas into reality.
            </p>
            
            <div className="w-full flex justify-center md:justify-start">
               <button className="mt-8 bg-[#10B981] hover:bg-green-600 text-white font-bold px-6 py-2 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            </div>
          </div>

          {/* Right Section: Banner Image */}
          <div className="w-[80%]  mx-auto flex justify-center  mt-10">
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
