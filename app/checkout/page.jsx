'use client';
import { useSearchParams } from 'next/navigation';
import { STORE } from '@/config/store';

export default function Checkout(){
 const p = JSON.parse(useSearchParams().get('product'));
 const text = `INVOICE SHINE\nProduk: ${p.name}\nHarga: Rp ${p.price}`;
 return <a href={`https://wa.me/${STORE.wa}?text=${encodeURIComponent(text)}`} className="p-4 bg-green-600">Checkout WA</a>
}