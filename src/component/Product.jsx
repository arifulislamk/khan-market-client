// import React from "react";
// import data from "../assets/data";
import ProductCard from "../component/ProductCard";
// import axios from "axios";
import useAxiosCommon from "../hooks/useAxiosCommon";
import {  useQuery } from "@tanstack/react-query";

const Product = () => {
  // console.log(data, "data");
  const axiosPublic = useAxiosCommon();

  const { data: data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/product");
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5 lg:px-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Featured Products</h1>
        <div className="mt-2 h-1 w-20 rounded-full bg-amber-400"></div>
      </div>
      <div
        className="
          grid
          grid-cols-2
          gap-2
          sm:grid-cols-3
          sm:gap-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          2xl:grid-cols-7
          2xl:gap-4
        "
      >
        {data?.map((product) => (
          <ProductCard key={product?.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
