import './globals.css';
import FloatingWA from '@/components/FloatingWA';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}<FloatingWA/></body>
    </html>
  );
}