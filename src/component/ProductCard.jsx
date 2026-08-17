import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-44 w-full items-center justify-center overflow-hidden bg-white p-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Product Information */}
      <div className="px-3 pb-4 pt-2 text-center">

        {/* Category */}
        <p className="mb-1 text-sm font-semibold capitalize text-gray-500">
          {product.category}
        </p>

        {/* Product Name */}
        <h2
          className="min-h-[42px] text-sm font-medium leading-5 text-gray-800"
          title={product.name}
        >
          {product.name}
        </h2>

        {/* Price */}
        <p className="mt-2 text-lg font-bold text-gray-900">
          Tk {product.price.toLocaleString()}
        </p>

      </div>
    </div>
  );
};

export default ProductCard;