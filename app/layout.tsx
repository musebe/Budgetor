import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import RootProviders from '@/components/providers/RootProviders';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Budgetor',
  description:
    'Streamline your finances with our user-friendly budget tracker. Efficiently manage expenses, track savings, and achieve your financial goals with ease. Perfect for smart budgeting on the go.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className='dark'
        style={{
          colorScheme: 'dark',
        }}
      >
        <body className={inter.className}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
