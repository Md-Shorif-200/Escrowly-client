"use client";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { FaArrowRight, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

import img_1 from "../../public/Lottie/Shopping Green.json";
import Lottie from "lottie-react";
import useAuth from "@/CustomHooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setshowPassword] = useState(false);
  const {creatUser} = useAuth();
  const router = useRouter();



  const onsubmit = async (data) => {

    console.log(data);
       try {
         const result = await creatUser(data.email,data.password)
         toast.success('Account Created succesfully!',{duration:2000});
         router.push('/')
       } catch (error) {
        console.log(error);
        toast.error(error)
        
       }
     
  };

  return (
    <div className="bg_color w-full min-h-screen flex justify-center items-center z-0 py-10 md:py-14 lg:py-20 ">
      <div className="bg-white w-[85%]  z-10 shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* ----------- lottie img */}
        <div className="form_img bg_color w-full min-h-[400px] flex justify-center items-center py-6 ">
          <Lottie animationData={img_1}
            loop={true} 
  className="w-full h-[80%]"

          ></Lottie>
        </div>
        {/* ---------------- sign-up form  */}
        <div className="form_section p-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Create a New Account
          </h2>
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            {/* -----------------name */}
            <div>
              <label htmlFor="" className="block font-semibold capitalize">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                className="w-full px-3 py-2  "
                placeholder="Enter Your Name"
              />

              {errors.name && (
                <p className="form_error">{errors.name.message} </p>
              )}
            </div>

            <div className="grid grid-cols-1  gap-x-2">
              {/*----------------- email */}
              <div>
                <label htmlFor="" className="block font-semibold capitalize">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "email is Required" })}
                  className="w-full px-3 py-2  "
                  placeholder="Enter Email Adress"
                />

                {errors.email && (
                  <p className="form_error">{errors.email.message} </p>
                )}
              </div>

              {/*--------------- password */}
              <div className="relative">
                <label htmlFor="" className="block font-semibold capitalize">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "password is Required",

                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                      message:
                        "Password Must Contain  1 Uppercase , 1 Lowercase, 1 number , 1 symbol and be at least 6 characters",
                    },
                  })}
                  className="w-full px-3 py-2  "
                  placeholder="Enter Strong password "
                />

                {errors.password && (
                  <p className="form_error">{errors.password.message} </p>
                )}

                <div
                  className="password_toggle_icon absolute top-1/2 right-3 cursor-pointer"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </div>
              </div>
            </div>

            {/* submit button */}

           <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#10B981] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981] transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner></FaSpinner>
      
                        Submitting...
                      </>
                    ) : (
                      <>
                        Creat Account
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>

            <p className="text-base capitalize sm:text-end my-2 font-semibold">
              Already have an acount ? please{" "}
              <Link href="/log-in" className="text_color">
                Log In
              </Link>
            </p>
          </form>

     

         
        </div>
      </div>
    </div>
  );
};

export default Register;
