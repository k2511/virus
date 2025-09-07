// import React, { useState } from "react";
// import { toast } from 'react-hot-toast';
// import { useLocation } from "react-router-dom";
// import {
//   CheckCircle,
//   Loader,
// } from "lucide-react";

// const Payment = () => {
//   const location = useLocation();
//   // Get the product details from navigation state
//   const { productName, quantity, unitPrice, totalPrice } = location.state || {};
  
//   // Use the actual total price from product details, default to 1000 if not available
//   const initialAmount = totalPrice ? Math.round(totalPrice * 100) : 1000;
  
//   const [formData, setFormData] = useState({
//     cardName: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//     amount: initialAmount, // Use the dynamic amount
//   });

//   const [errors, setErrors] = useState({});
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState(""); // success | failed | ''

//   // Format card number with spaces
//   const formatCardNumber = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     return v.replace(/(.{4})/g, "$1 ").trim();
//   };

//   // Format expiry date
//   const formatExpiry = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     return v.length >= 3 ? v.substring(0, 2) + "/" + v.substring(2, 4) : v;
//   };

//   // Validation helpers
//   const validateCard = (cardNumber) =>
//     cardNumber.replace(/\s/g, "").length >= 13 &&
//     cardNumber.replace(/\s/g, "").length <= 19;

//   const validateExpiry = (expiry) => {
//     const [month, year] = expiry.split("/");
//     const now = new Date();
//     const currentYear = now.getFullYear() % 100;
//     const currentMonth = now.getMonth() + 1;

//     if (!month || !year) return false;
//     const m = parseInt(month, 10);
//     const y = parseInt(year, 10);

//     return m >= 1 && m <= 12 && (y > currentYear || (y === currentYear && m >= currentMonth));
//   };

//   const validateCVV = (cvv) => cvv.length >= 3 && cvv.length <= 4;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let val = value;

//     if (name === "cardNumber") val = formatCardNumber(value).slice(0, 19);
//     if (name === "expiry") val = formatExpiry(value).slice(0, 5);
//     if (name === "cvv") val = value.replace(/[^0-9]/g, "").slice(0, 4);
//     if (name === "cardName") val = value.replace(/[^a-zA-Z\s]/g, "");

//     setFormData((prev) => ({ ...prev, [name]: val }));

//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
//     if (!validateCard(formData.cardNumber)) newErrors.cardNumber = "Invalid card number";
//     if (!validateExpiry(formData.expiry)) newErrors.expiry = "Invalid expiry date";
//     if (!validateCVV(formData.cvv)) newErrors.cvv = "Invalid CVV";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const initializeRazorpay = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//   const handlePayment = async () => {
//     const loaded = await initializeRazorpay();
//     if (!loaded) {
//       alert("Failed to load Razorpay. Check your connection.");
//       return;
//     }

//     const options = {
//       key: "rzp_test_your_key_here", // Replace with your actual Razorpay key
//       amount: formData.amount,
//       currency: "INR",
//       name: "Your Company",
//       description: productName || "Product Purchase",
//       image: "https://your-logo-url.com/logo.png",
//       handler: (res) => {
//         setIsProcessing(false);
//         setPaymentStatus("success");
//         toast.success("Payment Successful!"); 
//       },
//       prefill: { 
//         name: formData.cardName, 
//         email: "customer@example.com", 
//         contact: "9999999999" 
//       },
//       theme: { color: "#FACC15" },
//       modal: {
//         ondismiss: () => {
//           setIsProcessing(false);
//           setPaymentStatus("failed");
//         },
//       },
//     };

//     new window.Razorpay(options).open();
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
//     setIsProcessing(true);
//     setPaymentStatus("");
//     try {
//       await handlePayment();
//     } catch {
//       setIsProcessing(false);
//       setPaymentStatus("failed");
//     }
//   };

//   const resetForm = () => {
//     setFormData({ 
//       cardName: "", 
//       cardNumber: "", 
//       expiry: "", 
//       cvv: "", 
//       amount: initialAmount 
//     });
//     setErrors({});
//     setPaymentStatus("");
//   };

//   // Format price for display
//   const formatPrice = (price) => {
//     return `₹${(price / 100).toFixed(2)}`;
//   };

//   // ✅ Success screen
//   if (paymentStatus === "success")
//     return (
//       <div className="max-w-md mx-auto p-8 bg-green-50 shadow-xl rounded-2xl my-12 text-center">
//         <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//         <h2 className="text-2xl font-bold text-green-800">Payment Successful!</h2>
//         <p className="text-green-600 mt-2 mb-6">
//           You paid {formatPrice(formData.amount)} for {quantity} × {productName}.
//         </p>
//         <button
//           onClick={resetForm}
//           className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
//         >
//           Make Another Payment
//         </button>
//       </div>
//     );

//   // ❌ Failure screen
//   if (paymentStatus === "failed")
//     return (
//       <div className="max-w-md mx-auto p-8 bg-red-50 shadow-xl rounded-2xl my-12 text-center border-red-400 border-2">
//         <h2 className="text-2xl font-bold text-red-800">Payment Failed</h2>
//         <p className="text-red-600 mt-2 mb-6">Something went wrong. Please try again.</p>
//         <button
//           onClick={() => setPaymentStatus("")}
//           className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
//         >
//           Try Again
//         </button>
//       </div>
//     );

//   // Default form
//   return (
//     <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl my-12 border border-gray-100">
//       {/* Header */}
//       <div className="flex items-center justify-center mb-8">
//         <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
//       </div>

//       {/* Order Summary */}
//       {productName && (
//         <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-200">
//           <h3 className="text-sm font-semibold text-gray-700 mb-2">Order Summary</h3>
//           <div className="flex justify-between text-sm text-gray-600">
//             <span>{productName}</span>
//             <span>{formatPrice(formData.amount)}</span>
//           </div>
//           {quantity > 1 && (
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>{quantity} × {formatPrice(unitPrice * 100)}</span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Amount */}
//       <div className="bg-yellow-50 p-4 rounded-xl mb-6 text-center border border-yellow-200">
//         <p className="text-sm text-gray-600">Amount to Pay</p>
//         <p className="text-3xl font-bold text-gray-900">
//           {formatPrice(formData.amount)}
//         </p>
//       </div>

//       {/* Form */}
//       <div className="space-y-5">
//         {/* Cardholder */}
//         <div>
//           <label className="block text-sm font-semibold mb-1 text-gray-700">
//             Cardholder Name *
//           </label>
//           <input
//             type="text"
//             name="cardName"
//             value={formData.cardName}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
//               errors.cardName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
//             }`}
//             placeholder="John Doe"
//           />
//           {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
//         </div>

//         {/* Card number */}
//         <div>
//           <label className="block text-sm font-semibold mb-1 text-gray-700">
//             Card Number *
//           </label>
//           <input
//             type="text"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
//               errors.cardNumber ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
//             }`}
//             placeholder="1234 5678 9012 3456"
//           />
//           {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
//         </div>

//         {/* Expiry + CVV */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-semibold mb-1 text-gray-700">Expiry *</label>
//             <input
//               type="text"
//               name="expiry"
//               value={formData.expiry}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
//                 errors.expiry ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
//               }`}
//               placeholder="MM/YY"
//             />
//             {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-1 text-gray-700">CVV *</label>
//             <input
//               type="text"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
//                 errors.cvv ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
//               }`}
//               placeholder="123"
//             />
//             {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
//           </div>
//         </div>

//         {/* Info */}
//         <div className="flex items-center justify-center text-xs text-gray-500 py-2">
//           Your payment is encrypted & secure
//         </div>

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           disabled={isProcessing}
//           className={`w-full py-3 rounded-lg font-semibold text-white transition ${
//             isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600 shadow-md"
//           }`}
//         >
//           {isProcessing ? (
//             <span className="flex items-center justify-center">
//               <Loader className="animate-spin w-5 h-5 mr-2" />
//               Processing...
//             </span>
//           ) : (
//             `Pay ${formatPrice(formData.amount)} Securely`
//           )}
//         </button>
//       </div>

//       {/* Footer */}
//       <p className="mt-6 text-xs text-center text-gray-400">Powered by Razorpay • Secure Payments</p>
//     </div>
//   );
// };

// export default Payment;





import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Loader,
  Download,
  ArrowLeft,
} from "lucide-react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the product details from navigation state
  const { productName, quantity, unitPrice, totalPrice } = location.state || {};
  
  // Use the actual total price from product details, default to 1000 if not available
  const initialAmount = totalPrice ? Math.round(totalPrice * 100) : 1000;
  
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: initialAmount,
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(""); // success | failed | ''
  const [paymentId, setPaymentId] = useState(""); // Store payment ID for invoice
  const [invoiceData, setInvoiceData] = useState(null); // Store invoice data

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    return v.replace(/(.{4})/g, "$1 ").trim();
  };

  // Format expiry date
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    return v.length >= 3 ? v.substring(0, 2) + "/" + v.substring(2, 4) : v;
  };

  // Validation helpers
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
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "cardNumber") val = formatCardNumber(value).slice(0, 19);
    if (name === "expiry") val = formatExpiry(value).slice(0, 5);
    if (name === "cvv") val = value.replace(/[^0-9]/g, "").slice(0, 4);
    if (name === "cardName") val = value.replace(/[^a-zA-Z\s]/g, "");
    if (name === "email") val = value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
    if (!validateCard(formData.cardNumber)) newErrors.cardNumber = "Invalid card number";
    if (!validateExpiry(formData.expiry)) newErrors.expiry = "Invalid expiry date";
    if (!validateCVV(formData.cvv)) newErrors.cvv = "Invalid CVV";
    if (!validateEmail(formData.email)) newErrors.email = "Valid email is required for invoice";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const initializeRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // Generate a unique payment ID
  const generatePaymentId = () => {
    return 'pay_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  const handlePayment = async () => {
    const loaded = await initializeRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay. Check your connection.");
      return;
    }

    const paymentId = generatePaymentId();
    setPaymentId(paymentId);

    const options = {
      key: "rzp_test_your_key_here", // Replace with your actual Razorpay key
      amount: formData.amount,
      currency: "INR",
      name: "Your Company",
      description: productName || "Product Purchase",
      image: "https://your-logo-url.com/logo.png",
      handler: (res) => {
        setIsProcessing(false);
        setPaymentStatus("success");
        
        // Prepare invoice data
        const invoice = {
          invoiceNumber: `INV-${Date.now()}`,
          paymentId: paymentId,
          date: new Date().toLocaleDateString(),
          customerEmail: formData.email,
          productName: productName || "Product",
          quantity: quantity || 1,
          unitPrice: unitPrice || (formData.amount / 100),
          total: formData.amount / 100,
          paymentMethod: "Credit Card",
          cardLast4: formData.cardNumber.slice(-4)
        };
        
        setInvoiceData(invoice);
        toast.success("Payment Successful!");
      },
      prefill: { 
        name: formData.cardName, 
        email: formData.email, 
        contact: "9999999999" 
      },
      theme: { color: "#FACC15" },
      modal: {
        ondismiss: () => {
          setIsProcessing(false);
          setPaymentStatus("failed");
          toast.error("Payment cancelled");
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
      toast.error("Payment failed. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({ 
      cardName: "", 
      cardNumber: "", 
      expiry: "", 
      cvv: "", 
      amount: initialAmount,
      email: "",
    });
    setErrors({});
    setPaymentStatus("");
    setInvoiceData(null);
  };

  // Format price for display
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };

  // Generate and download PDF invoice
  const downloadInvoice = () => {
    const doc = new jsPDF();
    
    // Add company logo and details
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("INVOICE", 105, 25, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Your Company Name", 105, 35, { align: "center" });
    doc.text("123 Business Street, City, State - 123456", 105, 41, { align: "center" });
    doc.text("GSTIN: XXXXXXXXXXXXXX", 105, 47, { align: "center" });
    
    // Add invoice details
    doc.setDrawColor(200, 200, 200);
    doc.line(15, 55, 195, 55);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 20, 65);
    doc.text(`Date: ${invoiceData.date}`, 20, 71);
    doc.text(`Payment ID: ${invoiceData.paymentId}`, 20, 77);
    
    doc.text(`Customer Email: ${invoiceData.customerEmail}`, 140, 65);
    doc.text(`Payment Method: ${invoiceData.paymentMethod}`, 140, 71);
    doc.text(`Card: **** **** **** ${invoiceData.cardLast4}`, 140, 77);
    
    // Add product table
    doc.autoTable({
      startY: 85,
      head: [['Description', 'Quantity', 'Unit Price', 'Amount']],
      body: [
        [
          invoiceData.productName, 
          invoiceData.quantity, 
          `₹${invoiceData.unitPrice.toFixed(2)}`, 
          `₹${invoiceData.total.toFixed(2)}`
        ]
      ],
      theme: 'striped',
      headStyles: {
        fillColor: [250, 204, 21],
        textColor: [0, 0, 0]
      },
    });
    
    // Add total
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Total: ₹${invoiceData.total.toFixed(2)}`, 160, finalY);
    
    // Add thank you message
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text("Thank you for your business!", 105, finalY + 15, { align: "center" });
    
    // Save the PDF
    doc.save(`invoice-${invoiceData.invoiceNumber}.pdf`);
  };

  // ✅ Success screen
  if (paymentStatus === "success")
    return (
      <div className="max-w-md mx-auto p-8 bg-green-50 shadow-xl rounded-2xl my-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-800">Payment Successful!</h2>
        <p className="text-green-600 mt-2 mb-6">
          You paid {formatPrice(formData.amount)} for {quantity} × {productName}.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Invoice has been sent to {formData.email}
        </p>
        <div className="space-y-3">
          <button
            onClick={downloadInvoice}
            className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Invoice
          </button>
          <button
            onClick={resetForm}
            className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Make Another Payment
          </button>
        </div>
      </div>
    );

  // ❌ Failure screen
  if (paymentStatus === "failed")
    return (
      <div className="max-w-md mx-auto p-8 bg-red-50 shadow-xl rounded-2xl my-12 text-center border-red-400 border-2">
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
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
        <div className="w-20"></div> {/* Spacer for alignment */}
      </div>

      {/* Order Summary */}
      {productName && (
        <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{productName}</span>
            <span>{formatPrice(formData.amount)}</span>
          </div>
          {quantity > 1 && (
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{quantity} × {formatPrice(unitPrice * 100)}</span>
            </div>
          )}
        </div>
      )}

      {/* Amount */}
      <div className="bg-yellow-50 p-4 rounded-xl mb-6 text-center border border-yellow-200">
        <p className="text-sm text-gray-600">Amount to Pay</p>
        <p className="text-3xl font-bold text-gray-900">
          {formatPrice(formData.amount)}
        </p>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Email Address (For Invoice) *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

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
            `Pay ${formatPrice(formData.amount)} Securely`
          )}
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-center text-gray-400">Powered by Razorpay • Secure Payments</p>
    </div>
  );
};

export default Payment;