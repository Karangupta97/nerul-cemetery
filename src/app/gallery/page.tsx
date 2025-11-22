'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Gallery images from Nerul Cemetery
  const galleryImages = [
    {
      id: 1,
      src: '/nerul-cemetery Image/Main gate.png',
      alt: 'Nerul Cemetery Main Gate',
      category: 'Entrance',
    },
    {
      id: 2,
      src: '/nerul-cemetery Image/Main gate(at night).png',
      alt: 'Main Gate at Night',
      category: 'Entrance',
    },
    {
      id: 3,
      src: '/nerul-cemetery Image/Pathways.webp',
      alt: 'Peaceful Cemetery Pathways',
      category: 'Pathways',
    },
    {
      id: 4,
      src: '/nerul-cemetery Image/Office cabin.webp',
      alt: 'Cemetery Office Cabin',
      category: 'Facilities',
    },
    {
      id: 5,
      src: '/nerul-cemetery Image/Prayer.webp',
      alt: 'Prayer Area',
      category: 'Worship',
    },
    {
      id: 6,
      src: '/nerul-cemetery Image/Worship(Peace).webp',
      alt: 'Worship and Peace Area',
      category: 'Worship',
    },
    {
      id: 7,
      src: '/nerul-cemetery Image/stage.webp',
      alt: 'Cemetery Stage Area',
      category: 'Facilities',
    },
    {
      id: 8,
      src: '/nerul-cemetery Image/Rule.webp',
      alt: 'Cemetery Rules and Guidelines',
      category: 'Information',
    },
    {
      id: 9,
      src: '/nerul-cemetery Image/Verse.webp',
      alt: 'Inspirational Verse',
      category: 'Information',
    },
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Entrance', 'Pathways', 'Facilities', 'Worship', 'Information'];

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

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigateImage('next');
    }
    if (isRightSwipe) {
      navigateImage('prev');
    }
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
      <section className="relative bg-gradient-to-b from-sage-50/40 via-white to-sage-50/30 text-stone-800 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 sm:top-10 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-sage-300/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-stone-300/40 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sage-50 to-sage-100/50 rounded-full mb-6 sm:mb-8 shadow-sm border border-sage-200/50"
            >
              <FaImages className="text-sage-600 text-base sm:text-lg" />
              <span className="text-xs sm:text-sm font-semibold text-sage-700 tracking-wide">Photo Gallery</span>
            </motion.div>
            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-stone-800 mb-3 sm:mb-4 md:mb-6 tracking-tight px-2">
              <span className="block">Tranquil Grounds &</span>
              <span className="block mt-2 sm:mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                Peaceful Landscapes
              </span>
            </h1>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light px-4 sm:px-6">
              Explore the serene and beautifully maintained grounds of Nerul Cemetery, where nature and remembrance come together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white border-b border-sage-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95 shadow-sm">
        <div className="mx-auto max-w-7xl">
          {/* Mobile: Horizontal scroll, Tablet+: Wrap */}
          <div className="md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-3 sm:px-4 pb-2 md:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 active:scale-95 ${
                  filter === category
                    ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-lg hover:shadow-xl transform'
                    : 'bg-sage-50 text-stone-700 hover:bg-sage-100 border border-sage-200/50 hover:border-sage-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          </div>
          {/* Results count */}
          <div className="text-center mt-4 md:mt-5">
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-b from-white to-sage-50/20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
                className="group relative aspect-[4/3] bg-gradient-to-br from-sage-50 via-white to-stone-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl active:shadow-lg transition-all duration-300 cursor-pointer border border-sage-100 active:scale-[0.98]"
                onClick={() => openLightbox(index)}
              >
                {/* Actual image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-600/0 to-sage-700/0 group-hover:from-sage-600/60 group-hover:to-sage-700/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-sage-200/50">
                      <p className="text-sage-700 font-semibold text-sm">Click to view</p>
                    </div>
                  </div>
                </div>

                {/* Image info overlay at bottom - always visible on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/85 via-stone-900/50 to-transparent p-3 sm:p-4 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-xs sm:text-sm mb-1.5 line-clamp-2 leading-tight">
                    {image.alt}
                  </p>
                  <span className="inline-block text-[10px] sm:text-xs text-stone-200 px-2.5 sm:px-3 py-1 sm:py-1 bg-white/25 backdrop-blur-sm rounded-full border border-white/40 font-medium">
                    {image.category}
                  </span>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-t border-r border-white/0 group-hover:border-white/50 rounded-tr-2xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16 md:py-20 px-4"
            >
              <FaImages className="w-12 h-12 sm:w-16 sm:h-16 text-sage-300 mx-auto mb-4" />
              <p className="text-stone-500 text-base sm:text-lg font-light">No images found in this category.</p>
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
            className="fixed inset-0 z-50 bg-gradient-to-br from-stone-900/95 via-stone-800/95 to-sage-900/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg hover:scale-110"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20 hover:border-white/30 shadow-lg hover:scale-110"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full aspect-[4/3] max-h-[85vh] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/20 mx-1 sm:mx-2 md:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage]?.src || ''}
                alt={filteredImages[selectedImage]?.alt || ''}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              
              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/95 via-stone-900/70 to-transparent p-4 sm:p-5 md:p-6">
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mb-2 sm:mb-3 px-2 leading-tight">
                  {filteredImages[selectedImage]?.alt}
                </p>
                <div className="flex justify-center">
                  <span className="text-xs sm:text-sm md:text-base text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-2.5 bg-white/25 backdrop-blur-sm rounded-full border border-white/40 shadow-md font-medium">
                    {filteredImages[selectedImage]?.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Image counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/15 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-medium border border-white/20 shadow-lg text-sm sm:text-base"
            >
              <span className="block">{selectedImage + 1} / {filteredImages.length}</span>
              <span className="hidden sm:hidden text-[10px] text-white/70 mt-0.5">Swipe to navigate</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-sage-100/70 via-sage-50 to-stone-100/60 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sage-50 to-sage-100/50 rounded-full mb-8 sm:mb-10 shadow-sm border border-sage-200/50"
            >
              <FaImages className="text-sage-600 text-base sm:text-lg" />
              <span className="text-xs sm:text-sm font-semibold text-sage-700 tracking-wide">Visit Us</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-stone-800 mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight px-2">
              Experience the
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                Serenity of Our Grounds
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-6">
              We welcome you to visit Nerul Cemetery and experience the tranquil environment we&apos;ve created for remembrance and reflection.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold hover:shadow-2xl active:shadow-lg transition-all duration-500 shadow-xl text-sm sm:text-base overflow-hidden relative min-w-[200px] active:scale-95"
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
