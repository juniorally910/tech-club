import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Step 1: Send OTP
  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Failed to send OTP");
        return;
      }
      setOtpSent(true);
      setMessage("✅ OTP sent! Check your email.");
    } catch (error) {
      console.error(error);
      setMessage("Server error sending OTP");
    }
  };

  // Step 2: Verify OTP
  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, otp }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "OTP verification failed");
        return;
      }

      // ✅ store token from backend
      localStorage.setItem("token", data.token);

      setMessage("✅ Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage("Server error verifying OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register / Create Account
        </h2>

        {message && <p className="text-sm text-center text-red-500 mb-2">{message}</p>}

        {!otpSent ? (
          <form onSubmit={sendOTP} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name"
              value={form.name} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg" />
            <input type="email" name="email" placeholder="Email"
              value={form.email} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg" />
            <input type="password" name="password" placeholder="Password"
              value={form.password} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg" />
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg">
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOTP} className="space-y-4">
            <input type="text" name="otp" placeholder="Enter OTP"
              value={otp} onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg" />
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg">
              Verify OTP
            </button>
          </form>
        )}

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Register */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const decoded = jwtDecode(credentialResponse.credential);
                const googleUser = {
                  name: decoded.name,
                  email: decoded.email,
                  googleId: decoded.sub,
                  avatar: decoded.picture,
                };

                const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const res = await fetch(`${apiUrl}/api/auth/google`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(googleUser),
                });

                const data = await res.json();
                if (!res.ok) {
                  alert(data.msg || "Google registration failed");
                  return;
                }

                localStorage.setItem("token", data.token);
                navigate("/join");
              } catch (error) {
                console.error("❌ Google auth error:", error);
              }
            }}
            onError={() => console.log("Google Signup Failed")}
          />
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
