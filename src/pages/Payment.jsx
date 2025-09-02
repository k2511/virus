// import React from "react";

// const Payment = () => {
//     const handleSubmit = async () => {
//         const res = await fetch("http://localhost:5000/create-order", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: 500 }), // Rs.500
//         });
    
//         const data = await res.json();
    
//         const options = {
//           key: "YOUR_KEY_ID", 
//           amount: data.amount,
//           currency: data.currency,
//           name: "My Shop",
//           description: "Test Transaction",
//           order_id: data.id,
//           handler: function (response) {
//             alert("Payment successful! " + response.razorpay_payment_id);
//           },
//           prefill: {
//             name: "Aman",
//             email: "aman@example.com",
//             contact: "9876543210",
//           },
//           theme: { color: "#6366f1" },
//         };
    
//         const rzp = new window.Razorpay();
//         rzp.open();
//       };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-yellow-100 shadow-md rounded-lg my-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="cardName">
//             Cardholder Name
//           </label>
//           <input
//             type="text"
//             id="cardName"
//             autoComplete="cc-name"
//             className="w-full px-4 py-2 border bg-yellow-200 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="John Doe"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="cardNumber">
//             Card Number
//           </label>
//           <input
//             type="number"
//             id="cardNumber"
//             autoComplete="cc-number"
//             className="w-full px-4 py-2 border rounded-lg bg-yellow-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="1234 5678 9012 3456"
//           />
//         </div>

//         <div className="flex gap-4 mb-4">
//           <div className="w-1/2">
//             <label className="block text-sm font-medium mb-2" htmlFor="expiry">
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               id="expiry"
//               autoComplete="cc-exp"
//               className="w-full px-4 py-2 border rounded-lg bg-yellow-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="MM/YY"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-sm font-medium mb-2" htmlFor="cvv">
//               CVV
//             </label>
//             <input
//               type="number"
//               id="cvv"
//               autoComplete="cc-csc"
//               className="w-full px-4 py-2 border rounded-lg bg-yellow-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="123"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
//         >
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import {toast} from 'react-hot-toast'
import {
  CreditCard,
  Lock,
  AlertCircle,
  CheckCircle,
  Loader,
} from "lucide-react";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: 1000, // ₹10.00
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(""); // success | failed | ''

  // format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    return v.replace(/(.{4})/g, "$1 ").trim();
  };

  // format expiry date
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    return v.length >= 3 ? v.substring(0, 2) + "/" + v.substring(2, 4) : v;
  };

  // validation helpers
  const validateCard = (cardNumber) =>
    cardNumber.replace(/\s/g, "").length >= 13 &&
    cardNumber.replace(/\s/g, "").length <= 19;

  const validateExpiry = (expiry) => {
    const [month, year] = expiry.split("/");
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (!month || !year) return false;
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    return m >= 1 && m <= 12 && (y > currentYear || (y === currentYear && m >= currentMonth));
  };

  const validateCVV = (cvv) => cvv.length >= 3 && cvv.length <= 4;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "cardNumber") val = formatCardNumber(value).slice(0, 19);
    if (name === "expiry") val = formatExpiry(value).slice(0, 5);
    if (name === "cvv") val = value.replace(/[^0-9]/g, "").slice(0, 4);
    if (name === "cardName") val = value.replace(/[^a-zA-Z\s]/g, "");

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
    if (!validateCard(formData.cardNumber)) newErrors.cardNumber = "Invalid card number";
    if (!validateExpiry(formData.expiry)) newErrors.expiry = "Invalid expiry date";
    if (!validateCVV(formData.cvv)) newErrors.cvv = "Invalid CVV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const initializeRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
    //   script.src = 'https://www.yourtechstory.com/wp-content/uploads/2020/01/razorpay.png';
    //   script.onload = () => resolve(true);
    //   script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const loaded = await initializeRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay. Check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_your_key_here",
      amount: formData.amount,
      currency: "INR",
      name: "Your Company",
      description: "Test Payment",
      image: "https://your-logo-url.com/logo.png",
      handler: (res) => {
        setIsProcessing(false);
        setPaymentStatus("success");
        toast.success("Payment Successful!"); 
      },
      prefill: { name: formData.cardName, email: "customer@example.com", contact: "9999999999" },
      theme: { color: "#FACC15" },
      modal: {
        ondismiss: () => {
          setIsProcessing(false);
          setPaymentStatus("failed");
        },
      },
    };

    new window.Razorpay(options).open();
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsProcessing(true);
    setPaymentStatus("");
    try {
      await handlePayment();
    } catch {
      setIsProcessing(false);
      setPaymentStatus("failed");
    }
  };

  const resetForm = () => {
    setFormData({ cardName: "", cardNumber: "", expiry: "", cvv: "", amount: 1000 });
    setErrors({});
    setPaymentStatus("");
  };

  // ✅ Success screen
  if (paymentStatus === "success")
    return (

      <div className="max-w-md mx-auto p-8 bg-green-50 shadow-xl rounded-2xl my-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-800"> toast.success("Payment Successful!") </h2>
       
        <p className="text-green-600 mt-2 mb-6">
          You paid ₹{(formData.amount / 100).toFixed(2)} successfully.
        </p>
        <button
          onClick={resetForm}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Make Another Payment
        </button>
      </div>
    );

  // ❌ Failure screen
  if (paymentStatus === "failed")
    return (
      <div className="max-w-md mx-auto p-8 bg-red-50 shadow-xl rounded-2xl my-12 text-center border-red-400 border-2 ">
        {/* <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" /> */}
        <h2 className="text-2xl font-bold text-red-800">Payment Failed</h2>
        <p className="text-red-600 mt-2 mb-6">Something went wrong. Please try again.</p>
        <button
          onClick={() => setPaymentStatus("")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    );

  // Default form
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl my-12 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        {/* <CreditCard className="w-8 h-8 text-yellow-500 mr-2" /> */}
        <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
      </div>

      {/* Amount */}
      <div className="bg-yellow-50 p-4 rounded-xl mb-6 text-center border border-yellow-200">
        <p className="text-sm text-gray-600">Amount to Pay</p>
        <p className="text-3xl font-bold text-gray-900">
          ₹{(formData.amount / 100).toFixed(2)}
        </p>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Cardholder */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Cardholder Name *
          </label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
              errors.cardName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
            }`}
            placeholder="John Doe"
          />
          {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
        </div>

        {/* Card number */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Card Number *
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
              errors.cardNumber ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
            }`}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
        </div>

        {/* Expiry + CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Expiry *</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                errors.expiry ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
              }`}
              placeholder="MM/YY"
            />
            {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">CVV *</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                errors.cvv ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
              }`}
              placeholder="123"
            />
            {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
          </div>
        </div>

        {/* Info */}
        <div className="flex items-center justify-center text-xs text-gray-500 py-2">
          {/* <Lock className="w-4 h-4 mr-1" /> */}
          Your payment is encrypted & secure
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isProcessing}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600 shadow-md"
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin w-5 h-5 mr-2" />
              Processing...
            </span>
          ) : (
            `Pay ₹${(formData.amount / 100).toFixed(2)} Securely`
          )}
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-center text-gray-400">Powered by Razorpay • Secure Payments</p>
    </div>
  );
};

export default Payment;
