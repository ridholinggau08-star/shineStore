'use client';
import { useRouter } from 'next/navigation';
export default function ProductCard({product}){
 const r=useRouter();
 return <div onClick={()=>r.push('/checkout?product='+encodeURIComponent(JSON.stringify(product)))}>{product.name}</div>
}