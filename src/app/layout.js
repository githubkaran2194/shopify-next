import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreProvider from '@/redux/storeProvider';
import AOSComponents from '@/components/AOSComponents';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shopify Store',
  description: 'Created by karan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSComponents />
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
