export type Review = {
  id: string;
  name: string;
  description: string;
  rating: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  reviews: Review[];
};

export type History = {
  id: string;
  date: string;
  total: number;
  status: string;
  items: Product[] & { quantity: number }[];
};
