"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMapPinLine as MapPin, RiPhoneLine as Phone, RiMailLine as Mail, RiTimeLine as Clock, RiInstagramLine as Instagram, RiFacebookLine as Facebook } from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-12 w-36 md:h-14 md:w-44 mb-4">
              <Image
                src="/sunny.jpg"
                alt="Sunny Jewellers"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Your trusted Sunny Jewellers, crafting timeless elegance since generations.
              We specialize in exquisite gold and diamond jewellery.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sunnyjewellers.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/sunnyjewellers.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
               <li>
                 <Link href="/" className="text-white/70 hover:text-gold transition-colors text-sm">
                   Home
                 </Link>
               </li>
               <li>
                 <Link href="/gallery" className="text-white/70 hover:text-gold transition-colors text-sm">
                   Gallery
                 </Link>
               </li>
               <li>
                 <Link href="/about" className="text-white/70 hover:text-gold transition-colors text-sm">
                   About Us
                 </Link>
               </li>
               <li>
                 <Link href="/contact" className="text-white/70 hover:text-gold transition-colors text-sm">
                   Contact
                 </Link>
               </li>
             </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-white/70 text-sm">
                  Ground floor, Shandar Mobile Mall, Barakahu, Islamabad, 45400
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gold mt-1 shrink-0" />
                <a href="tel:03001730313" className="text-white/70 hover:text-gold transition-colors text-sm">
                  0300 1730313
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gold mt-1 shrink-0" />
                <a href="mailto:info@sunnyjewellers.pk" className="text-white/70 hover:text-gold transition-colors text-sm">
                  info@sunnyjewellers.pk
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gold/20 mt-12 pt-8 text-center"
        >
          <p className="text-white/60 text-sm">
            © {currentYear} Sunny Jewellers. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}