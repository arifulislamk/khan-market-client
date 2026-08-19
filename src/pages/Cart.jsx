import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: "ELC001",
      name: "iPhone 5s",
      category: "Smartphones",
      price: 18500,
      discountPrice: 16900,
      quantity: 1,
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
    },
    {
      productId: "ELC003",
      name: "iPhone 13 Pro",
      category: "Smartphones",
      price: 115000,
      discountPrice: 105000,
      quantity: 1,
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
    },
  ]);

  const [deliveryArea, setDeliveryArea] = useState("dhaka");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items?.map((item) =>
        item?.productId === id
          ? {
              ...item,
              quantity: Math.max(1, Math.min(item.quantity + amount, 10)),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.productId !== id));
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0,
  );

  const deliveryCharge = deliveryArea === "dhaka" ? 60 : 120;
  const totalPrice = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-[#f5f5f3] py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#ad861b] font-bold">
            Khan Market
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mt-1">
            Checkout
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Review your products and complete your order
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_390px] gap-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-950">Your Products</h2>
              <span className="text-sm text-gray-400">
                {cartItems.length} Items
              </span>
            </div>

            {cartItems?.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 py-16 text-center text-gray-400">
                Your cart is empty
              </div>
            ) : (
              cartItems?.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,0.04)] p-3 md:p-4"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg bg-[#f5f5f3] flex items-center justify-center overflow-hidden">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-wider text-[#ad861b] font-bold">
                            {item.category}
                          </p>
                          <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">
                            ID: {item.productId}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.productId)}
                          className="w-7 h-7 shrink-0 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition text-xl leading-none"
                        >
                          ×
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-3 mt-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-bold text-gray-950 text-sm md:text-base whitespace-nowrap">
                            ৳{item.discountPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-gray-400 line-through whitespace-nowrap">
                            ৳{item.price.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center shrink-0">
                          <span className="text-xs text-gray-400 mr-2 hidden sm:block">
                            Qty
                          </span>
                          <div className="flex items-center h-9 rounded-lg border border-gray-300 overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.productId, -1)}
                              className="w-9 h-full bg-gray-50 text-gray-900 font-bold text-lg hover:bg-gray-900 hover:text-white transition"
                            >
                              −
                            </button>
                            <span className="w-10 h-full flex items-center justify-center bg-white text-gray-950 font-bold text-sm border-x border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.productId, 1)}
                              className="w-9 h-full bg-gray-50 text-gray-900 font-bold text-lg hover:bg-gray-900 hover:text-white transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">
                          Subtotal
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          ৳
                          {(
                            item.discountPrice * item.quantity
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5 md:p-6 lg:sticky lg:top-5">
              <h2 className="text-xl font-bold text-gray-950">Checkout Form</h2>
              <p className="text-xs text-gray-400 mt-1">
                Enter your delivery information
              </p>

              <div className="h-px bg-gray-200 my-5" />

              <div className="mb-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Address
                </label>
                <textarea
                  rows="2"
                  placeholder="House, road, area, district..."
                  className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm resize-none focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Another Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Optional"
                    className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Delivery Area
                </label>
                <select
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none text-sm focus:border-[#b08a20]"
                >
                  <option value="dhaka">Inside Dhaka</option>
                  <option value="outside">Outside Dhaka</option>
                </select>
                <p className="text-[11px] text-gray-400 mt-1.5">
                  Dhaka delivery charge ৳60 · Outside Dhaka ৳120
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none text-sm focus:border-[#b08a20]"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="online">Pay Online</option>
                </select>
              </div>

              <div className="h-px bg-gray-200 my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Product Price</span>
                  <span className="font-semibold text-gray-900">
                    ৳{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery Charge</span>
                  <span className="font-semibold text-gray-900">
                    ৳{deliveryCharge}
                  </span>
                </div>
              </div>

              <div className="h-px bg-gray-200 my-4" />

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-700">
                  Total Price
                </span>
                <span className="text-2xl font-extrabold text-gray-950">
                  ৳{totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                type="button"
                className="w-full h-14 mt-5 rounded-xl bg-gray-950 text-white font-bold tracking-wide hover:bg-[#c49a24] hover:text-black transition duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
              >
                ORDER NOW →
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-3">
                🔒 Your information is secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
