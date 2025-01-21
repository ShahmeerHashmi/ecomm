export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  color?: string;
  size?: string;
  discount?: number;
  features?: string[];
  rating?: number;
}

export type ProductCategory = 'featured' | 'latest' | 'trending' | 'discount';
