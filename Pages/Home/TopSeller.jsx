import Link from "next/link";
import Container from "@/Components/Shared/Container";
import SectionTitle from "@/Components/Shared/SectionTitle";

const topSellersData = [
  {
    id: 1,
    name: "Sufankho Jhon",
    role: "UI/UX Designer",
    rating: 4.9,
    reviews: 399,
    hourlyRate: 90,
    imageSrc: "/sellerProfile.jpg",
  },
  {
    id: 2,
    name: "Sufankho Jhon",
    role: "UI/UX Designer",
    rating: 4.9,
    reviews: 399,
    hourlyRate: 90,
    imageSrc: "/sellerProfile.jpg",
  },
  {
    id: 3,
    name: "Sufankho Jhon",
    role: "UI/UX Designer",
    rating: 4.9,
    reviews: 399,
    hourlyRate: 90,
    imageSrc: "/sellerProfile.jpg",
  },
  {
    id: 4,
    name: "Sufankho Jhon",
    role: "UI/UX Designer",
    rating: 4.9,
    reviews: 399,
    hourlyRate: 90,
    imageSrc: "/sellerProfile.jpg",
  },
];

// --- Seller Card Component ---
function SellerCard({ seller }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-3 py-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative">
        <div className="absolute top-0 left-0 flex flex-col gap-2">
          <div className="bg-[#EDEBE7] p-1 text-center rounded-full   text-[8px] xl:text-[10px] ">
            Top Seller
          </div>

          <div className="bg-[#22BE0D] p-1 text-center rounded-full  text-[8px] xl:text-[10px] text-white">
            ${seller.hourlyRate}/hr
          </div>
        </div>

        <div className="flex justify-center ">
          <img
            src={seller.imageSrc}
            alt={seller.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">{seller.name}</h3>

          <p className="text-gray-500 text-xs mt-1">{seller.role}</p>

          <div className="flex justify-center items-center mt-1 gap-1">
            <span className="text-black text-base">★</span>
            <span className="text-gray-700 font-semibold">{seller.rating}</span>
            <span className="text-gray-500 text-sm">
              ({seller.reviews} Reviews)
            </span>
          </div>

          {/* View Profile Button */}
          <Link href={`/profile/${seller.id}`}>
            <button className="mt-4  bg-[#F7F5F0] text-gray-700 py-2 px-6 rounded-full font-medium hover:bg-[#10B981] hover:text-white cursor-pointer transition-colors duration-300">
              View Profile →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TopSeller() {
  return (
    <section className="pt-20 ">
      <Container>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <SectionTitle>Top Sellers</SectionTitle>
          </div>

          {/* View More Link */}
          <Link href="/sellers">
            <span className="text-[#22BE0D]  font-semibold cursor-pointer">
              View More →
            </span>
          </Link>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topSellersData.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </Container>
    </section>
  );
}
