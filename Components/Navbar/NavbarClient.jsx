"use client";

import { useNavbarEffects } from "@/CustomHooks/useNavbarEffects";
import Link from "next/link";
import React from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Container from "../Shared/Container";

export default function NavbarClient() {
  const { isScrolled, isSidebarOpen, toggleSidebar } = useNavbarEffects();

  const NavLinkWithDropdown = ({ title }) => (
    <Link
      href="#"
      className="flex items-center space-x-1 hover:text-[#10B981] transition-colors"
    >
      <span className="font-medium text-sm">{title}</span>
      <FaChevronDown className="text-xs" />
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-[#545454] shadow-lg py-4"
            : "bg-transparent text-white py-4"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left side: Menu Icon (mobile) + Logo */}
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
              <Link
                href=""
                className="hover:text-[#10B981] transition-colors"
              >
                Home
              </Link>

                <Link
                href=""
                className="hover:text-[#10B981] transition-colors"
              >
                About
              </Link>

                <Link
                href=""
                className="hover:text-[#10B981] transition-colors"
              >
                Services
              </Link>
        
              <Link
                href="/dashboard"
                className="hover:text-[#10B981] transition-colors"
              >
                Dashboard
              </Link>
            </div>

            {/* Right side: Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/seller"
                className="hidden md:block text-sm font-medium hover:text-[#10B981] transition-colors"
              >
                Become a Seller
              </Link>
              <Link
                href="/log-in"
                className="text-sm font-medium hover:text-[#10B981] transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className={`px-5 py-2 text-sm font-semibold rounded transition-colors hidden sm:block ${
                  isScrolled
                    ? "bg_color text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
              >
                Register
              </Link>
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
          {/* Sidebar Header with Logo and Close Icon */}
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

          {/* Sidebar Navigation */}
          <nav className="flex-grow px-2 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  Serveices
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={toggleSidebar}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sidebar Footer */}
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
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}