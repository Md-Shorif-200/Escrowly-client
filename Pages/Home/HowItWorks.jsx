
import Container from "@/Components/Shared/Container";
import SectionTitle from "@/Components/Shared/SectionTitle";
import { FaUserCheck, FaClipboardList, FaLock, FaMoneyBillWave } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Register & Verify",
      description: "Create your account with mobile OTP & complete KYC verification to get started securely.",
      icon: <FaUserCheck className="text-3xl text-green-600" />,
    },
    {
      id: 2,
      title: "Create / Accept Order",
      description: "Buyers create new orders and sellers can accept them with transparent details.",
      icon: <FaClipboardList className="text-3xl text-blue-600" />,
    },
    {
      id: 3,
      title: "Secure Escrow Payment",
      description: "Payments are stored safely in Escrow until the order is successfully completed.",
      icon: <FaLock className="text-3xl text-purple-600" />,
    },
    {
      id: 4,
      title: "Order Complete & Withdraw",
      description: "Once the order is done, Seller gets payment instantly & Buyer confirms delivery.",
      icon: <FaMoneyBillWave className="text-3xl text-yellow-600" />,
    },
  ];

  return (
    <main className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
      <Container>
        <SectionTitle>
       <p className="mb-7 lg:mb-10">   How it works</p>
        </SectionTitle>
  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
          
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              <div className="mt-4 text-sm font-medium text-green-500">
                Step {step.id}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
