"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiGroupLine as Users, RiAwardLine as Award, RiHeartLine as Heart, RiSparklingLine as Sparkles, RiBarChartLine as TrendingUp, RiShieldLine as Shield } from "react-icons/ri";

export default function AboutPage() {
  const timeline = [
    {
      year: "1950s",
      title: "The Beginning",
      description: "Founded by our grandfather, starting as a small jewellery workshop in the heart of the city.",
    },
    {
      year: "1980s",
      title: "Expansion",
      description: "Opened our first showroom, becoming known for exceptional quality and craftsmanship.",
    },
    {
      year: "2000s",
      title: "Modernization",
      description: "Introduced contemporary designs while preserving traditional craftsmanship techniques.",
    },
    {
      year: "Today",
      title: "Legacy Continues",
      description: "Three generations strong, serving thousands of satisfied customers in our community.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every piece we create",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for the art of jewellery making",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest dealings and transparent pricing",
    },
    {
      icon: Users,
      title: "Family",
      description: "Building lasting relationships with our clients",
    },
  ];

  const stats = [
    { number: "70+", label: "Years of Legacy" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "100%", label: "Certified Gold" },
    { number: "3", label: "Generations" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-luxury-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="About Ahsan & Sons"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-luxury-black/60 to-luxury-black" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-gold font-decorative">Legacy</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Three generations of excellence in crafting timeless jewellery pieces
              that celebrate life's most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-6">
                A Heritage of <span className="text-gold">Craftsmanship</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Jewellers Shop was founded in the 1950s by our grandfather,
                  who had a vision to bring exquisite gold and diamond jewellery to
                  the people of our community. What started as a small workshop has grown
                  into one of the most trusted jewellery shops in the area.
                </p>
                <p>
                  For over seven decades, we have been committed to excellence,
                  combining traditional craftsmanship with modern design sensibilities.
                  Each piece that leaves our workshop carries with it the passion,
                  expertise, and dedication of three generations of master craftsmen.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation,
                  ensuring that every customer receives not just jewellery, but a
                  piece of our family's legacy—crafted with love, precision, and an
                  unwavering commitment to quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Our Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-luxury-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">Our Craftsmanship Workshop</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
              Our <span className="text-gold">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of excellence and growth
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="shrink-0 w-32">
                  <span className="text-3xl font-bold text-gold font-decorative">
                    {item.year}
                  </span>
                </div>
                <div className="shrink-0 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-gold" />
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-luxury-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2 font-decorative">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-black mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
              Visit Our <span className="text-gold">Showroom</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury in person at our showroom
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Our Showroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-luxury-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold">Our Elegant Showroom</p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop"
                alt="Jewellery Display"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-luxury-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold">Curated Collections</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-luxury-black mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-6">
              Become Part of Our Story
            </h2>
            <p className="text-lg text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              We invite you to experience the legacy of Jewellers Shop.
              Visit us today and let us help you find or create the perfect piece.
            </p>
            <a
              href="/contact"
              className="inline-block bg-luxury-black hover:bg-luxury-black/90 text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
