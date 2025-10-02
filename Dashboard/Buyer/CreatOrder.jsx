// app/create-order/page.jsx (or pages/create-order.js if using Pages Router)
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

export default function CreateOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {};

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
              Create New Order
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Product Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] ${
                    errors.productName ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter product name"
                  {...register("productName", {
                    required: "Product name is required",
                    minLength: {
                      value: 3,
                      message: "Product name must be at least 3 characters",
                    },
                  })}
                />
                {errors.productName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.productName.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] ${
                    errors.category ? "border-red-300" : "border-gray-300"
                  }`}
                  {...register("category", {
                    required: "Please select a category",
                  })}
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports</option>
                  <option value="others">Others</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            {/* Quantity and Price Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] ${
                    errors.quantity ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter quantity"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Price (৳) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] ${
                    errors.price ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter price"
                  {...register("price", {
                    required: "Price is required",
                    min: {
                      value: 1,
                      message: "Price must be greater than 0",
                    },
                  })}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] ${
                  errors.contactNumber ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your mobile number (e.g., 01712345678)"
                {...register("contactNumber", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Please enter valid 11 digit number",
                  },
                })}
              />
              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-green-500 ${
                  errors.description ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Describe the product you want to order"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                  errors.deliveryAddress ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter complete delivery address"
                {...register("deliveryAddress", {
                  required: "Delivery address is required",
                  minLength: {
                    value: 10,
                    message: "Please provide complete address",
                  },
                })}
              />
              {errors.deliveryAddress && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.deliveryAddress.message}
                </p>
              )}
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Requirements
                <span className="text-gray-500 ml-2">(Optional)</span>
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Any special requirements or notes"
                {...register("additionalRequirements")}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[180px] py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium 
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#10B981] hover:bg-[#10B981] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
                  } transition duration-200`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                   <FaSpinner></FaSpinner>
                    Creating Order...
                  </span>
                ) : (
                  "Create Order"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
