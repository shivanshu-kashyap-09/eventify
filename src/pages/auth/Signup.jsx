import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ switchToLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible,setIsVisible]=useState(true);
  const navigate=useNavigate();

   const onClose=()=>{
    setIsVisible(false);
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      photo: "https://i.pravatar.cc/150?img=12",
    };

    localStorage.setItem("kickifyUser", JSON.stringify(userData));
    setError("");
    alert("Signup successful! Please login now.");
    switchToLogin(); // switch to login modal
  };

  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if(!isVisible){
    navigate('/')
   return null;
  } 

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from bg-sky-100 to-sky-50  backdrop-blur-md text-white rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-6 animate-fadeInUp scale-95 transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Small Welcome Line on Left */}
        <p className="text-sm text-gray-800 mb-2 flex items-center">
          <span className="mr-2">←</span> Welcome to KICKIFY
        </p>

        {/* Title */}
        <h2 className="text-3xl font-bold text-black text-center mb-5 mt-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="text-sm mb-1 block text-black">
                First name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm mb-1 block text-black">Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block text-black">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-black">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your 10-digit mobile number"
              className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block text-black">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 rounded-md border-white shadow-xl bg-white text-black placeholder-gray-500 focus:outline-none  focus:border-blue-500"
            />
          </div>
          {/* Terms & Conditions*/}
          <div className="flex items-center gap-2">
            <input type="checkbox" required id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-sm text-black">
              I agree to the Terms & Conditions
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold py-2  rounded-md hover:bg-blue-900 transition"
          >
            SIGN UP
          </button>
        </form>

        {/* Bottom switch link */}
        <p className="text-sm text-center mt-6 text-black">
          Already have an account?{" "}
          <button
            onClick={switchToLogin}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}