"use client";

import { useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useProductById } from "@/hooks/Products";
import { notFound } from "next/navigation";

interface ProductPageProps{
    params: Promise<{id:string}>;
}

export default function ProductPage({params}: ProductPageProps){
    const {user} = useAuth();
    const router = useRouter();
    const {id} = use(params);
    const {data: product, isLoading, isError} = useProductById(id);

    useEffect(() => {
        if (!user) {
          router.push("/login");
        }
      }, [user, router]);
    
    if(!user) {
        return null;
    }

    if(isLoading){
        return <div className="p-6">Loading Product...</div>
    }

    if(isError || !product){
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-96 object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-green-600">${product.price}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rating:</span>
                <span>{product.rating?.rate} ⭐ ({product.rating?.count} reviews)</span>
              </div>
              <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
}