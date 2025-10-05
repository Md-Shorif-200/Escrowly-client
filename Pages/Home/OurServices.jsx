
import Image from "next/image";
import SectionTitle from "@/Components/Shared/SectionTitle";
import Container from "@/Components/Shared/Container";
import Link from "next/link";

const img = "/service.jpg";
const img_2 = "/service-2.jpg";
const img_3 = "/service-3.jpg";
const img_4 = "/service-4.jpg";
const img_5 = "/service-5.jpg";
const img_6 = "/service-6.jpg";

const seller_profile_img = "/sellerProfile.jpg";

const servicesdata = [
  {
    id: 1,
    name: "Saad Arshad",
    rating: 5.0,
    reviews: 19,
    bio: "Building Scalable Web Apps and...",
    Card_image: img,
    title: "Full Stack Website Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 2,
    name: "Ali Khan",
    rating: 4.9,
    reviews: 22,
    bio: "Expert in Mobile and Web Appsfsdfdsfsdfdfsdfsdfsdfdofjdflkdjlkfdf",
    Card_image: img_2,
    title: "Mobile App Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 3,
    name: "Sara Ahmed",
    rating: 4.8,
    reviews: 15,
    bio: "Creating Scalable Backend Systems",
    Card_image: img_3,
    title: "Backend Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 4,
    name: "Bilal Tariq",
    rating: 5.0,
    reviews: 30,
    bio: "Frontend Developer and UI/UX Designer",
    Card_image: img_4,
    title: "Frontend & UI Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 5,
    name: "Ayesha Siddiqui",
    rating: 4.7,
    reviews: 18,
    bio: "Specialist in eCommerce Solutions",
    Card_image: img_5,
    title: "eCommerce Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 6,
    name: "Hassan Riaz",
    rating: 4.9,
    reviews: 25,
    bio: "Cross-Platform Mobile App Developer",
    Card_image: img_6,
    title: "Cross-Platform Apps",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 7,
    name: "Fatima Noor",
    rating: 4.8,
    reviews: 20,
    bio: "Building Scalable Web Apps",
    Card_image: img,
    title: "Full Stack Web Apps",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 8,
    name: "Omar Farooq",
    rating: 5.0,
    reviews: 12,
    bio: "React and Node.js Specialist",
    Card_image: img,
    title: "MERN Stack Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 9,
    name: "Nida Khan",
    rating: 4.9,
    reviews: 14,
    bio: "iOS and Android App Developer",
    Card_image: img,
    title: "Mobile App Development",
    seller_profile_img: seller_profile_img,
  },
  {
    id: 10,
    name: "Zain Malik",
    rating: 4.8,
    reviews: 17,
    bio: "Web Developer with UI/UX Expertise",
    Card_image: img,
    title: "Web Design & Development",
    seller_profile_img: seller_profile_img,
  },
];

export default function OurServices() {
  return (
    <main className="mt-10 sm:mt-12 md:mt-14 lg:mt-20 xl:mt-24">
      <Container>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <SectionTitle>Our Services</SectionTitle>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesdata?.slice(0,6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform  duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Top Section: Card Image */}
              <div className="relative w-full h-64">
                <Image
                  src={service.Card_image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold capitalize px-4 py-2 ">
                {service.title}
              </h2>

              {/* Profile Section */}
              <div className="flex items-center px-4 py-1">
                {/* Profile Picture */}
                <div className="w-16 h-16 relative rounded-full overflow-hidden  ">
                  <Image
                    src={service.seller_profile_img}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Profile Info */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-base font-semibold text-gray-800">
                    {service.name}
                  </h3>
                  <div className="flex items-center mt-0.5">
                    <span className="font-bold mr-1 text-sm">
                      ★ {service.rating}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({service.reviews})
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-1 truncate">
                    {service.bio.slice(0, 30)}...
                  </p>
                </div>
              </div>

              {/* Details Button */}
              <div className=" p-4 flex justify-end ">
                <Link href={`/services/${service.id}`} className="secondary_btn ">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
