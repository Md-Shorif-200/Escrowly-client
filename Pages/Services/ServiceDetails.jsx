
import Image from "next/image";
import {
  FaStar,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaUserFriends,
  FaTrophy,
} from "react-icons/fa";
import { FiMessageSquare, FiAward, FiZap } from "react-icons/fi";
import { HiOutlineLocationMarker, HiBadgeCheck } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

export default function ServiceDetails({ servicesdata, serviceId }) {
  const service = servicesdata.find((s) => s.id === parseInt(serviceId));

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      name: "John Anderson",
      avatar: service.seller_profile_img,
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Exceptional work! The website exceeded my expectations. Very professional and responsive throughout the project.",
      country: "United States",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      avatar: service.seller_profile_img,
      rating: 5,
      date: "1 month ago",
      comment:
        "Great communication and delivered on time. The design is modern and exactly what I was looking for.",
      country: "Canada",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Services
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Header */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>

              {/* Seller Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={service.seller_profile_img}
                      alt={service.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                      <HiBadgeCheck className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">
                        {service.name}
                      </p>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        PRO
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-amber-400 w-4 h-4" />
                        <span className="font-bold text-gray-900">
                          {service.rating}
                        </span>
                        <span className="text-gray-500 text-sm">
                          ({service.reviews})
                        </span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <HiOutlineLocationMarker className="w-4 h-4" />
                        United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 pt-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                    <FiAward className="w-4 h-4" />
                    <span className="text-sm">Orders</span>
                  </div>
                  <p className="font-bold text-lg text-gray-900">248</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                    <BiTime className="w-4 h-4" />
                    <span className="text-sm">Delivery</span>
                  </div>
                  <p className="font-bold text-lg text-gray-900">3 Days</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                    <FiMessageSquare className="w-4 h-4" />
                    <span className="text-sm">Response</span>
                  </div>
                  <p className="font-bold text-lg text-gray-900">1 Hour</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                    <FaTrophy className="w-4 h-4" />
                    <span className="text-sm">Rating</span>
                  </div>
                  <p className="font-bold text-lg text-gray-900">
                    {service.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Single Image */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src={service.Card_image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to my professional web development service! I specialize
                in creating high-performance, visually stunning, and fully
                responsive websites using modern tools and frameworks.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                What I Offer:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  Custom-built websites tailored to your brand and goals.
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  Responsive layouts that look great on all devices.
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  SEO-optimized structure for better rankings.
                </li>
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-4 h-4" />
                  ))}
                  <span className="font-bold">{service.rating}</span>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {review.name}
                        </p>
                        <p className="text-gray-500 text-sm mb-1">
                          {review.country} • {review.date}
                        </p>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Price Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Standard Package
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$499</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-gray-400 w-5 h-5" />
                  <span className="text-gray-700">5 Days Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiAward className="text-gray-400 w-5 h-5" />
                  <span className="text-gray-700">4 Revisions</span>
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                Continue ($499)
              </button>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-emerald-500 w-5 h-5" />
                  <span className="text-sm text-gray-700">
                    Money Back Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiZap className="text-emerald-500 w-5 h-5" />
                  <span className="text-sm text-gray-700">
                    Fast & Reliable Delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserFriends className="text-emerald-500 w-5 h-5" />
                  <span className="text-sm text-gray-700">
                    24/7 Customer Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
