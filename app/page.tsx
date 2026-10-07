import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}