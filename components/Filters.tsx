"use client";

import { useState } from "react";

const categories = ["electronics","jewelery","men's clothing","women's clothing"];
type FiltersType = {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
  };
  
interface FiltersProps {
    initialFilters: FiltersType;
    onApply: (filters: FiltersType) => void;
    onClose: () => void;
  }

export default function Filters({
    initialFilters,
    onApply,
    onClose,
}: FiltersProps)
{
    const [localFilters, setLocalFilters] = useState<FiltersType>(initialFilters);
    const handleChange = (field: keyof FiltersType, value: string | number) => {
        setLocalFilters((prev) => ({ ...prev, [field]: value }));
      };

    return (
        <div className="p-6 rounded-lg w-96" style={{ background: "var(--background)", color: "var(--foreground)" }}>
          <h2 className="text-xl font-semibold mb-6">Filters</h2>
    
          {/* Price Range */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Price Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={localFilters.minPrice}
                onChange={(e) => handleChange("minPrice", Number(e.target.value))}
                className="border p-2 rounded w-1/2"
                placeholder="Min"
              />
              <input
                type="number"
                value={localFilters.maxPrice}
                onChange={(e) => handleChange("maxPrice", Number(e.target.value))}
                className="border p-2 rounded w-1/2"
                placeholder="Max"
              />
            </div>
          </div>
    
          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Category</label>
            <select
              value={localFilters.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
    
          {/* Rating Filter */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleChange("rating", star)}
                  className={`text-2xl ${star <= (localFilters.rating ?? 0) ? "text-yellow-400" : "text-gray-400"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
    
          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => onApply(localFilters)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Apply
            </button>
          </div>
        </div>
      );
}