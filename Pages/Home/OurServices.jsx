

import SectionTitle from "@/Components/Shared/SectionTitle";
import Container from "@/Components/Shared/Container";

import ServiceCardSweper from "@/Components/ServiceCardSweper";

const img_1 = "/service.jpg";

const servicesData = [
  {
    title: "Quomodosof Agency for UI/UX Agency",
    price: "$30",
    rating: "5.0",
    reviews: "1k",
    image: img_1,
  },
  {
    title: "Nas Digital Agency Website Design",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "Brote - Cleaning Service Elementor",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "File Manager Cloud Storage App Design",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "Top Rated UI/UX Design Service",
    price: "$30",
    rating: "5.0",
    reviews: "1k",
    image: img_1,
  },
  {
    title: "Quomodosof Agency for UI/UX Agency",
    price: "$30",
    rating: "5.0",
    reviews: "1k",
    image: img_1,
  },
  {
    title: "Nas Digital Agency Website Design",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "Brote - Cleaning Service Elementor",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "File Manager Cloud Storage App Design",
    price: "$15",
    rating: "4.8",
    reviews: "2k",
    image: img_1,
  },
  {
    title: "Top Rated UI/UX Design Service",
    price: "$30",
    rating: "5.0",
    reviews: "1k",
    image: img_1,
  },
];



export default function OurServices() {
  return (
    <main className="mt-10 sm:mt-12 md:mt-14 lg:mt-20 xl:mt-24">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <SectionTitle>Our Services</SectionTitle>

          <div className="flex space-x-3 mt-6 xl:mt-3">
            <div className="swiper-button-prev !static !w-6 !h-6   !rounded-full !flex !items-center !justify-center cursor-pointer"></div>
            <div className="swiper-button-next !static !w-6 !h-6   !rounded-full !flex !items-center !justify-center cursor-pointer"></div>
          </div>
        </div>

         <ServiceCardSweper servicesData={servicesData}></ServiceCardSweper>
      </Container>
    </main>
  );
}
