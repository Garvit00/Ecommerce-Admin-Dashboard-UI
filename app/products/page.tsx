"use client";

import { useProducts } from "@/hooks/Products";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductCard from "@/components/productCard";

export default function ProductsPage() {
  const {user} = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to fetch products.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => {
            router.push(`/products/${product.id}`);
          }}
        />
      ))}
    </div>
  );
}
