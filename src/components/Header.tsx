"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-gold/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-14 w-48"
            >
              <Image
                src="/logoahsan.jpg"
                alt="Ahsan & Sons Jewellers"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center space-x-3"
            >
              <a
                href="tel:+923212034077"
                className="text-white/80 hover:text-gold transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ahsan_sons_jewellers/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/ahsanjewellers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/90 hover:text-gold transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white/90 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gold/20">
                  <a
                    href="tel:+923212034077"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ahsan_sons_jewellers/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/ahsanjewellers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}