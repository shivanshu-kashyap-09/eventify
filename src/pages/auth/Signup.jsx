import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    isVerify: true,
  });

  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/create`,
        signUpForm
      );
      console.log("hello")
      console.log(response);

      if (response.status === 201) {
        toast.success("User created successfully!");

        // // ✅ Reset Form After Success
        // setSignUpForm({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   address: "",
        //   password: "",
        //   isVerify: true,
        // });

        // OPTIONAL: switchToLogin();
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong!");
    }
  };

  if (!isVisible) {
    navigate("/");
    return null;
  }

  const handleClick=()=>{
    navigate('/login');
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from bg-sky-100 to-sky-50  backdrop-blur-md text-white rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-6 animate-fadeInUp scale-95 transition-all duration-300">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <p className="text-sm text-gray-800 mb-2 flex items-center">
          <span className="mr-2">←</span> Welcome to EVENTIFY
        </p>

        <h2 className="text-3xl font-bold text-black text-center mb-5 mt-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* NAME */}
          <div >
            <div>
              <label className="text-sm mb-1 block text-black">Name</label>
              <input
                type="text"
                value={signUpForm.name}
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, name: e.target.value })
                }
                placeholder="Enter name"
                className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm mb-1 block text-black">
              Email Address
            </label>
            <input
              type="email"
              value={signUpForm.email}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, email: e.target.value })
              }
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-md shadow-xl bg-white text-black"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm mb-1 block text-black">
              Phone Number
            </label>
            <input
              type="tel"
              value={signUpForm.phone}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, phone: e.target.value })
              }
              placeholder="Enter your 10-digit mobile number"
              className="w-full px-4 py-2 rounded-md shadow-xl bg-white text-black"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm mb-1 block text-black">Address</label>
            <input
              type="text"
              value={signUpForm.address}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, address: e.target.value })
              }
              placeholder="Enter your address"
              className="w-full px-4 py-2 rounded-md shadow-xl bg-white text-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm mb-1 block text-black">Password</label>
            <input
              type="password"
              value={signUpForm.password}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, password: e.target.value })
              }
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md shadow-xl bg-white text-black"
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold py-2 rounded-md hover:bg-blue-900 transition"
          >
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-black">
          Already have an account?{" "}
          <button
            onClick={handleClick}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
