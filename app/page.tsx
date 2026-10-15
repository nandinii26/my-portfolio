import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import GlassBackground from '@/components/GlassBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white selection:bg-white selection:text-black">
      <GlassBackground />
      <Hero />  
      <Projects />
      <About />
      <Contact />
    </main>
  );
}