
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaHeart, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";


const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Service Image Section */}
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />

        <div className="absolute top-3 right-3 p-1.5 bg-white/70 rounded-full cursor-pointer shadow-md">
          <FaHeart></FaHeart>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-green-600">{service.price}</p>
          <div className="flex items-center text-sm text-gray-600">
            <FaStarHalfAlt></FaStarHalfAlt>
            <span className="font-semibold mr-1">{service.rating}</span>
            <span className="text-gray-400">({service.reviews})</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {service.title}
        </h3>
      </div>
    </div>
  );
};


export default function ServiceCardSweper({servicesData}) {
  return (
       <Swiper
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper !pb-10"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="!bg-transparent">
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
  )
}
