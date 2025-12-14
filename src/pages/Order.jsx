import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const { id } = useParams(); // product id from URL
  const [product, setProduct] = useState(null);

  // Fetch single product
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 grid md:grid-cols-2 gap-6">

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-semibold mb-6">
            Price: <span className="text-blue-600">${product.price}</span>
          </p>

          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Confirm Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Order;

// import React from 'react';

// export default function Order() {
//   return (
//     <div className="container py-5">
//       <h1>Order Page</h1>
//       <p>Order details will be displayed here.</p>
//     </div>
//   );
// }
