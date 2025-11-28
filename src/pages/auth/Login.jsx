import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  
  const [loginForm, setLoginForm] = useState(
    {
      email: "",
      password: ""
    }
  );
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate(); // modal visible by default

  const onClose = () => {
    setIsShow(false); // hide modal when close clicked
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env}/user/login`, loginForm)
      if (response.status == 201) {
        toast.success("login succesfully");

      }

    } catch (error) {
      toast.error("enter a valid cridential");


    }

  }
  // 🔹 This hides the component when isShow is false
  if (!isShow) {
    navigate('/');
    return null;
  }

  const handleClick = () => {
    navigate('/signUp');
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-sky-100 to-sky-50 backdrop-blur-md text-black rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-6 animate-fadeInUp scale-95 transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-black mb-1 mt-2">
          EVENTIFY
        </h2>
        <p className="text-sm text-center text-gray-700 mb-7">
          Welcome user, please sign in to continue
        </p>

        {/* Google Sign In */}
        <button
          onClick={() =>
            onLoginSuccess({
              name: "Google User",
              photo: "https://i.pravatar.cc/150?img=1",
            })
          }
          className="w-full bg-white border-white shadow-xl flex items-center justify-center gap-3 border py-2 rounded-md mb-6"
        >
          <FcGoogle size={22} />
          <span className="text-sm font-medium text-black">
            Sign In With Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-4 text-black">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-sm">Or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm mb-1 block">Email *</label>
            <input
              type="email"
              required
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-white shadow-xl bg-white text-black placeholder-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Password *</label>
            <input
              type="password"
              required
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-white shadow-xl bg-white text-black placeholder-gray-600 focus:outline-none focus:border-blue-500"
            />
            <div className="text-right mt-1">
              <button
                type="button"
                onClick={() => alert("Redirect to forgot password flow")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition"
          >
            Sign In
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="text-sm text-center mt-6 text-black">
          Don’t have an account?{" "}
          <button
            onClick={handleClick}
            className="text-blue-500 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
