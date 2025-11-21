'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - replace with actual cemetery images
  const galleryImages = [
    {
      id: 1,
      src: '/gallery/image1.jpg',
      alt: 'Cemetery grounds overview',
      category: 'Grounds',
      placeholder: true,
    },
    {
      id: 2,
      src: '/gallery/image2.jpg',
      alt: 'Memorial garden area',
      category: 'Gardens',
      placeholder: true,
    },
    {
      id: 3,
      src: '/gallery/image3.jpg',
      alt: 'Peaceful walkway',
      category: 'Pathways',
      placeholder: true,
    },
    {
      id: 4,
      src: '/gallery/image4.jpg',
      alt: 'Chapel exterior',
      category: 'Facilities',
      placeholder: true,
    },
    {
      id: 5,
      src: '/gallery/image5.jpg',
      alt: 'Garden with flowers',
      category: 'Gardens',
      placeholder: true,
    },
    {
      id: 6,
      src: '/gallery/image6.jpg',
      alt: 'Cemetery entrance',
      category: 'Facilities',
      placeholder: true,
    },
    {
      id: 7,
      src: '/gallery/image7.jpg',
      alt: 'Memorial stones',
      category: 'Memorials',
      placeholder: true,
    },
    {
      id: 8,
      src: '/gallery/image8.jpg',
      alt: 'Landscaped area',
      category: 'Grounds',
      placeholder: true,
    },
    {
      id: 9,
      src: '/gallery/image9.jpg',
      alt: 'Tree-lined path',
      category: 'Pathways',
      placeholder: true,
    },
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Grounds', 'Gardens', 'Pathways', 'Facilities', 'Memorials'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50/40 via-white to-sage-50/30 text-stone-800 py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-sage-300/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-stone-300/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sage-50 to-sage-100/50 rounded-full mb-8 shadow-sm border border-sage-200/50"
            >
              <FaImages className="text-sage-600 text-lg" />
              <span className="text-sm font-semibold text-sage-700 tracking-wide">Photo Gallery</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-stone-800 mb-6 tracking-tight leading-tight">
              Tranquil Grounds &
              <span className="block mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                Peaceful Landscapes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore the serene and beautifully maintained grounds of Nerul Cemetery, where nature and remembrance come together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 sm:py-12 bg-white border-b border-sage-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  filter === category
                    ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-sage-50/50 text-stone-700 hover:bg-sage-100 border border-sage-200/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-sage-50/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative aspect-[4/3] bg-gradient-to-br from-sage-50 via-white to-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-sage-100"
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-sage-50/90 via-white to-stone-50/90 group-hover:from-sage-100/90 group-hover:via-sage-50/90 group-hover:to-stone-100/90 transition-all duration-500">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-sage-300/20 blur-xl rounded-full"></div>
                    <FaImages className="relative w-16 h-16 sm:w-20 sm:h-20 text-sage-400/70 group-hover:text-sage-500/80 transition-colors duration-300" />
                  </div>
                  <p className="text-stone-700 font-medium text-center mb-3 text-sm sm:text-base group-hover:text-sage-700 transition-colors duration-300">
                    {image.alt}
                  </p>
                  <span className="text-xs sm:text-sm text-stone-600 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-sage-200/50 shadow-sm">
                    {image.category}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-600/0 to-sage-700/0 group-hover:from-sage-600/10 group-hover:to-sage-700/5 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-sage-200/50">
                      <p className="text-sage-700 font-semibold text-sm">Click to view</p>
                    </div>
                  </div>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-sage-300/0 group-hover:border-sage-300/50 rounded-tr-2xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaImages className="w-16 h-16 text-sage-300 mx-auto mb-4" />
              <p className="text-stone-500 text-lg font-light">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-stone-900/95 via-stone-800/95 to-sage-900/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg"
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Previous button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg hover:scale-110"
            >
              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg hover:scale-110"
            >
              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full aspect-[4/3] bg-gradient-to-br from-sage-100 via-white to-stone-100 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-sage-300/20 blur-2xl rounded-full"></div>
                  <FaImages className="relative w-20 h-20 sm:w-28 sm:h-28 text-sage-400/60" />
                </div>
                <p className="text-stone-800 text-lg sm:text-2xl font-semibold text-center mb-4 max-w-2xl">
                  {filteredImages[selectedImage]?.alt}
                </p>
                <span className="text-sm sm:text-base text-stone-600 px-6 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-sage-200 shadow-md">
                  {filteredImages[selectedImage]?.category}
                </span>
              </div>
            </motion.div>

            {/* Image counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/20 shadow-lg"
            >
              {selectedImage + 1} / {filteredImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <section className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-br from-sage-100/70 via-sage-50 to-stone-100/60 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sage-50 to-sage-100/50 rounded-full mb-10 shadow-sm border border-sage-200/50"
            >
              <FaImages className="text-sage-600 text-lg" />
              <span className="text-sm font-semibold text-sage-700 tracking-wide">Visit Us</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-stone-800 mb-6 sm:mb-8 tracking-tight leading-tight">
              Experience the
              <span className="block mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                Serenity of Our Grounds
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              We welcome you to visit Nerul Cemetery and experience the tranquil environment we&apos;ve created for remembrance and reflection.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-500 shadow-xl text-sm sm:text-base overflow-hidden relative"
            >
              <span className="relative z-10">Plan Your Visit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sage-700 to-sage-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
