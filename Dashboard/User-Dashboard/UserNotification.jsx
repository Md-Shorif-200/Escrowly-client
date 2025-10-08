
import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingCart,
  FaClock,
  FaGift,
  FaUserShield,
  FaTruck,
  FaBell,
  FaCommentDots,
  FaWallet,
} from "react-icons/fa";

export default function UserNotification() {
  const notifications = [
    {
      id: 1,
      icon: <FaShoppingCart className="text-green-500 text-2xl" />,
      title: "Your order #1245 has been successfully placed!",
      time: "2 minutes ago",
    },
    {
      id: 2,
      icon: <FaClock className="text-yellow-500 text-2xl" />,
      title: "Payment is under review. Please wait for confirmation.",
      time: "10 minutes ago",
    },
    {
      id: 3,
      icon: <FaTruck className="text-blue-500 text-2xl" />,
      title: "Your item has been shipped! Track your order for updates.",
      time: "25 minutes ago",
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-green-600 text-2xl" />,
      title: "Order #1245 delivered successfully. Thank you!",
      time: "1 hour ago",
    },
    {
      id: 5,
      icon: <FaGift className="text-pink-500 text-2xl" />,
      title: "You’ve earned a reward coupon for your next purchase!",
      time: "3 hours ago",
    },
    {
      id: 6,
      icon: <FaUserShield className="text-indigo-500 text-2xl" />,
      title: "KYC Verification approved. You can now create selling posts.",
      time: "5 hours ago",
    },
    {
      id: 7,
      icon: <FaTimesCircle className="text-red-500 text-2xl" />,
      title: "Order #1223 was cancelled due to incomplete payment.",
      time: "Yesterday",
    },
    {
      id: 8,
      icon: <FaCommentDots className="text-cyan-500 text-2xl" />,
      title: "Seller replied to your inquiry regarding Game Account.",
      time: "Yesterday",
    },
    {
      id: 9,
      icon: <FaBell className="text-orange-500 text-2xl" />,
      title: "System maintenance scheduled for tonight at 12 AM.",
      time: "2 days ago",
    },
    {
      id: 10,
      icon: <FaWallet className="text-teal-500 text-2xl" />,
      title: "Wallet balance updated after successful refund.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Notifications
        </h2>

        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-sm transition bg-gray-50"
            >
              <div className="flex-shrink-0">{note.icon}</div>

              <div>
                <p className="text-gray-800 font-medium">{note.title}</p>
                <p className="text-sm text-gray-500 mt-1">{note.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
