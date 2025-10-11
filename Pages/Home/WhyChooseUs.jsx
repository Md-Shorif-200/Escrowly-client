import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import Image from "next/image";
import { FaShieldAlt, FaWallet } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-500" />,
      title: "Secure Escrow System",
      description:
        "Your funds are held securely in escrow until both buyer and seller are satisfied, ensuring a risk-free transaction every time.",
    },
    {
      icon: <FaWallet className="h-8 w-8 text-green-500" />,
      title: "Integrated Wallet System",
      description:
        "Easily add funds, pay for orders, receive payments, and withdraw your earnings with our seamless and transparent wallet.",
    },
    {
      icon: <FiMessageSquare className="h-8 w-8 text-yellow-500" />,
      title: "Dispute & Chat System",
      description:
        "Communicate directly with other parties and our admin team. If issues arise, our dispute system ensures a fair resolution.",
    },
  ];

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Image Section */}
          <div className="flex items-center justify-center h-full">
            <div className="overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:shadow-blue-200 w-full h-full">
              <Image
                src="/whyChooseUs.png"
                alt="A visual representation of platform security and user dashboard"
                width={500}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-3 h-full">
            <SectionTitle>Why Choose us</SectionTitle>

            <p className="paragrap ">
              We've built our platform from the ground up with your security and
              convenience in mind. See why thousands of users trust us for their
              online dealings.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row  items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex-shrink-0 bg-blue-100/50 rounded-full p-3 ">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text_small font-semibold text_secondary_color">
                      {feature.title}
                    </h3>
                    <p className="mt-1 sub_title ">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
