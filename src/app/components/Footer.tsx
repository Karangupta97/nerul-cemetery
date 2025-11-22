'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDove,
  FaLeaf,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <footer className="bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center space-x-2.5 sm:space-x-3 transition-all duration-300 mb-4 sm:mb-6"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sage-600 to-sage-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-sage-400/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaDove className="relative text-white text-lg sm:text-xl drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-sage-200 transition-colors duration-300 tracking-tight">
                  Nerul Cemetery
                </span>
                <span className="text-[9px] sm:text-[10px] text-sage-300 tracking-wide flex items-center gap-1">
                  <FaLeaf className="text-sage-400 text-[7px] sm:text-[8px]" />
                  Navi Mumbai
                </span>
              </div>
            </Link>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-none">
              A peaceful resting place providing dignified burial services to
              the community with compassion and respect.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-sage-100">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-stone-300 hover:text-sage-300 transition-colors text-xs sm:text-sm flex items-center group"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sage-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/notice"
                  className="text-stone-300 hover:text-sage-300 transition-colors text-xs sm:text-sm flex items-center group"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sage-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Notice Board
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-300 hover:text-sage-300 transition-colors text-xs sm:text-sm flex items-center group"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sage-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-stone-300 hover:text-sage-300 transition-colors text-xs sm:text-sm flex items-center group"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sage-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-300 hover:text-sage-300 transition-colors text-xs sm:text-sm flex items-center group"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sage-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-sage-100">
              Contact Info
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sage-900/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-800/60 transition-colors">
                  <FaMapMarkerAlt className="text-sage-400 text-[10px] sm:text-xs" />
                </div>
                <span className="text-stone-300 leading-relaxed">
                  6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai,
                  Maharashtra 400706
                </span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sage-900/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-800/60 transition-colors">
                  <FaPhone className="text-sage-400 text-[10px] sm:text-xs" />
                </div>
                <span className="text-stone-300">+91 81049 52729</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sage-900/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-800/60 transition-colors">
                  <FaEnvelope className="text-sage-400 text-[10px] sm:text-xs" />
                </div>
                <span className="text-stone-300 break-all sm:break-normal">
                  info@nerulcemetery.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-sage-100">
              Office Hours
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sage-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaClock className="text-sage-400 text-[10px] sm:text-xs" />
                </div>
                <div>
                  <p className="text-stone-400 text-[10px] sm:text-xs">
                    Monday - Saturday
                  </p>
                  <p className="text-white font-semibold text-xs sm:text-sm">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sage-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaClock className="text-sage-400 text-[10px] sm:text-xs" />
                </div>
                <div>
                  <p className="text-stone-400 text-[10px] sm:text-xs">
                    Sunday
                  </p>
                  <p className="text-white font-semibold text-xs sm:text-sm">
                    Closed
                  </p>
                </div>
              </li>
              <li className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-stone-700">
                <p className="text-sage-300 text-[10px] sm:text-xs font-medium">
                  24/7 Emergency Services Available
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-stone-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-stone-400 text-xs sm:text-sm">
              © {currentYear} Nerul Cemetery. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-stone-400 hover:text-sage-300 transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-stone-400 hover:text-sage-300 transition-colors text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
