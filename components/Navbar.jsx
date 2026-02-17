import { STORE } from '@/config/store';
export default function Navbar(){return <nav className="p-4 bg-black">{STORE.name}</nav>}