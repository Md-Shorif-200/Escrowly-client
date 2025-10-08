"use client";

import { useNavbarEffects } from "@/CustomHooks/useNavbarEffects";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Container from "../Shared/Container";
import { usePathname } from "next/navigation";
import useAuth from "@/CustomHooks/useAuth";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

import useToastNotification from "@/CustomHooks/useToastNotification";
import { MdDashboard } from "react-icons/md";

export default function NavbarClient() {
  const { isScrolled, isSidebarOpen, toggleSidebar } = useNavbarEffects();
  const pathname = usePathname();
  const { user, logOut } = useAuth();

  const applyScrollEffect = pathname === "/";
  const { successToast, errorToast, confirmToast } = useToastNotification();

  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);


    const handleLogout = () => {
      confirmToast("Are you sure you want to log out?", async () => {
        try {
          await logOut();
          successToast("Logged out successfully!");
        } catch (err) {
          errorToast("Logout failed!");
        }
      });
    };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          applyScrollEffect
            ? isScrolled
              ? "bg-white text-[#545454] shadow-md py-4"
              : "bg-transparent text-black py-4"
            : "bg-white text-[#545454] shadow-sm py-4"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Menu Icon + Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-xl p-2"
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-extrabold">Escrowly</span>
              </Link>
            </div>

            {/* Middle: Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-[#10B981] transition-colors">
                Home
              </Link>
              <Link href="" className="hover:text-[#10B981] transition-colors">
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-[#10B981] transition-colors"
              >
                Services
              </Link>
            </div>

            {/* Right: User or Auth Buttons */}
            <div className="flex items-center space-x-8">
              <Link
                href="/seller"
                className="hidden md:block text-sm font-medium hover:text-[#10B981] transition-colors"
              >
                Become a Seller
              </Link>

              <div className="relative" ref={dropdownRef}>
                {user ? (
                  <>
                    <FaUserCircle
                      className="text-3xl cursor-pointer"
                      onClick={toggleDropdown}
                    />

                    {isDropdownOpen && (
             <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-md border border-gray-200 z-50">
  <Link
    href="/user-dashboard"
    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
    onClick={() => setIsDropdownOpen(false)}
  >
    <MdDashboard className="text-[#10B981]" />
    <span>Dashboard</span>
  </Link>

  <Link
    href="/profile"
    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
    onClick={() => setIsDropdownOpen(false)}
  >
    <FaUser className="text-[#10B981]" />
    <span>Profile</span>
  </Link>

  <button
    onClick={() => {
      handleLogout();
      setIsDropdownOpen(false);
    }}
    className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
  >
    <FaSignOutAlt className="text-red-500" />
    <span>Logout</span>
  </button>
</div>

                    )}
                  </>
                ) : (
                  <div className="flex gap-6 items-center">
                    <Link
                      href="/log-in"
                      className="text-sm font-medium hover:text-[#10B981] transition-colors"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/register"
                      className="px-5 py-2 text-sm font-semibold rounded transition-colors hidden sm:block bg_color text-white"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out z-50 shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-gray-800">
                Escrowly
              </span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="text-xl p-2 text-gray-600 hover:text-gray-900"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="flex-grow px-2 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block w-full px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="block w-full px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block w-full px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-5 border-t border-gray-200 space-y-4">
            <Link
              href="/seller"
              className="block w-full text-center px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={toggleSidebar}
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
