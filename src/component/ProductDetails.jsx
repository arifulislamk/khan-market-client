import React, { useState } from "react";
import data from "../assets/data";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(1);
    console.log(product,"pai")
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-8">
        {/* Product */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-150"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-yellow-600 font-medium mb-2">
              {product.category}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-400 text-lg line-through">
                ৳{product.regularPrice}
              </span>

              <span className="text-3xl font-bold text-yellow-600">
                ৳{product.specialPrice}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-gray-100 text-xl"
              >
                −
              </button>

              <span className="w-10 text-center font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-gray-100 text-xl"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 rounded-xl border-2 border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-600 hover:text-white transition">
                Add to Cart
              </button>

              <button className="flex-1 py-3 rounded-xl bg-black text-white font-semibold hover:bg-yellow-600 transition">
                Order করুন
              </button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-10 pt-7 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Details
          </h2>

          <p className="text-gray-600 leading-7">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
