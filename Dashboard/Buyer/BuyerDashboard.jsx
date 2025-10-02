"use client"
import { FaWallet, FaShoppingCart, FaCheckCircle, FaClock, FaUser, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function BuyerDashboard() {
  const buyerInfo = {
    name: "Mahmud Hasan",
    uid: "BUY-X7K9M2",
    mobile: "01712345678",
    joinDate: "15 Jan 2024",
    verificationStatus: "Verified" // Verified, Pending, Not Verified
  };

  const walletInfo = {
    balance: 25500,
    pending: 5000,
    lastTransaction: "+৳2,000",
    transactionType: "deposit" // deposit or withdraw
  };

  const orderStats = {
    totalOrders: 45,
    completedOrders: 38,
    pendingOrders: 5,
    cancelledOrders: 2,
    totalSpent: 125000,
    thisMonthOrders: 12
  };

  return (
    <div className="p-4 lg:p-0">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Buyer Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's your account overview</p>
      </div>

      {/* Welcome Section with User Info */}
      <div className="bg-gradient-to-r from-[#10B981] to-green-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            {/* User Avatar */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-[#10B981] text-2xl" />
            </div>
            
            {/* User Details */}
            <div>
              <h2 className="text-2xl font-bold">Welcome, {buyerInfo.name}!</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
                <span className="text-green-100 text-sm">UID: {buyerInfo.uid}</span>
                <span className="text-green-100 text-sm">{buyerInfo.mobile}</span>
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

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Wallet Balance Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaWallet className="text-[#10B981] text-xl" />
            </div>
            <div className={`flex items-center text-sm ${
              walletInfo.transactionType === 'deposit' ? 'text-green-600' : 'text-red-600'
            }`}>
              {walletInfo.transactionType === 'deposit' ? 
                <FaArrowUp className="mr-1" /> : 
                <FaArrowDown className="mr-1" />
              }
              {walletInfo.lastTransaction}
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Wallet Balance</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">৳{walletInfo.balance.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-2">Pending: ৳{walletInfo.pending.toLocaleString()}</p>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FaShoppingCart className="text-blue-600 text-xl" />
            </div>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              +{orderStats.thisMonthOrders} this month
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{orderStats.totalOrders}</p>
          <div className="flex items-center space-x-2 mt-2">
          
           
          </div>
        </div>

        {/* Completed Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <span className="text-2xl font-bold text-green-600">
              {orderStats.completedOrders}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Completed Orders</h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">Success Rate</span>
            <span className="text-sm font-semibold text-green-600">
              {Math.round((orderStats.completedOrders/orderStats.totalOrders)*100)}%
            </span>
          </div>
        </div>

        {/* Pending Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <FaClock className="text-yellow-600 text-xl" />
            </div>
            <span className="text-2xl font-bold text-yellow-600">
              {orderStats.pendingOrders}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Pending Orders</h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">Cancelled</span>
            <span className="text-sm font-semibold text-red-600">
              {orderStats.cancelledOrders}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Total Spent Card */}
        <div className="bg-white rounded-lg shadow p-6 text-gray-500">
          <h3 className="text-sm font-medium">Total Spent</h3>
          <p className="text-3xl font-bold mt-2">৳{orderStats.totalSpent.toLocaleString()}</p>
          <p className="text-xs mt-2">Lifetime purchases</p>
        </div>

        {/* Average Order Value */}
        <div className="bg-white shadow rounded-lg p-6 text-gray-500">
          <h3 className=" text-sm font-medium">Average Order Value</h3>
          <p className="text-3xl font-bold mt-2">
            ৳{Math.round(orderStats.totalSpent/orderStats.totalOrders).toLocaleString()}
          </p>
          <p className=" text-xs mt-2">Per transaction</p>
        </div>

   
      </div>
    </div>
  );
}