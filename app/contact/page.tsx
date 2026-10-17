import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/Contact/Contact';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white pt-24">
      <Navbar />
      <div className="mx-auto max-w-6xl py-8">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
