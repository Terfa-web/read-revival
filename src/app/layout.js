import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Read Revival Homepage",
    template: " %s | Read Revival"
  },
  description: 'Yes, I can read.',
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  )
}