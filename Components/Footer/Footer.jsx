"use client";
import React from "react";
import Container from "../Shared/Container";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-1">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">
                  Esc<span className="text_color">Rowly</span>
                </h2>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are dedicated to providing the best services and connecting
                talented professionals with clients worldwide. Your success is
                our priority.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-5 h-5 text_color" />
                  <span className="text-gray-400 text-sm">+1 234 567 8900</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text_color" />
                  <span className="text-gray-400 text-sm">
                    info@yourcompany.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text_color mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    123 Business Street, NY 10001
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/help"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/refund"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get updates on our latest offers!
              </p>

              <form className="mb-6">
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div>
                <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 YourCompany. All rights reserved. Designed
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Payment Gateway Icons */}
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div className="bg-white rounded px-2 py-1">
                  <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="white" />{" "}
                    <path
                      d="M20.5 20H17.5L19.5 12H22.5L20.5 20Z"
                      fill="#1A1F71"
                    />{" "}
                    <path
                      d="M31 12L28.5 17.5L28 12H25L27 20H30L34 12H31Z"
                      fill="#1A1F71"
                    />{" "}
                    <path d="M14 12L11 20H14L16 12H14Z" fill="#1A1F71" />{" "}
                    <path d="M36 12L34 20H37L39 12H36Z" fill="#1A1F71" />{" "}
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="bg-white rounded px-2 py-1">
                  <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                    {" "}
                    <rect width="48" height="32" rx="4" fill="white" />{" "}
                    <circle cx="19" cy="16" r="7" fill="#EB001B" />{" "}
                    <circle cx="29" cy="16" r="7" fill="#F79E1B" />{" "}
                    <path
                      d="M24 10.5C25.5 12 26.5 14 26.5 16C26.5 18 25.5 20 24 21.5C22.5 20 21.5 18 21.5 16C21.5 14 22.5 12 24 10.5Z"
                      fill="#FF5F00"
                    />{" "}
                  </svg>
                </div>

                {/* PayPal */}
                <div className="bg-white rounded px-2 py-1">
                  <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                    {" "}
                    <rect width="48" height="32" rx="4" fill="white" />{" "}
                    <path
                      d="M20 10H26C28 10 29 11 29 13C29 15 28 16 26 16H23V22H20V10Z"
                      fill="#003087"
                    />{" "}
                    <path
                      d="M25 16H28C29 16 30 17 30 18C30 19 29 20 28 20H25V16Z"
                      fill="#009CDE"
                    />{" "}
                  </svg>
                </div>
                {/* Stripe */}
                <div className="bg-white rounded px-2 py-1">
                  <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                    {" "}
                    <rect width="48" height="32" rx="4" fill="white" />{" "}
                    <path
                      d="M12 16C12 14 13 13 15 13H18V15H15V17H18V19C18 21 17 22 15 22H12V20H15V18H12V16Z"
                      fill="#635BFF"
                    />{" "}
                    <path d="M20 13H22V22H20V13Z" fill="#635BFF" />{" "}
                    <path
                      d="M24 13H26V17C26 17 27 16 28 16C29 16 30 17 30 18V22H28V18H26V22H24V13Z"
                      fill="#635BFF"
                    />{" "}
                    <path
                      d="M32 16H34V18C34 18 35 17 36 17V19C35 19 34 20 34 20V22H32V16Z"
                      fill="#635BFF"
                    />{" "}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
