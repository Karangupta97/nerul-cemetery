'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaLeaf, FaPrayingHands } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Address',
      content: '6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai, Maharashtra 400706',
      gradient: 'from-sage-500 to-sage-700',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 81049 52729',
      gradient: 'from-stone-500 to-stone-700',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'info@nerulcemetery.com',
      gradient: 'from-sage-400 to-sage-600',
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Office Hours',
      content: 'Mon-Sat: 8:00 AM - 6:00 PM, Sun: Closed',
      gradient: 'from-stone-400 to-stone-600',
    },
  ];

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
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-sage-700 via-sage-600 to-stone-700 text-white py-24 sm:py-32 md:py-40 overflow-hidden">
        {/* Animated decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-stone-400 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Icon with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full animate-pulse"></div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                >
                  <FaPrayingHands className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-2xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced title with stagger animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extralight mb-6 tracking-tight leading-tight">
                We&apos;re Here to{' '}
                <span className="block mt-3 bg-linear-to-r from-white via-sage-100 to-white bg-clip-text text-transparent font-light">
                  Support You
                </span>
              </h1>
            </motion.div>

            {/* Enhanced description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-10"
            >
              Our compassionate team is ready to assist you with any questions, arrangements, or support you may need during this time. Reach out to us anytime.
            </motion.p>

            {/* Contact quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="tel:+918104952729"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sage-800 rounded-full font-semibold hover:bg-sage-50 transition-all shadow-2xl hover:shadow-3xl"
              >
                <FaPhone className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Us Now</span>
              </motion.a>
              <motion.a
                href="mailto:info@nerulcemetery.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/90 text-white rounded-full font-semibold hover:bg-white hover:text-sage-800 backdrop-blur-md transition-all shadow-lg hover:shadow-2xl"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
                <span>Send Email</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-100/50"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-700 mb-3 group-hover:text-sage-700 transition-colors duration-300">{info.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{info.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-linear-to-b from-white to-sage-50/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-sage-50 rounded-full mb-6">
                <FaLeaf className="text-sage-500" />
                <span className="text-sm font-medium text-sage-600 tracking-wide">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8 tracking-tight">Send Us a <span className="bg-linear-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent">Message</span></h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all bg-white hover:border-sage-400 text-stone-800"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all bg-white hover:border-sage-400 text-stone-800"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all bg-white hover:border-sage-400 text-stone-800"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all bg-white hover:border-sage-400 text-stone-800"
                  >
                    <option value="" className="text-stone-500">Select a subject</option>
                    <option value="general" className="text-stone-800">General Inquiry</option>
                    <option value="burial" className="text-stone-800">Burial Arrangements</option>
                    <option value="plot" className="text-stone-800">Plot Information</option>
                    <option value="memorial" className="text-stone-800">Memorial Services</option>
                    <option value="other" className="text-stone-800">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all resize-none bg-white hover:border-sage-400 text-stone-800"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-sage-50 border border-sage-200 text-sage-800 px-6 py-4 rounded-xl flex items-center gap-3"
                  >
                    <FaLeaf className="text-sage-600" />
                    <span>Thank you for your message! We&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-sage-600 to-sage-700 text-white px-8 py-4 rounded-full font-semibold hover:from-sage-700 hover:to-sage-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-sage-50 rounded-full mb-6">
                <FaMapMarkerAlt className="text-sage-500" />
                <span className="text-sm font-medium text-sage-600 tracking-wide">Find Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8 tracking-tight">Our <span className="bg-linear-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent">Location</span></h2>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-[500px] border border-sage-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0547668445376!2d73.01947747516831!3d19.045899682145873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d5f5555555%3A0x5555555555555555!2s6%2C%20Baliram%20Hira%20Joshi%20Marg%2C%20Sector%202%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nerul Cemetery Location"
                  className="w-full h-full"
                />
              </div>
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="mt-6 bg-linear-to-br from-sage-50 to-white p-8 rounded-3xl border border-sage-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sage-600" />
                  Directions
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We are conveniently located in Sector 2, Nerul, easily accessible from all parts of Navi Mumbai. The cemetery is well-connected by local transport and has ample parking facilities for visitors.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
