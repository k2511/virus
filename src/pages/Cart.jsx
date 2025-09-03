import React , { useState } from 'react';
import { Plus, Minus, Trash2, ShoppingCart, Copy,Download, FileText, ChevronDown  } from 'lucide-react';
import { MyContext } from '../Context/CartContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';
const Cart = () => {

    const { cart, setCart, addToCart } = useContext(MyContext);
     let key = "gdlfktodlf"
    //  const updateQuantity = (id, newQuantity) => {
    //   if (newQuantity === 0) {
    //     removeItem(id);
    //     return;
    //   }
    //   setCartItems(prev => 
    //     prev.map(item => 
    //       item.id === id ? { ...item, quantity: newQuantity } : item
    //     )
    //   );
    // };
  
    // const removeItem = (id) => {
    //   setCartItems(prev => prev.filter(item => item.id !== id));
    // };
  
    // const getTotalPrice = () => {
    //   return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    // };
  
    // const getTotalItems = () => {
    //   return cart.reduce((total, item) => total + item.quantity, 0);
    // };

    // const [data, setData] = useState([
    //   {
    //     id: "01092590327",
    //     productName: "Quick Heal Antivirus Pro 1 User 3 Years",
    //     price: 900,
    //     quantity: 1,
    //     licenseKey: "For Key Please Contact Support@dantivirus.com",
    //     date: "01-09-2025",
    //     software: "",
    //     invoice: ""
    //   },
    //   {
    //     id: "04082486707",
    //     productName: "",
    //     price: 339,
    //     quantity: 1,
    //     licenseKey: "6J828-6WD2F-57003-14910",
    //     date: "04-08-2024",
    //     software: "",
    //     invoice: ""
    //   },
    //   {
    //     id: "99768352",
    //     productName: "",
    //     price: 339,
    //     quantity: 1,
    //     licenseKey: "0Q784-1B2F2-73270-C1A0D",
    //     date: "07-01-2023",
    //     software: "",
    //     invoice: ""
    //   },
    //   {
    //     id: "78069950",
    //     productName: "Upgrade Quick User 3 Years",
    //     price: 749,
    //     quantity: 1,
    //     licenseKey: "U2632",
    //     date: "12-2022",
    //     software: "",
    //     invoice: ""
    //   },
    //   {
    //     id: "45004416",
    //     productName: "",
    //     price: 339,
    //     quantity: 1,
    //     licenseKey: "7B100-8BA77-24FB1-05121",
    //     date: "09-11-2022",
    //     software: "",
    //     invoice: ""
    //   }
    // ]);
  
    const [visibleRows, setVisibleRows] = useState(cart.length);
    
    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        // You could add a toast notification here
        console.log('Copied to clipboard:', text);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
  
    const handleDownload = (id) => {
      console.log('Download for ID:', id);
      // Add your download logic here
    };
  
    const handleInvoice = (id) => {
      console.log('Invoice for ID:', id);
      // Add your invoice logic here
    };
  
    const loadMore = () => {
      setVisibleRows(prev => Math.min(prev + 3, data.length));
    };

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yyyy = today.getFullYear();
    
    const formattedDate = `${dd}/${mm}/${yyyy}`;
    // console.log(formattedDate); 

   return (
     <div className="min-h-screen bg-gray-50 py-8">

      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">
            {getTotalItems()} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Cart Items</h2>
                
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, id) => (
                      <div key={id} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                       
                        <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiA5VjE1TTkgMTJIMTVNMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA3LjAyOTQ0IDcuMDI5NDQgMyAxMiAzQzE2Ljk3MDYgMyAyMSA3LjAyOTQ0IDIxIDEyWiIgc3Ryb2tlPSIjOUI5QkEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
                            }}
                          />
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                              {item.category && (
                                <p className="text-sm text-gray-500">{item.category}</p>
                              )}
                            </div>
                            <p className="text-lg font-bold text-blue-600">{item.price}</p>
                          </div>

                    
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="mt-2 text-right">
                            <p className="text-sm text-gray-600">
                              Subtotal: <span className="font-semibold">₹{item.price * item.quantity}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({getTotalItems()})</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>₹50</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{Math.round(getTotalPrice() * 0.1)}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{Number(getTotalPrice() + 50 +  Math.round(getTotalPrice() * 0.1))}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4">
                  Proceed to Checkout
                </button>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div className="min-h-screen bg-gray-100 py-4 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">User History</h1>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Key</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Software</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.slice(0, visibleRows).map((item, index) => (
                 <tr
                 key={item.id}
                 className="bg-green-50 hover:bg-green-100 even:bg-gray-50 even:border-green-600
                         border-2    hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer"
               >
                    <td className="px-4 py-4 text-sm text-gray-900">{"45587169857"}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      <div>
                        {item.name && <div className="font-medium">{item.name}</div>}
                        <div className="text-gray-600">Price: {item.price}</div>
                        {/* <div className="text-gray-600">Qty: {item.quantity}</div> */}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">{item.licenseKey}</span>
                          <span className="text-gray-700">abcdef</span>
                        <button 
                         onClick={() => {
                          copyToClipboard("text")
                          toast.success("Copied")
                        }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">{formattedDate}</td>
                    <td className="px-4 py-4 text-sm">
                      <button 
                        onClick={() => handleDownload(item.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-xs font-medium"
                      >
                        DOWNLOAD
                      </button>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button 
                        onClick={() => handleInvoice(item.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs font-medium"
                      >
                        #INVOICE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4 p-4">
            {cart.slice(0, visibleRows).map((item, index) => (
              <div 
                key={item.id} 
                className={`rounded-lg p-4 border ${index === 0 ? "bg-green-50 border-green-400 border-2" : "bg-white border-gray-200"}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">ID: {item.id}</div>
                    <div className="text-sm text-gray-600">{formattedDate}</div>
                  </div>
                </div>
                
                {item.name && (
                  <div className="mb-3">
                    <div className="font-medium text-gray-900">{item.name}</div>
                  </div>
                )}
                
                <div className="mb-3">
                  <div className="text-sm text-gray-600">Price: ₹{item.price} | Qty: {item.quantity}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">License Key:</div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-800 flex-1 break-all">{item.licenseKey}</span>
                    <span className="text-gray-700">{key}</span>
                    <button 
                      onClick={() => {
                        copyToClipboard("text")
                        toast.success("Copied")
                      }}
                      className="text-blue-600 hover:text-blue-800 flex-shrink-0"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleDownload(item.id)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    DOWNLOAD
                  </button>
                  <button 
                    onClick={() => handleInvoice(item.id)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    #INVOICE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleRows < cart.length && (
            <div className="p-4 text-center border-t border-gray-200">
              <button 
                onClick={loadMore}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 mx-auto"
              >
                Load More
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Cart