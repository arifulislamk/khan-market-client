const electronicProducts = [
  {
    productId: "ELC001",
    name: "iPhone 5s",
    category: "Smartphones",
    brand: "Apple",
    price: 18500,
    discountPrice: 16900,
    stock: 25,
    rating: 4.2,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
  },

  {
    productId: "ELC002",
    name: "iPhone 6",
    category: "Smartphones",
    brand: "Apple",
    price: 22000,
    discountPrice: 19900,
    stock: 30,
    rating: 4.3,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
  },

  {
    productId: "ELC003",
    name: "iPhone 13 Pro",
    category: "Smartphones",
    brand: "Apple",
    price: 115000,
    discountPrice: 105000,
    stock: 12,
    rating: 4.8,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
  },

  {
    productId: "ELC004",
    name: "iPhone X",
    category: "Smartphones",
    brand: "Apple",
    price: 65000,
    discountPrice: 59900,
    stock: 18,
    rating: 4.5,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
  },

  {
    productId: "ELC005",
    name: "Oppo A57",
    category: "Smartphones",
    brand: "Oppo",
    price: 24000,
    discountPrice: 21900,
    stock: 35,
    rating: 4.1,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
  },

  {
    productId: "ELC006",
    name: "Oppo F19 Pro Plus",
    category: "Smartphones",
    brand: "Oppo",
    price: 38000,
    discountPrice: 34900,
    stock: 20,
    rating: 4.4,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
  },

  {
    productId: "ELC007",
    name: "Oppo K1",
    category: "Smartphones",
    brand: "Oppo",
    price: 30000,
    discountPrice: 27900,
    stock: 22,
    rating: 4.2,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
  },

  {
    productId: "ELC008",
    name: "Realme C35",
    category: "Smartphones",
    brand: "Realme",
    price: 21000,
    discountPrice: 18900,
    stock: 40,
    rating: 4.3,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
  },

  {
    productId: "ELC009",
    name: "Realme X",
    category: "Smartphones",
    brand: "Realme",
    price: 28000,
    discountPrice: 25900,
    stock: 15,
    rating: 4.1,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
  },

  {
    productId: "ELC010",
    name: "Realme XT",
    category: "Smartphones",
    brand: "Realme",
    price: 32000,
    discountPrice: 29900,
    stock: 17,
    rating: 4.4,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
  },

  {
    productId: "ELC011",
    name: "Samsung Galaxy S7",
    category: "Smartphones",
    brand: "Samsung",
    price: 28000,
    discountPrice: 24900,
    stock: 24,
    rating: 4.2,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
  },

  {
    productId: "ELC012",
    name: "Samsung Galaxy S8",
    category: "Smartphones",
    brand: "Samsung",
    price: 35000,
    discountPrice: 31900,
    stock: 16,
    rating: 4.5,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
  },

  {
    productId: "ELC013",
    name: "Samsung Galaxy S10",
    category: "Smartphones",
    brand: "Samsung",
    price: 55000,
    discountPrice: 49900,
    stock: 14,
    rating: 4.6,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
  },

  {
    productId: "ELC014",
    name: "Vivo S1",
    category: "Smartphones",
    brand: "Vivo",
    price: 26000,
    discountPrice: 23900,
    stock: 28,
    rating: 4.2,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
  },

  {
    productId: "ELC015",
    name: "Vivo V9",
    category: "Smartphones",
    brand: "Vivo",
    price: 29000,
    discountPrice: 26900,
    stock: 21,
    rating: 4.1,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
  },

  {
    productId: "ELC016",
    name: "iPad Mini 2021 Starlight",
    category: "Tablets",
    brand: "Apple",
    price: 65000,
    discountPrice: 59900,
    stock: 10,
    rating: 4.7,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
  },

  {
    productId: "ELC017",
    name: "Samsung Galaxy Tab S8 Plus",
    category: "Tablets",
    brand: "Samsung",
    price: 72000,
    discountPrice: 67900,
    stock: 8,
    rating: 4.7,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
  },

  {
    productId: "ELC018",
    name: "Amazon Echo Plus",
    category: "Smart Devices",
    brand: "Amazon",
    price: 14500,
    discountPrice: 12900,
    stock: 20,
    rating: 4.6,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
  },

  {
    productId: "ELC019",
    name: "Apple AirPods",
    category: "Audio",
    brand: "Apple",
    price: 22000,
    discountPrice: 19900,
    stock: 32,
    rating: 4.5,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
  },

  {
    productId: "ELC020",
    name: "Apple AirPods Max Silver",
    category: "Audio",
    brand: "Apple",
    price: 65000,
    discountPrice: 59900,
    stock: 9,
    rating: 4.8,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
  },
];

export default electronicProducts;
