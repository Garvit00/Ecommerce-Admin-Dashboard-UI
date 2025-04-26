"use client";

import { useProducts } from "@/hooks/Products";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard";
import Filters from "@/components/Filters";

export default function ProductsPage() {
  const {user} = useAuth();
  const router = useRouter();
  const { data: products, isLoading, isError } = useProducts();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    category: "",
    rating: 0
  });

  const [showFilterModal, setShowFilterModal] = useState(false);
  
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    setShowFilterModal(false);
  };


  const filteredProducts = products?.filter((product: any) => {
    const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const categoryMatch = filters.category ? product.category === filters.category : true;
    const ratingMatch = filters.rating ? Math.floor(product.rating.rate) >= filters.rating : true;
    return priceMatch && categoryMatch && ratingMatch;
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to fetch products.</p>;

  const handleReset = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 10000,
      category: "",
      rating: 0,
    });
  };

  return (
    <div className="p-6 space-y-6 relative">
    {/* Filter Button */}
    <div className="flex justify-end">
      <button
        onClick={() => setShowFilterModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Filters
      </button>
      <button
          onClick={handleReset}
          className="mx-4 px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset
        </button>
    </div>

    {/* Product List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts?.length ? (
        filteredProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => router.push(`/products/${product.id}`)}
          />
        ))
      ) : (
        <p>No products match your filters.</p>
      )}
    </div>

    {/* Filters Modal */}
    {showFilterModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <Filters
          initialFilters={filters}
          onApply={handleApplyFilters}
          onClose={() => setShowFilterModal(false)}
        />
      </div>
    )}
  </div>
  );
}
