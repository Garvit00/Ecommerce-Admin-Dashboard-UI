"use client";

import { useProducts } from "@/hooks/Products";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const { data: products, isLoading, isError } = useProducts();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  if (isLoading) return <p>Loading analytics...</p>;
  if (isError) return <p>Failed to fetch products.</p>;

  if (!products || products.length === 0) return <p>No products available.</p>;

  // Calculate analytics
  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0); // <--- 0 is the initial value
  const averagePrice = (totalPrice / totalProducts).toFixed(2);

  const totalRating = products.reduce((sum, product) => sum + (product.rating?.rate || 0), 0);
  const averageRating = (totalRating / totalProducts).toFixed(1);

  const highestPrice = Math.max(...products.map((product) => product.price));
  const lowestPrice = Math.min(...products.map((product) => product.price));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center" style={{ background: "var(--login-background)", color: "var(--login-foreground)" }}>
          <p className="text-gray-500 dark:text-gray-400">Total Products</p>
          <h2 className="text-3xl font-bold">{totalProducts}</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center" style={{ background: "var(--login-background)", color: "var(--login-foreground)" }}>
          <p className="text-gray-500 dark:text-gray-400">Average Price</p>
          <h2 className="text-3xl font-bold">${averagePrice}</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center" style={{ background: "var(--login-background)", color: "var(--login-foreground)" }}>
          <p className="text-gray-500 dark:text-gray-400">Average Rating</p>
          <h2 className="text-3xl font-bold">{averageRating} ⭐</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center" style={{ background: "var(--login-background)", color: "var(--login-foreground)" }}>
          <p className="text-gray-500 dark:text-gray-400">Price Range</p>
          <h2 className="text-2xl font-bold">${lowestPrice} - ${highestPrice}</h2>
        </div>
      </div>
    </div>
  );
}
