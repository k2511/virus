import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecentlyViewedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "Windows 10 Home",
      price: "$139.00",
      image: "https://avatars.mds.yandex.net/i?id=50bc55deea68a40cb15789b52cff24d194458ded-4575688-images-thumbs&n=13",
    },
    {
      name: "Windows 10 Pro",
      price: "$199.00",
      image: "https://yandex-images.clstorage.net/IYne55096/80a550gI/rbyhKByyM4GwqZ14PbiILvWhu6c8s2g28Jwo9FzfIjeIrYYWc-p3Sc_v8VmAKVnIyYLtM1ei-5FoF2bPBO5p_DjdlAkYdkeQdXyJ2cj4CB6lgG5zDaKtlrVNjNGZOxISSF0DcABNdU55nTc-R37eCRzyLSaGE17xiPEALmGsv2y8_GPKb9CS9UK5_C4tGqo-NrNcR-3i_VSX7OnzGriUkp8Y9hOjDXR8a_2XPIWM_0js8n-XxgQfk9rDowlRbYy8Hp3Qu77xcmQCi57vfjqoDMbwHCc_c3z3500YQ0toV9MvaqRwoh2lDmo9Br5WLj5afvAMdYc330ArUME60y48Xh0MkBu8YgP289k-jqx5ue3nwS7nb3DONoWvquNrCYfCb-i2IeEvFd1orOUPxYyNSbxx38fHpc7S6TAz62OM_hw8nZH7PYMCphHqXw3-qFmex5EdhL5wnVTH3sgjKVgkkIy5VILhrQWs-X6WvsU8DEkeMixWt4efskiB0Xvin73t39_ieQ2ho-fwa51ebxm6TpcCbOfM016EdG7ZMqiIhVAfyHYy0h3kXQk8lr43rw64LtHtpeV0v9OIs6M4Mb6cPt8PoUot8pGFcotOPB7p-_01ka_lL9OPZ1euCKC6eoSw7WlEE6NfFDwK7pSuNC9dad6zTFd1tvzTWzBRCFHuDB0cLPI4fhJwRlKani1-uDjcJ0AdNpwA7vSGTsmDuJrWgZ4oZCGwPyT_Sx_k3CVsvdrsEL3kZcauoSkTwchBLY3c7x6Ri4-Do_WyCl5ezsr6DSTgj2fNgQ6FdgxIk9taVgGuyYajEtwGTIkMVr6Hnuypz3O9lgWl3eOLYuC5829t_P3vkQv_wzO30OmM38yJ2u6HA7wHT7I-pFfuKqHbSSchPQhmwMN_pkzrD2Us9C6euhwwXfZG9QwDmRJymRF_XB4PXPGIHDJg93IZTv59qhvf1GEOB55AD4ZFPNpDqaj1s",
    },
    {
      name: "Windows 11 Home",
      price: "$139.00",
      image: "https://avatars.mds.yandex.net/i?id=c33e1f6613279a15ff2b65d2ecca6a5bb9fe1a68-4374572-images-thumbs&n=13",
    },
    {
      name: "Windows 11 Pro",
      price: "$199.00",
      image: "https://avatars.mds.yandex.net/i?id=58d1f19b0a71da499968ddc6f3b33acfa3387d1d-5235855-images-thumbs&n=13",
    },
    {
      name: "Microsoft 365 Personal",
      price: "$69.99/year",
      image:"https://avatars.mds.yandex.net/i?id=6d797b1156e9223e59c9dab9bc5e81a608bd9fdd-5315965-images-thumbs&n=13",
    },
     {
      name: "Microsoft 365 Family",
      price: "$99.99/year",
      image:"https://avatars.mds.yandex.net/i?id=e3b457271ddd4397d062d0d203d47367-5242896-images-thumbs&n=13",
    },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  const startIdx = currentIndex * itemsPerPage;
  const visibleProducts = products.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full flex justify-center px-4 py-6">
      <div className="w-full max-w-6xl bg-black  p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Microsoft Products
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaArrowLeft className="text-gray-600 text-sm sm:text-base" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaArrowRight className="text-gray-600 text-sm sm:text-base" />
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div className="flex overflow-x-auto space-x-3 sm:space-x-4 py-2 scrollbar-hide justify-center">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] bg-gray-50 border rounded-lg p-2 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2"
              />
              <p className="text-[10px] sm:text-xs md:text-sm text-blue-600 text-center line-clamp-2">
                {product.name}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                {product.price}
              </p>
              <span className="text-yellow-500 text-lg sm:text-xl mt-1">🛒</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedSlider;