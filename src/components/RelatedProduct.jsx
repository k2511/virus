import React, {useState} from 'react'
import { Star, MessageCircle,ShoppingCart, BarChart3, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE_URL = "http://localhost:5000/";

const RelatedProduct = ({handleScroll, products}) => {
    const navigate = useNavigate();

    const [visibleProducts, setVisibleProducts] = useState(4);

    // const products = [
    //     {
    //       id: 1,
    //       category: "Total Security",
    //       name: "Quick Heal Total Security 1 PC 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_12_13_50.png",
    //       price: "₹79.00",
    //       originalPrice: "₹99.00",
    //       available: 6,
    //       sold: 28,
    //     },
    //     {
    //       id: 2,
    //       category: "Total Security",
    //       name: "Quick Heal Total Security 1 PC 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/A_New_Design_-_Made_with_PosterMyWall09_17_10_53_46.jpg",
    //       price: "₹29.99",
    //       originalPrice: "₹39.99",
    //     },
    //     {
    //       id: 3,
    //       category: "Internet Security",
    //       name: "Quick Heal Internet Security 1 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_14_16_54_16.png",
    //       price: "₹49.99",
    //       originalPrice: "₹59.99",
    //     },
    //     {
    //       id: 4,
    //       category: "Antivirus Pro",
    //       name: "Upgrade Quick Heal Antivirus Pro 1 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_13_02_12.png",
    //       price: "₹69.99",
    //       originalPrice: "₹79.99",
    //     },
    //     {
    //       id: 5,
    //       category: "Total Security",
    //       name: "Upgrade Quick Heal Total Security 1 User 1 Year",
    //       image: "https://avatars.mds.yandex.net/i?id=0a366ba961fd7fe4444dedd6867a082aa6181972-4415285-images-thumbs&n=13.png",
    //       price: "₹24.99",
    //       originalPrice: "₹34.99",
    //     },
    //     {
    //       id: 6,
    //       category: "Upgrade",
    //       name: "Upgrade Quick Heal Total Security 1 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/upgrade-quick-heal-total-security08_17_13_28_37.png",
    //       price: "₹39.99",
    //       originalPrice: "₹49.99",
    //     },
    //     {
    //       id: 7,
    //       category: "Antivirus Pro",
    //       name: "Quick Heal Antivirus Pro 1 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_59_20.png",
    //       price: "₹54.99",
    //       originalPrice: "₹64.99",
    //     },
    //     {
    //       id: 8,
    //       category: "Upgrade",
    //       name: "Upgrade Quick Heal Antivirus Pro 1 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_11_00_27.png",
    //       price: "₹19.99",
    //       originalPrice: "₹29.99",
    //     },
    //     {
    //       id: 9,
    //       category: "Antivirus Pro",
    //       name: "Quick Heal Antivirus Pro 2 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_51_22.png",
    //       price: "₹34.99",
    //       originalPrice: "₹44.99",
    //     },
    //     {
    //       id: 10,
    //       category: "Antivirus Pro",
    //       name: "Quick Heal Antivirus Pro 3 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_13_06_15.png",
    //       price: "₹49.99",
    //       originalPrice: "₹59.99",
    //     },
    //     {
    //       id: 11,
    //       category: "Total Security",
    //       name: "Upgrade Quick Heal Total Security 2 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_38_32.png",
    //       price: "₹59.99",
    //       originalPrice: "₹69.99",
    //     },
    //     {
    //       id: 12,
    //       category: "Total Security",
    //       name: "Upgrade Quick Heal Total Security 3 User 1 Year",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_07_07.png",
    //       price: "₹49.99",
    //       originalPrice: "₹59.99",
    //     },
    //     {
    //       id: 13,
    //       category: "Total Security",
    //       name: "Upgrade Quick Heal Total Security 3 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_08_03.png",
    //       price: "₹39.99",
    //       originalPrice: "₹49.99",
    //     },
    //     {
    //       id: 14,
    //       category: "Internet Security",
    //       name: "Upgrade Quick Heal Internet Security 1 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_17_10_54_32.png",
    //       price: "₹39.99",
    //       originalPrice: "₹49.99",
    //     },
    //     {
    //       id: 15,
    //       category: "Total Security",
    //       name: "Upgrade Quick Heal Total Security 5 User 3 Years",
    //       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_43_41.png",
    //       price: "₹39.99",
    //       originalPrice: "₹49.99",
    //     },
    //   ];

      const handleViewMore = () => {
        setVisibleProducts((prev) => prev + 4);
      }

  return (
    <>
    <section className='mx-5'>
    <div className="pb-10">
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl ">Related Product</h1>
    </div>

    <div className=''>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts)
            .map((product,idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"  
                onClick={() => {
                  navigate(`/new-section-details/${encodeURIComponent(product.pname)}`, {
                    state: { 
                      image: `${IMAGE_BASE_URL}${product.pic1}` , 
                      price: product.oprice, 
                      category: product.cname,
                      originalPrice: product.mprice,
                      stock : product.no_of_stock,
                      products: products.filter((p) => p.bname === product.bname) 
                    },
                  });
                
                  handleScroll("section1"); 
                }}
                
              >
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="text-xs text-gray-500 mb-2">{product.cname}</div>

                  <h3 className="text-blue-600 font-medium text-sm mb-3 line-clamp-2 hover:underline">
                    {product.pname}
                  </h3>

                  <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
                    <img
                      src={`${IMAGE_BASE_URL}${product.pic1}`}
                      alt={product.pname}
                      className="max-w-full sm:w-full w-40 sm:h-full h-40 object-contain"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.mprice && (
                        <span className="text-xs text-gray-500 line-through">
                          {product.mprice}
                        </span>
                      )}
                      <span className="text-lg font-semibold text-gray-900">
                        {product.oprice}
                      </span>
                    </div>

                    <button 
                      className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                    <button 
                      className="flex items-center gap-1 hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.success("Added to compare list!");
                      }}
                    >
                      <BarChart3 className="w-3 h-3" />
                      Compare
                    </button>
                    <button 
                      className="flex items-center gap-1 hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.success("Added to wishlist!");
                      }}
                    >
                      <Heart className="w-3 h-3" />
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className='text-center my-5'>
            {visibleProducts < products.length && (
                <button
                  onClick={handleViewMore}
                  className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              )} 
        </div>
    </div>
  </section> 
  </>
  )
}

export default RelatedProduct