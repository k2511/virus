import React,{useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Star,  MessageCircle } from 'lucide-react';
import { GrFacebookOption } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'
import toast from 'react-hot-toast';



const NewSectionDetails = () => {
    const {id} = useParams();
    const location = useLocation();
    const { image, price, category, originalPrice } = location.state || {};

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Reviews');
    
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
  
        
         <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col items-center">
            <p className="text-red-500 text-sm mb-4 italic">Image is for Reference purpose only</p>
            
            <div className="relative w-full max-w-md">
            
              <img src={image} />
            
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-teal-600 font-semibold text-lg">Save 18% GST on business purchase!!</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
               {id}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(4)}</div>
                <span className="text-blue-600 underline text-sm">Total 6 Reviews</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Version</p>
                <p className="font-semibold text-lg">Latest 2023</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Software Download</p>
                <p className="font-semibold text-lg">Stock Available</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Brand Name</p>
                <p className="font-semibold text-lg">Kaspersky</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">HSN</p>
                <p className="font-semibold text-lg">85238020</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Region</p>
                <p className="font-semibold text-lg">India</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-center text-lg mb-2">INSTANT DIGITAL DELIVERY WITHIN 30 SECONDS</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className='w-full'>
                <p className="text-sm text-gray-600 mb-1"></p>
                <div className="flex items-center gap-4 justify-between  w-full">
                    <div>
                          <span className="text-3xl font-bold text-gray-800">{price}</span>
                    </div>
                
                  <div className="text-right ">
                    <p className="text-sm text-gray-600">MRP</p>
                    <p className="text-lg text-gray-400 line-through">{originalPrice}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 border-l border-r border-gray-300 min-w-12 text-center">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
              
              <button className="flex-1 bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-8 rounded transition-colors" onClick={()=>{toast.success("Buy Successfully")}}>
                BUY NOW
              </button>
            </div>

            <div className="flex gap-4 justify-center sm:justify-start">
              <GrFacebookOption className="w-6 h-6 text-blue-600 cursor-pointer transition-colors" />
              <FiInstagram className="w-6 h-6 text-pink-600 cursor-pointer transition-colors" />
              <MessageCircle className="w-6 h-6 text-green-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-2">
            {['Reviews', 'Detail', 'Installation Instruction'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-lime-500 text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="mt-6 p-6 bg-gray-50 rounded-lg min-h-48">
            {activeTab === 'Reviews' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">No reviews available yet. Be the first to review this product!</p>
              </div>
            )}
            {activeTab === 'Detail' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Product Details</h3>
                <p className="text-gray-600 mb-4">
                  Kaspersky Internet Security provides comprehensive protection for your PC with advanced security features.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-time antivirus protection</li>
                  <li>• Advanced firewall</li>
                  <li>• Safe Money for secure online banking</li>
                  <li>• Webcam protection</li>
                  <li>• Privacy protection</li>
                </ul>
              </div>
            )}
            {activeTab === 'Installation Instruction' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Installation Instructions</h3>
                <ol className="text-gray-600 space-y-2">
                  <li>1. Download the software from the provided link</li>
                  <li>2. Run the installer as administrator</li>
                  <li>3. Follow the on-screen installation wizard</li>
                  <li>4. Enter your activation key when prompted</li>
                  <li>5. Complete the initial scan and setup</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewSectionDetails