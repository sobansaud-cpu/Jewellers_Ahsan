"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiSparklingLine as Sparkles, RiAwardLine as Award, RiShieldLine as Shield, RiTimeLine as Clock, RiArrowRightLine as ChevronRight, RiStarFill as Star } from "react-icons/ri";

export default function Home() {
  const collections = [
    {
      title: "Bridal Collection",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      description: "Exquisite designs for your special day",
    },
    {
      title: "Diamond Jewellery",
      image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&h=800&fit=crop",
      description: "Brilliance that captures hearts",
    },
    {
      title: "Gold Ornaments",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop",
      description: "Traditional elegance meets modern design",
    },
    {
      title: "Luxury Watches",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=800&fit=crop",
      description: "Timepieces of distinction",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified gold and diamonds with hallmark guarantee",
    },
    {
      icon: Shield,
      title: "Trusted Legacy",
      description: "Generations of excellence in jewellery craftsmanship",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Bespoke pieces tailored to your vision",
    },
    {
      icon: Clock,
      title: "Lifetime Service",
      description: "Complimentary cleaning and maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Ayesha Khan",
      text: "The bridal set I purchased was absolutely stunning. The craftsmanship is impeccable and the service was outstanding.",
      rating: 5,
    },
    {
      name: "Ahmed Malik",
      text: "Best jewellery house in Karachi! Their diamond collection is extraordinary and prices are reasonable.",
      rating: 5,
    },
    {
      name: "Fatima Siddiqui",
      text: "I've been a customer for years. The quality and trust they provide is unmatched. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=1080&fit=crop"
            alt="Luxury Jewellery"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-luxury-black/60 via-gold/10 to-luxury-black" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Timeless Elegance Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8"
          >
            <span className="text-white">Sunny</span>
            <br />
            <span className="text-gold font-decorative">Jewellers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our finest collection of gold and diamond jewellery,
            crafted with precision and passion since generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group bg-gold hover:bg-gold/90 text-luxury-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-gold/50"
            >
              Visit Our Showroom
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Our Legacy
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-gold rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
              Featured <span className="text-gold">Collections</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of exquisite jewellery pieces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-lg mb-4 shadow-lg">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-luxury-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {collection.description}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-luxury-black group-hover:text-gold transition-colors">
                  {collection.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
              Why Choose <span className="text-gold">Sunny Jewellers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Excellence, trust, and craftsmanship in every piece
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Testimonials from our valued customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-gold font-semibold">{testimonial.name}</p>
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
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-lg text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Visit our showroom or get in touch with our experts to
              create your dream jewellery.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-luxury-black hover:bg-luxury-black/90 text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg group"
            >
              Contact Us Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}