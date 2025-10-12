"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";
import { FaSpinner, FaUndo, FaCheckCircle } from "react-icons/fa";

export default function KycVerification() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [previewNidFront, setPreviewNidFront] = useState(null);
  const [previewNidBack, setPreviewNidBack] = useState(null);
  const [previewPassFront, setPreviewPassFront] = useState(null);
  const [previewPassBack, setPreviewPassBack] = useState(null);

  // State to store compressed files
  const [compressedFiles, setCompressedFiles] = useState({});

  const onSubmit = async (data) => {
    console.log("Compressed Files:", compressedFiles);
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("✅ KYC form submitted successfully!");
    reset();
    setPreviewNidFront(null);
    setPreviewNidBack(null);
    setPreviewPassFront(null);
    setPreviewPassBack(null);
    setCompressedFiles({});
  };

  const handleFilePreview = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Compress the image using browser-image-compression
    const options = {
      maxSizeMB: 0.5, // Maximum size in MB
      maxWidthOrHeight: 1024, // Max width or height
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const url = URL.createObjectURL(compressedFile);

      switch (type) {
        case "nidFront":
          setPreviewNidFront(url);
          break;
        case "nidBack":
          setPreviewNidBack(url);
          break;
        case "passFront":
          setPreviewPassFront(url);
          break;
        case "passBack":
          setPreviewPassBack(url);
          break;
        default:
          break;
      }

      setCompressedFiles((prev) => ({
        ...prev,
        [type]: compressedFile,
      }));
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  const labelClasses = "block text-sm font-medium text-primary-text mb-2";
  const inputBaseClasses =
    "w-full px-3 py-2 border border-card-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]";

  const uploadInputClasses =
    "w-full cursor-pointer px-3 py-2 border border-card-border rounded-lg bg-card  hover:bg-table-hover-bg transition-all text-primary-text focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]";

           const section_heading = "bg-[#10B981]  px-4 py-2 rounded-t-lg text-lg font-semibold text-white";

  return (
    <div className="min-h-screen">
      <div className="w-full bg-card p-6 rounded-2xl border border-card-border">
        <h2 className="text-3xl font-bold text-primary-text mb-8 ">
          KYC Verification Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Personal Information Section */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Personal Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.fullName ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter your full name"
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`${inputBaseClasses} ${
                    errors.email ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className={`${inputBaseClasses} ${
                    errors.phone ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="e.g., 01712345678"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Please enter a valid 11-digit number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  NID Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`${inputBaseClasses} ${
                    errors.nidNumber ? "border-red-300" : "border-card-border"
                  }`}
                  placeholder="Enter your NID number"
                  {...register("nidNumber", { required: "NID number is required" })}
                />
                {errors.nidNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.nidNumber.message}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>Passport Number (Optional)</label>
                <input
                  type="text"
                  className={`${inputBaseClasses} border-card-border`}
                  placeholder="Enter passport number (if any)"
                  {...register("passportNumber")}
                />
              </div>
            </div>
          </div>

          {/* NID Upload Section */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">NID Card Upload</h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>
                  NID Front Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className={uploadInputClasses}
                  {...register("nidFront", { required: "Front image is required" })}
                  onChange={(e) => handleFilePreview(e, "nidFront")}
                />
                {previewNidFront && (
                  <img
                    src={previewNidFront}
                    alt="NID Front Preview"
                    className="mt-3 w-40 rounded-lg border"
                  />
                )}
                {errors.nidFront && (
                  <p className="mt-1 text-sm text-red-600">{errors.nidFront.message}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  NID Back Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className={uploadInputClasses}
                  {...register("nidBack", { required: "Back image is required" })}
                  onChange={(e) => handleFilePreview(e, "nidBack")}
                />
                {previewNidBack && (
                  <img
                    src={previewNidBack}
                    alt="NID Back Preview"
                    className="mt-3 w-40 rounded-lg border"
                  />
                )}
                {errors.nidBack && (
                  <p className="mt-1 text-sm text-red-600">{errors.nidBack.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Passport Upload Section (Optional) */}
          <div className="border border-card-border rounded-lg">
            <div className={section_heading}>
              <h3 className="">
                Passport Upload (Optional)
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Passport Front Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className={uploadInputClasses}
                  {...register("passFront")}
                  onChange={(e) => handleFilePreview(e, "passFront")}
                />
                {previewPassFront && (
                  <img
                    src={previewPassFront}
                    alt="Passport Front Preview"
                    className="mt-3 w-40 rounded-lg border"
                  />
                )}
              </div>

              <div>
                <label className={labelClasses}>Passport Back Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className={uploadInputClasses}
                  {...register("passBack")}
                  onChange={(e) => handleFilePreview(e, "passBack")}
                />
                {previewPassBack && (
                  <img
                    src={previewPassBack}
                    alt="Passport Back Preview"
                    className="mt-3 w-40 rounded-lg border"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
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
                  Submitting...
                </>
              ) : (
                <>
                  <FaCheckCircle className="mr-2" />
                  Submit KYC
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setPreviewNidFront(null);
                setPreviewNidBack(null);
                setPreviewPassFront(null);
                setPreviewPassBack(null);
                setCompressedFiles({});
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
