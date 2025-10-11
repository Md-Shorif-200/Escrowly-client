"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBell,
  FaWallet,
  FaBars,
  FaTimes,
  FaComments,
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
  FaStar,
} from "react-icons/fa";
import { MdDashboard ,MdVerified} from "react-icons/md";

import { BsShieldShaded } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";




export default function UserDashboardSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: MdDashboard, path: "/user-dashboard" },
    {
      name: "Orders",
      icon: FaShoppingCart,
      children: [
        { name: "Create Order", path: "/user-dashboard/create-orders" },
        { name: "Gaming Order", path: "/user-dashboard/gaming-order" },
        { name: "Selling Post", path: "/user-dashboard/selling-post" },
        { name: "My Purchases", path: "/user-dashboard/my-purchases" },
        { name: "My Sales", path: "/user-dashboard/my-sales" },
        
      ],
    },
    { name: "Kyc Verification", icon: MdVerified, path: "/user-dashboard/kyc-verification" },
    {
      name: "Buyer Wallet",
      icon: FaWallet,
      children: [
        { name: "Add Money", path: "/user-dashboard/buyer-wallet-addMoney" },
        { name: "Withdraw", path: "/user-dashboard/wallet/withdraw" },
      ],
    },
    
    { name: "Transaction History",icon: BsShieldShaded, path: "/user-dashboard/wallet/history" },
    
    {
      name: "Messages",
      icon: FaComments,
      children: [
        { name: "Chat", path: "/user-dashboard/profile" },
        // { name: "KYC Verification", path: "/user-dashboard/kyc" },
      ],
    },
    
    { name: "Dispute Center", icon: BsShieldShaded, path: "/" },
    { name: "Ratings & Review", icon: FaStar, path: "/" },
    { name: "Settings", icon: IoSettingsSharp, path: "/" },
    { name: "Home", icon: FaHome, path: "/" },


  ];

  useEffect(() => {
    const activeParent = menuItems.find(item => 
      item.children && item.children.some(child => child.path === pathname)
    );
    if (activeParent) {
      setOpenMenus(prev => ({ ...prev, [activeParent.name]: true }));
    }
  }, [pathname]);

  const handleMenuClick = (menuName) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuName]: !prevOpenMenus[menuName],
    }));
  };

  const RenderMenuItems = ({ onLinkClick }) => {
    const isActive = (path) => pathname === path;
    const isParentActive = (item) =>
      item.children && item.children.some((child) => isActive(child.path));

    return (
      <nav className="flex-1 overflow-y-auto p-4 space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isMenuOpen = !!openMenus[item.name];

          if (item.children) {
            return (
              <div key={index}>
                <div
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
                    ${
                      isParentActive(item)
                        ? "text-[#10B981]"
                        : " hover:bg-gray-100 hover:text-[#10B981]"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isMenuOpen && (
                  <div className="pl-8 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <Link href={child.path} key={childIndex} onClick={onLinkClick}>
                        <div
                          className={`px-4 py-2.5 rounded-lg transition-colors cursor-pointer
                            ${
                              isActive(child.path)
                                ? "text-[#10B981] font-semibold"
                                : " hover:bg-gray-100 hover:text-[#10B981]"
                            }`}
                        >
                          <span className="font-normal text-sm">{child.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          
          return (
            <Link href={item.path} key={index} onClick={onLinkClick}>
              <div
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${
                    isActive(item.path)
                      ? "text-[#10B981] font-semibold"
                      : " hover:bg-gray-100 hover:text-[#10B981]"
                  }`}
              >
                <Icon className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    );
  };

  return (
    <>
   
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-primary shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaBars className="text-xl text-gray-700" />
            </button>
            <span className="text-[#10B981] text-2xl font-bold">Escrowly</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FaBell className="text-xl text-gray-700" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
              <span className="text-white text-sm font-bold">B</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-64 h-screen bg-primary shadow-xl fixed top-0 left-0 z-30"> {/* <-- KEY CHANGE */}
        <div className="px-6 pt-4 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#10B981] text-3xl font-bold">Escrowly</span>
          </div>
        </div>
        <RenderMenuItems />
      </div>

     
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-primary shadow-xl transition-transform duration-300 z-50 w-72 flex flex-col
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 py-3 bg-primary">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-[#10B981] text-2xl font-bold">Escrowly</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
        <RenderMenuItems onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

  
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


      <div className="lg:hidden h-14"></div>
    </>
  );
}