"use client";
import DashboardTable from "@/Components/DashboardTable";
import {
  FaWallet,
  FaShoppingCart,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

export default function BuyerDashboard() {
  const buyerInfo = {
    name: "Mahmud Hasan",
    uid: "BUY-X7K9M2",
    mobile: "01712345678",
    joinDate: "15 Jan 2024",
    verificationStatus: "Verified", // Verified, Pending, Not Verified
  };

  const walletInfo = {
    balance: 25500,
    pending: 5000,
    lastTransaction: "+৳2,000",
    transactionType: "deposit", // deposit or withdraw
  };

  const orderStats = {
    totalOrders: 45,
    completedOrders: 38,
    pendingOrders: 5,
    cancelledOrders: 2,
    totalSpent: 125000,
    thisMonthOrders: 12,
  };

  return (
    <div className="mt-20 md:mt-14 lg:mt-0">
      {/* Welcome Section with User Info */}
      <div className="bg-gradient-to-r from-[#10B981] to-green-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row  items-start sm:items-center space-x-4">
            {/* User Avatar */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-[#10B981] text-2xl" />
            </div>

            {/* User Details */}
            <div>
              <h2 className="text-2xl font-bold">Welcome, {buyerInfo.name}!</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
                <span className="text-green-100 text-sm">
                  UID: {buyerInfo.uid}
                </span>
                <span className="text-green-100 text-sm">
                  {buyerInfo.mobile}
                </span>
                {/* <span className="bg-white/20 px-2 py-1 rounded text-xs inline-block mt-1 sm:mt-0">
                  {buyerInfo.verificationStatus === "Verified" ? "✅ Verified" : "⏳ " + buyerInfo.verificationStatus}
                </span> */}
              </div>
            </div>
          </div>

          {/* Member Since */}
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-green-100 text-sm">Member Since</p>
            <p className="text-xl font-semibold">{buyerInfo.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold ">Wallet balance</h1>
          <p className="text-4xl font-bold ">$25000</p>
        </div>
        <div>
          <button className="primary_btn">
            add money
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 ">
          <div>
            <h1 className="text-xl font-normal capitalize ">Active Orders</h1>
            <p className="text-3xl font-semibold ">10</p>
          </div>
        </div>

           <div className="bg-white rounded-lg shadow p-6 ">
          <div>
            <h1 className="text-xl font-normal capitalize ">pending Orders</h1>
            <p className="text-3xl font-semibold ">3</p>
          </div>
        </div>


           <div className="bg-white rounded-lg shadow p-6 ">
          <div>
            <h1 className="text-xl font-normal capitalize ">compleated Orders</h1>
            <p className="text-3xl font-semibold ">4</p>
          </div>
        </div>

           <div className="bg-white rounded-lg shadow p-6 ">
          <div>
            <h1 className="text-xl font-normal capitalize ">disputted Orders</h1>
            <p className="text-3xl font-semibold ">1</p>
          </div>
        </div>
      </div>

      {/* my purchase */}
       <DashboardTable></DashboardTable>

      {/* Additional Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Spent Card */}
        <div className="bg-white rounded-lg shadow p-6 text-gray-500">
          <h3 className="text-sm font-medium">Total Spent</h3>
          <p className="text-3xl font-bold mt-2">
            ${orderStats.totalSpent.toLocaleString()}
          </p>
          <p className="text-xs mt-2">Lifetime purchases</p>
        </div>

        {/* Average Order Value */}
        <div className="bg-white shadow rounded-lg p-6 text-gray-500">
          <h3 className=" text-sm font-medium">Average Order Value</h3>
          <p className="text-3xl font-bold mt-2">
            $
            {Math.round(
              orderStats.totalSpent / orderStats.totalOrders
            ).toLocaleString()}
          </p>
          <p className=" text-xs mt-2">Per transaction</p>
        </div>
      </div>
    </div>
  );
}
