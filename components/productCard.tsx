import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 hover:shadow-md transition" style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain w-full mb-4"
      />
      <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>

      <div className="mt-2 flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <span className="text-sm text-yellow-500">
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      {/* Simulated stock status */}
      <p
        className={`mt-1 text-xs font-medium ${
          product.rating.count > 100 ? "text-green-600" : "text-red-500"
        }`}
      >
        {product.rating.count > 100 ? "In Stock" : "Low Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
