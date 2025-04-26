// types.ts
export type FiltersType = {
    minPrice: number;
    maxPrice: number;
    category: string;
    rating: number;
  };
export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};  