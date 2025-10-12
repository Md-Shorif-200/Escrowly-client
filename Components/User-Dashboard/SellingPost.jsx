"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaPlus, FaUndo, FaUpload } from "react-icons/fa";

export default function SellingPost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const [mediaFiles, setMediaFiles] = useState([]);

  const onSubmit = async (data) => {
    console.log({ ...data, mediaFiles });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert("You can upload a maximum of 3 files.");
      e.target.value = "";
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "video/mp4"];
    const invalidFiles = files.filter((f) => !validTypes.includes(f.type));
    if (invalidFiles.length > 0) {
      alert("Only JPG, PNG, or MP4 files are allowed.");
      e.target.value = "";
      return;
    }

    setMediaFiles(files);
  };

  const labelClasses = "block text-sm font-medium text-primary-text mb-2";
  const inputBaseClasses =
    "w-full px-3 py-2 border border-card-border rounded-lg text-primary-text focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]";
       const section_heading = "bg-[#10B981]  px-4 py-2 rounded-t-lg text-lg font-semibold text-white";

  return (
    <div className="min-h-screen">
      <div className="w-full bg-card p-6 rounded-2xl border border-card-border">
        <h2 className="text-3xl font-bold text-primary-text mb-8">
          Create Selling Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* ======================= Media Upload Section ======================= */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Media Upload (Max 3 files)
              </h3>
            </div>

            <div className="p-6">
              <label className={labelClasses}>
                Upload Images/Videos{" "}
                <span className="text-gray-500 text-xs">
                  (Supported: JPG, PNG, MP4)
                </span>
              </label>

              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-card-border rounded-lg cursor-pointer bg-card hover:bg-table-hover-bg">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaUpload className="text-primary-text text-3xl mb-2" />
                    <p className="text-sm text-primary-text">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-gray-400">Max 3 files</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept=".jpg,.png,.mp4"
                    onChange={handleMediaChange}
                    className="hidden"
                  />
                </label>
              </div>

              {mediaFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {mediaFiles.map((file, index) => (
                    <div
                      key={index}
                      className="border p-2 rounded-lg flex flex-col items-center"
                    >
                      {file.type.startsWith("video") ? (
                        <video
                          src={URL.createObjectURL(file)}
                          controls
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )}
                      <p className="text-xs text-gray-500 mt-1 truncate w-full text-center">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ======================= Product Information ======================= */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Product Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Title */}
              <div>
                <label className={labelClasses}>
                  Product Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.title ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter product title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className={labelClasses}>
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className={`${inputBaseClasses} ${
                    errors.category ? "border-red-300" : "border-card-border"
                  }`}
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="">Select Category</option>
                  <option value="gaming">Gaming</option>
                  <option value="electronics">Electronics</option>
                  <option value="account">Game Account</option>
                </select>
                {errors.category && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Delivery Method */}
              <div>
                <label className={labelClasses}>
                  Delivery Method <span className="text-red-500">*</span>
                </label>
                <select
                  className={`${inputBaseClasses} ${
                    errors.deliveryMethod ? "border-red-300" : "border-card-border"
                  }`}
                  {...register("deliveryMethod", {
                    required: "Delivery method is required",
                  })}
                >
                  <option value="">Select Delivery Method</option>
                  <option value="online">Online</option>
                  <option value="meetup">Meet-up</option>
                  <option value="courier">Courier</option>
                </select>
                {errors.deliveryMethod && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.deliveryMethod.message}
                  </p>
                )}
              </div>

              {/* Condition */}
              <div>
                <label className={labelClasses}>
                  Condition <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="new"
                      {...register("condition", {
                        required: "Please select condition",
                      })}
                    />
                    New
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="used"
                      {...register("condition", {
                        required: "Please select condition",
                      })}
                    />
                    Used
                  </label>
                </div>
                {errors.condition && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.condition.message}
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className={labelClasses}>
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`${inputBaseClasses} ${
                    errors.price ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter price"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 1, message: "Price must be positive" },
                  })}
                />
                {errors.price && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className={labelClasses}>
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.location ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter location"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
                {errors.location && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className={labelClasses}>Description</label>
                <textarea
                  rows="3"
                  className={`${inputBaseClasses} border-card-border`}
                  placeholder="Describe your product..."
                  {...register("description")}
                />
              </div>
            </div>
          </div>

          {/* ======================= Seller Information ======================= */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Seller Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>
                  Seller Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses}`}
                  {...register("sellerName", {
                    required: "Seller name is required",
                  })}
                />
              </div>

              <div>
                <label className={labelClasses}>
                  Seller UID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses}`}
                  {...register("sellerUID", {
                    required: "Seller UID is required",
                  })}
                />
              </div>

              <div>
                <label className={labelClasses}>
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className={`${inputBaseClasses}`}
                  placeholder="e.g., 01712345678"
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Please enter a valid 11-digit number",
                    },
                  })}
                />
                {errors.contactNumber && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ======================= Safe Deal Protection ======================= */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Safe Deal Protection
              </h3>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register("safeDeal1")}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-700 font-semibold capitalize">
                i  agree to use escrow for payment security
                </span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register("safeDeal2")}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-700 font-semibold capitalize">
                   i have the legel right to sell this product 
                </span>
              </label>
            </div>
          </div>

          {/* ======================= Buttons ======================= */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[180px] py-3 px-4 flex justify-center items-center rounded-lg shadow-sm text-white font-medium transition duration-200 cursor-pointer
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
                  Create Post
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setMediaFiles([]);
              }}
              disabled={isSubmitting}
              className="py-3 px-6 flex justify-center items-center border border-card-border rounded-lg text-gray-700 font-medium bg-white hover:bg-gray-50 transition duration-200 disabled:opacity-50 cursor-pointer"
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
