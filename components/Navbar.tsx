'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        setActiveSection(id);
        window.history.pushState(null, '', `#${id}`);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-4xl rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
            : 'bg-neutral-950/50 backdrop-blur-lg border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href={isHomePage ? '#home' : '/#home'}
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-2.5 text-white"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600/30 to-white/10 border border-white/15 text-xs font-bold tracking-wider text-white transition-all duration-300 group-hover:border-purple-400 group-hover:scale-105">
            <span>NS</span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            const targetHref = isHomePage ? `#${item.id}` : `/#${item.id}`;

            return (
              <li key={item.id}>
                <Link
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:text-white hover:bg-white/10"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 w-full max-w-4xl rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl p-4 shadow-2xl transition-all duration-200">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              const targetHref = isHomePage ? `#${item.id}` : `/#${item.id}`;

              return (
                <li key={item.id}>
                  <Link
                    href={targetHref}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-white/10 font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
