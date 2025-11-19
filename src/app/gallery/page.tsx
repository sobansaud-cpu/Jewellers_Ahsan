"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine as ArrowLeft, RiHeartLine as Heart, RiShoppingCartLine as ShoppingCart } from "react-icons/ri";

export default function GalleryPage() {
  const collections = [
    {
      id: 1,
      title: "Elegant Necklaces",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      price: "PKR 45,000",
      description: "Exquisite gold necklaces with intricate designs"
    },
    {
      id: 2,
      title: "Diamond Rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      price: "PKR 85,000",
      description: "Brilliant diamond rings for special occasions"
    },
    {
      id: 3,
      title: "Gold Bracelets",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
      price: "PKR 32,000",
      description: "Classic gold bracelets with modern twists"
    },
    {
      id: 4,
      title: "Pearl Earrings",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
      price: "PKR 18,000",
      description: "Elegant pearl earrings for everyday wear"
    },
    {
      id: 5,
      title: "Luxury Watches",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=600&fit=crop",
      price: "PKR 125,000",
      description: "Premium watches with gold accents"
    },
    {
      id: 6,
      title: "Wedding Sets",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      price: "PKR 150,000",
      description: "Complete wedding jewellery sets"
    },
    {
      id: 7,
      title: "Gold Chains",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      price: "PKR 28,000",
      description: "Versatile gold chains for men and women"
    },
    {
      id: 8,
      title: "Gemstone Rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      price: "PKR 55,000",
      description: "Beautiful rings with precious gemstones"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-luxury-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-gold font-decorative">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Discover our exquisite collection of handcrafted jewellery pieces,
              each telling a story of elegance and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collections.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-lg mb-4 shadow-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-luxury-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <p className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.price}
                        </p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-gold/20 rounded-full hover:bg-gold/30 transition-colors">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-gold/20 rounded-full hover:bg-gold/30 transition-colors">
                          <ShoppingCart className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-luxury-black mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-gold font-semibold mt-2">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-gold/90 to-gold">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-6">
              Find Your Perfect Piece
            </h2>
            <p className="text-lg text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Visit our showroom to see these beautiful pieces in person and
              let our experts help you choose the perfect jewellery for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-luxury-black hover:bg-luxury-black/90 text-gold px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                Visit Showroom
              </Link>
              <Link
                href="tel:03001730313"
                className="inline-flex items-center gap-2 border-2 border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-gold px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Call Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}