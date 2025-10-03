"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaBox,
  FaUser,
  FaBell,
  FaWallet,
  FaBars,
  FaTimes,
  FaIdCard,
  FaHistory,
  FaComments,
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMoneyBillWave,
} from 'react-icons/fa';

export default function DashboardSidebar() {
  // Demoর জন্য role পরিবর্তন করার ব্যবস্থা। পরে এটা user session থেকে আসবে।
  const [role, setRole] = useState('buyer'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // কোন Parent মেনু খোলা আছে তা ট্র্যাক করার জন্য state
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();

  // Role অনুযায়ী Parent ও Child সহ menu items
  const getMenuItems = (currentRole) => {
    const baseItems = [
      { name: 'Dashboard', icon: FaHome, path: '/dashboard' },
    ];
    
    // Seller Menu
    if (currentRole === 'buyer') {
      return [
        ...baseItems,
        {
          name: 'Orders',
          icon: FaShoppingCart,
          children: [
            { name: 'Create Order', path: '/dashboard/create-orders' },
            { name: 'My Orders', path: '/dashboard/my-orders' },
          ],
        },
        {
          name: 'Wallet',
          icon: FaWallet,
          children: [
            { name: 'Withdraw', path: '/dashboard/wallet/withdraw' },
            { name: 'Transaction History', path: '/dashboard/wallet/history' },
          ],
        },
        {
          name: 'Account',
          icon: FaUser,
          children: [
            { name: 'Profile', path: '/dashboard/profile' },
            { name: 'KYC Verification', path: '/dashboard/kyc' },
          ],
        },
        { name: 'Messages', icon: FaComments, path: '/dashboard/messages' },
        { name: 'Home', icon: FaHome, path: '/' },
      ];
    }

    // Buyer Menu
    if (currentRole === 'seller') {
      return [
        ...baseItems,
        {
          name: 'Orders',
          icon: FaShoppingCart,
          children: [
            { name: 'Create Order', path: '/dashboard/create-order' },
            { name: 'My Purchases', path: '/dashboard/my-purchases' },
          ],
        },
        {
          name: 'Wallet',
          icon: FaWallet,
          children: [
            { name: 'Add Money', path: '/dashboard/wallet/add-money' },
            { name: 'Transaction History', path: '/dashboard/wallet/history' },
          ],
        },
        {
          name: 'Account',
          icon: FaUser,
          children: [
            { name: 'Profile', path: '/dashboard/profile' },
            { name: 'KYC Verification', path: '/dashboard/kyc' },
          ],
        },
        { name: 'Messages', icon: FaComments, path: '/dashboard/messages' },
        { name: 'Home', icon: FaHome, path: '/' },
      ];
    }

    return [];
  };

  const menuItems = getMenuItems(role);
  
  // Parent মেনুতে ক্লিক করার ফাংশন
  const handleMenuClick = (menuName) => {
    setOpenMenus(prevOpenMenus => ({
      ...prevOpenMenus,
      [menuName]: !prevOpenMenus[menuName],
    }));
  };

  // Reusable Menu Rendering Component
  const RenderMenuItems = ({ onLinkClick }) => {
    // Check if current path is active
    const isActive = (path) => pathname === path;
    
    // Check if any child path is active
    const isParentActive = (item) => 
        item.children && item.children.some(child => isActive(child.path));

    return (
      <nav className="flex-1 overflow-y-auto p-4 space-y-3"> {/* গ্যাপ বৃদ্ধি করা হয়েছে */}
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isMenuOpen = !!openMenus[item.name];

          // Parent Menu Item
          if (item.children) {
            return (
              <div key={index}>
                <div
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
                    ${isParentActive(item) 
                      ? 'bg-gray-200 text-[#10B981]' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#10B981]'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {/* Child Menu Items */}
                {isMenuOpen && (
                  <div className="pl-8 mt-2 space-y-2"> {/* গ্যাপ ও ಇಂಡೆಂಟేସన్ বৃদ্ধি */}
                    {item.children.map((child, childIndex) => {
                      return (
                        <Link href={child.path} key={childIndex} onClick={onLinkClick}>
                          <div
                            className={`px-4 py-2.5 rounded-lg transition-colors cursor-pointer
                              ${isActive(child.path) 
                                ? 'bg-[#10B981] text-white' 
                                : 'text-gray-600 hover:bg-gray-100'
                              }`}
                          >
                            {/* চাইল্ড আইকন সরিয়ে দেওয়া হয়েছে */}
                            <span className="font-normal text-sm">{child.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          
          // Single Menu Item
          return (
            <Link href={item.path} key={index} onClick={onLinkClick}>
              <div
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${isActive(item.path) 
                    ? 'bg-[#10B981] text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#10B981]'
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
      {/* Role Switcher - Demo Purpose */}  

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
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
              <span className="text-white text-sm font-bold">{role.charAt(0).toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 h-full bg-white shadow-xl">
        <div className="px-6 pt-4 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#10B981] text-3xl font-bold">Escrowly</span>
          </div>
        </div>
        <RenderMenuItems />
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 z-50 w-72 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-4 py-3 bg-white">
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

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Spacer for mobile top bar */}
      <div className="lg:hidden h-14"></div>
    </>
  );
}