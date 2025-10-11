"use client";

import useAuth from "@/CustomHooks/useAuth";
import useToastNotification from "@/CustomHooks/useToastNotification";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogIn = () => {
  const { googleLogIn } = useAuth();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = useToastNotification();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      const result = await googleLogIn();
      successToast("logged in successfully!");
      router.push('/user-dashboard')
      //   const user = result.user;

      //   const userInfo = {
      //     name: user.displayName,
      //     email: user.email,
      //     role: "user",
      //     registrationTime: new Date().toLocaleString(),
      //   };

      //   const res = await axiosSecure.post("/api/post-users", userInfo);

      //   if (res.data.insertedId) {
      //     toast.success("Account created successfully!");
      //     router.push("/myaccount");
      //   } else if (
      //     res.data.message === "You are already registered. Please log in."
      //   ) {
      //     const { data: existingUser } = await axiosSecure.get(
      //       `/api/user/${user.email}`
      //     );
      //     toast.success("Logged in successfully!");
      //     if (existingUser?.role === "admin") {
      //       router.push("/admindashboard");
      //     } else {
      //       router.push("/myaccount");
      //     }
      //   }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 mb-6">
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center  justify-center gap-4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition duration-150 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
              <FcGoogle className="h-5 w-5" />
                  Submitting...
          </>
        ) : (
          <>
            <FcGoogle className="h-5 w-5" />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </>
        )}
      </button>

      <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition duration-150">
        <FaGithub className="h-5 w-5" />
        <span className="ml-3 text-sm font-medium text-gray-700">
          Continue with GitHub
        </span>
      </button>
    </div>
  );
};

export default SocialLogIn;
