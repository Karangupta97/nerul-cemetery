'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaHandshake, FaLeaf, FaUsers, FaAward, FaClock, FaPrayingHands, FaDove, FaTimes } from 'react-icons/fa';

export default function About() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  const values = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We provide care and support with empathy and understanding during difficult times.',
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Respect',
      description: 'Every service is conducted with dignity and reverence for all faiths and traditions.',
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: 'Peace',
      description: 'A tranquil environment designed for reflection and remembrance.',
    },
    {
      icon: <FaPrayingHands className="w-8 h-8" />,
      title: 'Community',
      description: 'Serving families across Navi Mumbai with dedication and care.',
    },
  ];

  const features = [
    {
      title: 'Professional Staff',
      description: 'Highly trained and compassionate team members dedicated to serving you.',
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      title: 'Beautiful Grounds',
      description: 'Meticulously maintained landscapes providing a peaceful environment.',
      icon: <FaLeaf className="w-6 h-6" />,
    },
    {
      title: 'All Faiths Welcome',
      description: 'Respectful services for all religious and cultural traditions.',
      icon: <FaHeart className="w-6 h-6" />,
    },
    {
      title: 'Secure & Maintained',
      description: 'Round-the-clock security and regular maintenance of all facilities.',
      icon: <FaAward className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-warm-white">
      {/* Hero Section - Peaceful Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50/30 via-white to-stone-50/20 py-16 sm:py-20 md:py-28 lg:py-32">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mb-8 shadow-md border border-sage-100"
            >
              <FaDove className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 text-stone-800 tracking-tight">
              About <span className="block mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent">Nerul Cemetery</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-light">
              A sacred space dedicated to honoring life, preserving memories, and providing solace to families in their time of need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Peaceful Design */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-sage-50 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-sage-600 mb-6 sm:mb-8">
                <FaLeaf className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="tracking-wide">Our Purpose</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-8 sm:mb-10 tracking-tight">
                Mission & Vision
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="relative pl-4 sm:pl-6 border-l-2 border-sage-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2 sm:mb-3">Mission</h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                    To provide a peaceful, dignified, and well-maintained final resting place while offering compassionate support and exceptional service to grieving families across all communities.
                  </p>
                </div>
                
                <div className="relative pl-4 sm:pl-6 border-l-2 border-stone-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2 sm:mb-3">Vision</h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                    To be the most trusted and respected cemetery in Navi Mumbai, known for our commitment to excellence, compassionate care, and beautiful memorial spaces that honor the lives of those we serve.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div 
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-sage-100 cursor-pointer group"
                onClick={() => openLightbox('/nerul-cemetery Image/Worship(Peace).webp', 'Peaceful worship area at Nerul Cemetery')}
              >
                <Image
                  src="/nerul-cemetery Image/Worship(Peace).webp"
                  alt="Peaceful worship area at Nerul Cemetery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="text-sage-700 font-semibold text-sm">Click to view</p>
                  </div>
                </div>
                
                {/* Corner elements */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-white/40 rounded-tr-xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-white/40 rounded-bl-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Peaceful Design */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-sage-50/40 via-white to-stone-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-sage-50 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-sage-600 mb-6 sm:mb-8">
                <FaHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="tracking-wide">What Drives Us</span>
              </div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 tracking-tight">
              Our Core Values
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              The principles that guide everything we do and every service we provide.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-sage-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sage-400/0 via-sage-500/0 to-sage-600/0 group-hover:from-sage-400/10 group-hover:via-sage-500/5 group-hover:to-sage-600/10 transition-all duration-500 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-700 mb-3 group-hover:text-sage-700 transition-colors duration-300">{value.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{value.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sage-500 to-sage-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Peaceful Design */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-sage-50/40 via-white to-stone-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-sage-50 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-sage-600 mb-6 sm:mb-8">
              <FaAward className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="tracking-wide">Why Choose Us</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 tracking-tight">
              Excellence in Every Detail
            </h2>
            
            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              From our dedicated staff to our beautiful grounds, every aspect reflects our commitment to quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-sage-100 hover:border-sage-200 transition-all hover:shadow-xl duration-500"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl sm:rounded-2xl flex items-center justify-center text-sage-600 shadow-sm mb-3 sm:mb-4 md:mb-5">
                  {feature.icon}
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-stone-800 mb-2">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Section - Peaceful Design */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-sage-50 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-sage-600 mb-6 sm:mb-8">
                <FaClock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="tracking-wide">Our Journey</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 tracking-tight">
                Our History
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 relative before:absolute before:left-6 sm:before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-sage-200 before:via-sage-300 before:to-stone-200">
              {[
                {
                  text: "For over fifty years, Nerul Cemetery has been a gentle presence in the Navi Mumbai community. We began with a simple heartfelt purpose — to offer families a serene resting place where memories can live on in peace and quietness.",
                },
                {
                  text: "Nestled in Sector 2, Nerul, our 15-acre grounds are lovingly cared for each day. The trees provide shade, the pathways invite quiet walks, and every corner reflects our genuine care. This is a place where nature and memory come together in harmony.",
                },
                {
                  text: "We welcome families of all faiths and traditions with open hearts. Our team understands the weight of loss and is here to walk alongside you with kindness and understanding. Every service is handled with the utmost gentleness and respect.",
                },
                {
                  text: "Today, Nerul Cemetery remains a peaceful sanctuary where love and remembrance flow naturally. We are deeply grateful to serve our community and look forward to continuing this meaningful work with warmth and sincerity for many years to come.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg text-sm sm:text-base">
                    {index + 1}
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-sage-100">
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Peaceful Design */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-sage-50/40 via-sage-100/30 to-stone-50/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white shadow-sm rounded-full mb-6 sm:mb-8 border border-sage-100">
              <FaPrayingHands className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sage-600" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-4 sm:mb-6 tracking-tight">
              How Can We Assist You?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Our compassionate team is available to help you with any questions or arrangements.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transition-all shadow-lg"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
