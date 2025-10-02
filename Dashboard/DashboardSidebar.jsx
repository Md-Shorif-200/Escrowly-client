"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaBox,
  FaStore,
  FaUser,
  FaBell,
  FaWallet,
  FaChartBar,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaIdCard,
  FaHistory,
  FaComments,
  FaShoppingCart
} from 'react-icons/fa';

export default function DashboardSidebar() {
  const role = 'seller'; // এটা পরে dynamic হবে
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Role অনুযায়ী menu items with paths
  const getMenuItems = () => {
    if (role === 'seller') {
      return [
        { name: 'Dashboard', icon: FaHome, path: '/dashboard' },
        // { name: 'My Store', icon: FaStore, path: '/dashboard/store' },
        { name: 'Create Orders', icon: FaBox, path: '/dashboard/create-orders' },
        { name: 'My Orders', icon: FaShoppingCart, path: '/dashboard/my-orders' },
        // { name: 'Wallet', icon: FaWallet, path: '/dashboard/wallet' },
        // { name: 'Analytics', icon: FaChartBar, path: '/dashboard/analytics' },
        // { name: 'Messages', icon: FaComments, path: '/dashboard/messages' },
        // { name: 'Transaction History', icon: FaHistory, path: '/dashboard/transactions' },
        // { name: 'KYC Verification', icon: FaIdCard, path: '/dashboard/kyc' },
        // { name: 'Profile', icon: FaUser, path: '/dashboard/profile' },
        // { name: 'Notifications', icon: FaBell, path: '/dashboard/notifications' }
      ];
    }

    return [];
  };

  const menuItems = getMenuItems();

  // Check if current path is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Menu Button and Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaBars className="text-xl text-gray-700" />
            </button>
            <span className="text-[#10B981] text-2xl font-bold">Escrowly</span>
          </div>

          {/* User Avatar or Profile (Optional) */}
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FaBell className="text-xl text-gray-700" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar - Full height with internal scroll */}
      <div className="hidden lg:flex flex-col w-64 h-full bg-white shadow-xl">
        {/* Header - Fixed */}
        <div className="px-6 pt-4 pb-4 ">
          <div className="flex items-center space-x-3">
            <span className="text-[#10B981] text-3xl font-bold">Escrowly</span>
          </div>
      
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link href={item.path} key={index}>
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


      </div>

      {/* Mobile Sidebar - Slide from left */}
      <div className={`lg:hidden fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 z-50 w-72 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Header with Close Button */}
        <div className="px-4 py-3  bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-[#10B981] text-2xl font-bold">Escrowly</span>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>

        </div>



        {/* Menu Items - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link href={item.path} key={index}>
                <div
                  onClick={() => setIsSidebarOpen(false)}
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