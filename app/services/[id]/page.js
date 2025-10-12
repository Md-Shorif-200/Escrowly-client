import ServiceDetails from "@/components/Services/ServiceDetails";

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

export default async function  page({params}) {

     const {id} = await params;
     console.log(id);
     

  return (
    <div>
        <ServiceDetails servicesdata={servicesdata} serviceId={id}></ServiceDetails>
    </div>
  )
}
