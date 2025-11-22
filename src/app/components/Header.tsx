'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDove, FaPhone, FaLeaf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Notice', href: '/notice' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-sage-100' 
          : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Enhanced with peaceful theme */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="group flex items-center space-x-3 transition-all duration-300" aria-label="Nerul Cemetery Home">
              <div className="relative w-12 h-12 bg-linear-to-br from-sage-600 to-sage-800 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-sage-400/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaDove className="relative text-white text-xl drop-shadow-md" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-stone-800 group-hover:text-sage-700 transition-colors duration-300 tracking-tight">
                  Nerul Cemetery
                </span>
                <span className="text-[10px] text-stone-500 tracking-wide flex items-center gap-1">
                  <FaLeaf className="text-sage-500 text-[8px]" aria-hidden="true" />
                  Navi Mumbai
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex md:items-center md:gap-2"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                    isActive
                      ? 'text-sage-700'
                      : 'text-stone-600 hover:text-sage-700'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator - Modern pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-linear-to-r from-sage-50 to-sage-100 rounded-xl border border-sage-200/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-sage-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'hidden' : ''}`}></div>
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 group relative inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-sage-600 to-sage-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-sage-700 to-sage-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <FaPhone className="relative z-10 text-xs" />
              <span className="relative z-10">Call Now</span>
            </Link>
          </motion.div>

          {/* Mobile menu button - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex md:hidden"
          >
            <button
              type="button"
              className="relative p-2.5 text-stone-700 hover:text-sage-700 bg-sage-50/50 hover:bg-sage-100 rounded-xl transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu - Enhanced with animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 py-3 px-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-linear-to-r from-sage-100 to-sage-50 text-sage-800 border border-sage-200 shadow-sm'
                            : 'text-stone-700 hover:bg-sage-50 active:bg-sage-100'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {isActive && (
                          <div className="w-1.5 h-1.5 bg-sage-600 rounded-full"></div>
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                  className="pt-4 border-t border-sage-100"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-linear-to-r from-sage-600 to-sage-700 text-white text-base font-semibold rounded-xl shadow-md active:scale-95 transition-transform duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaPhone className="text-sm" />
                    <span>Contact Us Now</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
