// OtpPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email") || ""); 
  const [isResending, setIsResending] = useState(false); // To show loading during resend

  const navigate = useNavigate();

//   const sendOtpToEmail = async () => {

//     console.log("Sending OTP to email:", email); 
//     try {
//       const response = await axios.post('https://argetem-backend-server2.onrender.com/api/v1/user/verify', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZ…DI3fQ.SYJ9yYFRkIZRnGAJqDH86QoThlmgq6wNPd5C5XcoGWQ' });
//       console.log("OTP request response:", response.data);
//       setIsOtpSent(true);
//       alert(`OTP has been sent to ${email}`);
//     } catch (error) {
//       console.error("Failed to send OTP", error);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };

// const sendOtpToEmail = async () => {
//     try {
//       const response = await axios.post('https://argetem-backend-server2.onrender.com/api/v1/user/send-otp', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZ…DI3fQ.SYJ9yYFRkIZRnGAJqDH86QoThlmgq6wNPd5C5XcoGWQ'  });
//       setIsOtpSent(true);
//       alert(`OTP has been sent to ${email}`);
//     } catch (error) {
//       console.error("Failed to send OTP", error.response || error);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };
  
const resendOtp = async () => {
    setIsResending(true); // Indicate loading
    console.log("Resending OTP to email:", email);
    try {
      const response = await axios.post('https://argetem-backend-server2.onrender.com/api/v1/user/send-otp', { email });
      console.log("Resend OTP response:", response.data);
      alert(`A new OTP has been sent to ${email}`);
    } catch (error) {
      console.error("Failed to resend OTP", error);
      alert("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false); // Reset loading state
    }
  };


//   useEffect(() => {
//     if (email) {
//       sendOtpToEmail();
//     } else {
//       alert("Email not found. Please log in again.");
//       navigate('/login');
//     }
//   }, [email, navigate]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");
    try {
      const response = await axios.post('https://argetem-backend-server2.onrender.com/api/v1/user/verify', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZ…DI3fQ.SYJ9yYFRkIZRnGAJqDH86QoThlmgq6wNPd5C5XcoGWQ', otp: enteredOtp });
      if (response.data.success) {
        alert("OTP verified successfully!");
        navigate('/dashboard');
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP verification failed", error);
      alert("OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          {isOtpSent ? `An OTP has been sent to ${email}` : "Sending OTP..."}
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-indigo-500"
            />
          ))}
        </div>
        <button
          onClick={verifyOtp}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500"
        >
          Verify OTP
        </button>

           {/* Resend OTP Button */}
           <button
          onClick={resendOtp}
          disabled={isResending}
          className={`w-full py-2 px-4 font-semibold rounded-lg ${isResending ? "bg-gray-400" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}
        >
          {isResending ? "Resending OTP..." : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}
