"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaPlus, FaUndo } from "react-icons/fa";

export default function CreateOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const inputBaseClasses =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]";

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full bg-white p-6 rounded-2xl border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
          Create New Order
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Buyer Information Section */}
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-[#10B981]  px-4 py-2 rounded-t-lg">
              <h3 className="text-lg font-semibold text-white">
                Buyer Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>
                  Buyer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.buyerName ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter buyer's full name"
                  {...register("buyerName", {
                    required: "Buyer name is required",
                    minLength: {
                      value: 3,
                      message: "Buyer name must be at least 3 characters",
                    },
                  })}
                />
                {errors.buyerName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.buyerName.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className={`${inputBaseClasses} ${
                    errors.phoneNumber ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="e.g., 01712345678"
                  {...register("phoneNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Please enter a valid 11-digit number",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  UID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.buyerUID ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter buyer's UID"
                  {...register("buyerUID", {
                    required: "UID is required",
                  })}
                />
                {errors.buyerUID && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.buyerUID.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Order Information Section */}
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-[#10B981]  px-4 py-2 rounded-t-lg">
              <h3 className="text-lg font-semibold text-white">
                Order Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.productName ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter product name"
                  {...register("productName", {
                    required: "Product name is required",
                  })}
                />
                {errors.productName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.productName.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className={`${inputBaseClasses} ${
                    errors.category ? "border-red-300" : "border-gray-300"
                  }`}
                  {...register("category", {
                    required: "Please select a category",
                  })}
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="accessories">Accessories</option>
                  <option value="others">Others</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`${inputBaseClasses} ${
                    errors.quantity ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter quantity"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Minimum 1 item required" },
                  })}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Expected Price (৳) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`${inputBaseClasses} ${
                    errors.price ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter price"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 1, message: "Price must be positive" },
                  })}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="3"
                  className={`${inputBaseClasses} ${
                    errors.address ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter complete delivery address"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 10,
                      message: "Please provide a complete address",
                    },
                  })}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Additional Requirements{" "}
              
                </label>
                <textarea
                  rows="3"
                  className={`${inputBaseClasses} border-gray-300`}
                  placeholder="Any special requirements or notes for the order"
                  {...register("additionalRequirements")}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[180px] py-3 px-4 flex justify-center items-center rounded-lg shadow-sm text-white font-medium transition duration-200
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#10B981] hover:bg-green-700"
                }`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  <FaPlus className="mr-2" />
                  Create Order
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              disabled={isSubmitting}
              className="py-3 px-6 flex justify-center items-center border border-gray-300 rounded-lg text-gray-700 font-medium bg-white hover:bg-gray-50 transition duration-200 disabled:opacity-50"
            >
              <FaUndo className="mr-2" />
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
