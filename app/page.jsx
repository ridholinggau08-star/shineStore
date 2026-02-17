'use client';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { DEFAULT_PRODUCTS } from '@/data/products';

export default function Home() {
  const sorted = [...DEFAULT_PRODUCTS].sort((a,b)=>a.price-b.price);
  return (
    <>
      <Navbar />
      <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {sorted.map(p => <ProductCard key={p.id} product={p} />)}
      </main>
    </>
  );
}