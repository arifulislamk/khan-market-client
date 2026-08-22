import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { AuthContext } from "../Authentication/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const axiosPublic = useAxiosCommon();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const discount = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100,
  );
  const saving = product.price - product.discountPrice;

  const productInfo = [
    ["Product ID", product.productId],
    ["Brand", product.brand],
    ["Category", product.category],
    ["Rating", `★ ${product.rating} / 5`],
  ];

  const features = [
    ["SECURE", "PAYMENT"],
    ["FAST", "DELIVERY"],
    ["AUTHENTIC", "PRODUCTS"],
  ];

  const { mutate } = useMutation({
    mutationFn: (data) => axiosPublic.post("/cart", data),
    onSuccess: () => {
      console.log("post hoise cart data");
      setModal(true);
      setTimeout(() => setModal(false), 1500);
    },
    onError: (error) => {
      if (error.response?.status === 409) {
        console.log("Already cart e ache");
        return;
      }
      console.log("Cart e add korte problem hoise", error);
    },
  });

  const cartdata = {
    name: user?.displayName,
    email: user?.email,
    id: product._id,
  };

  const saveLocal = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(product._id)) {
      localStorage.setItem("cart", JSON.stringify([...cart, product._id]));
    }
  };

  const handleAddCart = () => {
    if (user) mutate(cartdata);
    else saveLocal();
  };
  const handleBuyNow = () => {
    if (user) {
      mutate(cartdata, {
        onSuccess: () => {
          navigate("/cart");
        },
        onError: (error) => {
          if (error.response?.status === 409) {
            navigate("/cart");
            return;
          }
          console.log("Buy Now failed:", error);
        },
      });
    } else {
      saveLocal();
      navigate("/cart");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] py-5 md:py-7 px-4">
      {modal && (
        <div className="fixed top-5 right-5 z-50 bg-gray-950 text-white px-4 py-3 rounded-lg shadow-lg text-sm">
          Product added to cart ✓
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/">
            <span className="hover:text-[#b08a20] cursor-pointer transition">
              Home
            </span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="hover:text-[#b08a20] cursor-pointer transition">
            {product.category}
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-800 font-medium truncate">
            {product.name}
          </span>
        </div>
        <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.07)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#eeeeec] p-5 md:p-7 lg:p-9">
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-950 text-white text-xs font-bold tracking-wider shadow-lg">
                  {discount}% OFF
                </span>
              </div>
              <button className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl text-gray-600 hover:text-[#b08a20] hover:border-[#b08a20] transition duration-300">
                ♡
              </button>
              <div className="h-[330px] md:h-[400px] lg:h-[465px] flex items-center justify-center rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain scale-110 lg:scale-[1.25] drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)] transition duration-700 hover:scale-[1.3]"
                />
              </div>
              <div className="flex justify-between items-end mt-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    Product ID
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {product.productId}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    Brand
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {product.brand}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 lg:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ad861b]">
                  {product.category}
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-300" />

                <span
                  className={`text-xs font-semibold ${
                    product.stock > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-950 leading-[1.1] tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex gap-[2px] text-[#d2a928] text-lg">
                  ★★★★★
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-400">Customer Rating</span>
              </div>
              <div className="h-px bg-gray-200 my-5" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">
                  Our Price
                </p>
                <div className="flex flex-wrap items-end gap-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
                    ৳{product.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through mb-1">
                    ৳{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-semibold text-green-600">
                    Save ৳{saving.toLocaleString()}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-sm text-gray-500">Limited offer</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Availability</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {product.stock} units available
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c49a24] rounded-full transition-all"
                    style={{
                      width: `${Math.min(product.stock * 4, 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-gray-200">
                {features.map(([title, subtitle], index) => (
                  <div
                    key={title}
                    className={
                      index === 1 ? "border-x border-gray-200 px-4" : ""
                    }
                  >
                    <p className="text-xs font-bold text-gray-900">{title}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <button
                  onClick={handleAddCart}
                  disabled={product.stock === 0}
                  className="h-14 rounded-xl border-2 border-gray-900 bg-white text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="h-14 rounded-xl bg-gray-950 text-white font-bold hover:bg-[#c49a24] hover:text-black transition duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 md:p-8 lg:p-9">
            <div className="flex items-center gap-4 mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-gray-950">
                Product Information
              </h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {productInfo.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-[#f8f8f6] border border-gray-200 p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
                    {label}
                  </p>
                  <p className="mt-2 font-bold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
