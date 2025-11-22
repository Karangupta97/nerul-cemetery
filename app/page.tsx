"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHandsHelping,
  FaClock,
  FaHeart,
  FaArrowRight,
  FaDove,
  FaSeedling,
  FaPrayingHands,
} from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Peaceful Environment",
      description:
        "A serene and well-maintained resting place surrounded by nature and tranquility.",
      gradient: "from-sage-500 to-sage-700",
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Compassionate Care",
      description:
        "Dedicated staff providing respectful and dignified burial services with empathy.",
      gradient: "from-stone-500 to-stone-700",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "24/7 Assistance",
      description:
        "Round-the-clock support to help families during difficult times.",
      gradient: "from-sage-400 to-sage-600",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Memorial Services",
      description:
        "Comprehensive memorial and remembrance services for your loved ones.",
      gradient: "from-stone-400 to-stone-600",
    },
  ];

  const testimonials = [
    {
      icon: <FaDove className="w-6 h-6" />,
      title: "Dignity & Respect",
      description:
        "Every service conducted with the highest level of dignity and respect for all traditions.",
    },
    {
      icon: <FaSeedling className="w-6 h-6" />,
      title: "Natural Beauty",
      description:
        "Beautifully landscaped grounds that provide comfort and peace to visiting families.",
    },
    {
      icon: <FaPrayingHands className="w-6 h-6" />,
      title: "Spiritual Support",
      description:
        "Accommodating all faiths and beliefs with dedicated spaces for reflection.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-warm-white">
      {/* Hero Section - Full Viewport Rectangle */}
      <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0" aria-label="Hero section">
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/hero-cemetery.jpg" 
            alt="Peaceful Nerul Cemetery grounds at sunset with well-maintained gardens and serene pathways in Navi Mumbai"
            fill
            priority
            className="object-cover w-full h-full"
            quality={100}
            sizes="100vw"
          />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>
        </div>

        {/* Content Container - Centered */}
        <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-5xl w-full"
          >
            {/* Peaceful dove element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center mb-4 sm:mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
                <FaDove className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white drop-shadow-lg" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-4 sm:mb-6 leading-tight tracking-tight text-white drop-shadow-2xl px-2"
            >
              <span className="sr-only">Nerul Cemetery - </span>
              A Place of Peace <br className="hidden md:block" />
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-white via-sage-100 to-white bg-clip-text text-transparent">
                & Remembrance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg px-4"
            >
              Honoring life, preserving memories, and providing comfort to
              families in Navi Mumbai
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-sage-800 rounded-full font-semibold hover:bg-sage-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:scale-105 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
              >
                <span className="relative z-10">Contact Us</span>
                <FaArrowRight className="ml-2 sm:ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/90 text-white rounded-full font-semibold hover:bg-white hover:text-sage-800 backdrop-blur-md transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                Learn More
                <FaLeaf className="ml-2 sm:ml-3 group-hover:rotate-12 transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2 bg-sage-50 rounded-full mb-8"
            >
              <FaSeedling className="text-sage-500" aria-hidden="true" />
              <span className="text-sm font-medium text-sage-600 tracking-wide">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              id="features-heading"
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 md:mb-8 tracking-tight px-4"
            >
              Comprehensive Care & Facilities
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed px-4"
            >
              We provide dignified burial services with compassion and respect
              for all faiths and traditions, ensuring every family receives the
              care they deserve.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-gradient-to-br from-white via-white to-sage-50/50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-sage-100 overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-400/0 via-sage-500/0 to-sage-600/0 group-hover:from-sage-400/20 group-hover:via-sage-500/10 group-hover:to-sage-600/20 transition-all duration-500 rounded-3xl"></div>

                {/* Icon with enhanced animation */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center text-sage-600 mb-5 sm:mb-7 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-md">
                  {feature.icon}
                </div>

                <h3 className="relative text-lg sm:text-xl font-semibold text-stone-700 mb-3 sm:mb-4 group-hover:text-sage-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-stone-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sage-500 to-sage-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-sage-50/40 via-white to-stone-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-sage-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 md:gap-12 lg:gap-16"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="group flex flex-col items-center text-center p-6 sm:p-8 md:p-10 bg-white/60 backdrop-blur-sm rounded-3xl border border-sage-100/50 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sage-100 to-white shadow-md rounded-full flex items-center justify-center text-sage-600 mb-5 sm:mb-8 group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 border border-sage-200/50">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-stone-700 mb-3 sm:mb-4 group-hover:text-sage-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-36 bg-gradient-to-b from-white to-sage-50/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sage-50 to-sage-100/50 rounded-full mb-10 shadow-sm border border-sage-200/50"
              >
                <FaLeaf className="text-sage-600 text-lg" />
                <span className="text-sm font-semibold text-sage-700 tracking-wide">
                  Our Legacy
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-stone-800 mb-6 sm:mb-8 md:mb-10 tracking-tight leading-tight">
                Serving the Community with
                <span className="block mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                  Grace & Compassion
                </span>
              </h2>
              <div className="space-y-4 sm:space-y-6 md:space-y-7">
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed sm:leading-[1.8] font-light">
                  Nerul Cemetery has been a cornerstone of the community,
                  providing dignified burial services and a peaceful final
                  resting place for loved ones. Our commitment to excellence and
                  compassionate care has made us a trusted name in Navi Mumbai.
                </p>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed sm:leading-[1.8] font-light">
                  We understand the importance of honoring those who have passed
                  and supporting families during their time of grief. Our
                  dedicated team ensures every service is conducted with the
                  utmost respect and professionalism.
                </p>
                <div className="pt-6 sm:pt-8">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-500 shadow-md text-sm sm:text-base"
                  >
                    <span>Discover Our Story</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sage-100/50 via-white to-stone-100/50 rounded-3xl shadow-lg overflow-hidden border border-sage-100">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-sage-200/30 blur-2xl rounded-full"></div>
                    <FaLeaf className="relative w-20 h-20 md:w-24 md:h-24 text-sage-400/60" />
                  </div>
                  <p className="text-stone-500 text-base font-light">
                    Peaceful Grounds
                  </p>
                  <p className="text-stone-400 text-sm mt-2">
                    Image Coming Soon
                  </p>
                </div>

                {/* Subtle corner elements */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-sage-200 rounded-tr-xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-sage-200 rounded-bl-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-sage-100/70 via-sage-50 to-stone-100/60 overflow-hidden">
        {/* Enhanced decorative background */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-sm rounded-full mb-6 sm:mb-10 border border-sage-100"
            >
              <FaPrayingHands className="w-6 h-6 sm:w-8 sm:h-8 text-sage-500" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 md:mb-8 tracking-tight px-4">
              How Can We Assist You?
            </h2>
            <p className="text-base sm:text-lg text-stone-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Our compassionate team is available 24/7 to assist you with burial
              arrangements, plot information, or any questions you may have.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 md:mb-24 px-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-500 shadow-xl hover:scale-110 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
              >
                <span className="relative z-10">Get in Touch</span>
                <FaArrowRight className="ml-2 sm:ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-sage-700 to-sage-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-5 border-2 border-sage-600 text-sage-700 rounded-full font-semibold hover:bg-sage-600 hover:text-white hover:border-sage-700 backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-xl hover:scale-110 w-full sm:w-auto text-sm sm:text-base"
              >
                View Gallery
                <FaLeaf className="ml-2 sm:ml-3 group-hover:rotate-12 transition-transform duration-500" />
              </Link>
            </div>

            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-200/50"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaClock className="w-6 h-6 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 sm:mb-3 text-base sm:text-lg">
                  24/7 Available
                </h3>
                <p className="text-sm sm:text-base text-stone-600">Round-the-clock support</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-200/50"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaHandsHelping className="w-6 h-6 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 sm:mb-3 text-base sm:text-lg">
                  Compassionate Care
                </h3>
                <p className="text-sm sm:text-base text-stone-600">Dedicated professional staff</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-200/50"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaHeart className="w-6 h-6 sm:w-8 sm:h-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 sm:mb-3 text-base sm:text-lg">
                  All Faiths Welcome
                </h3>
                <p className="text-sm sm:text-base text-stone-600">Respecting all traditions</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
