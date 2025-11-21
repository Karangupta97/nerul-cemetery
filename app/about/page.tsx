'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaHandshake, FaLeaf, FaUsers, FaAward, FaClock, FaPrayingHands, FaDove } from 'react-icons/fa';

export default function About() {
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

  const stats = [
    {
      icon: <FaClock className="w-6 h-6" />,
      number: '50+',
      label: 'Years of Service',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      number: '10,000+',
      label: 'Families Served',
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      number: '15',
      label: 'Acres of Land',
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      number: '24/7',
      label: 'Support Available',
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
        ease: [0.25, 0.4, 0.25, 1],
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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <div className="bg-warm-white">
      {/* Hero Section - Peaceful Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50/30 via-white to-stone-50/20 py-24 md:py-32">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
      <section className="py-20 md:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-sage-50 px-5 py-2 rounded-full text-sm font-medium text-sage-600 mb-8">
                <FaLeaf className="w-4 h-4" />
                <span className="tracking-wide">Our Purpose</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-10 tracking-tight">
                Mission & Vision
              </h2>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-sage-300">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Mission</h3>
                  <p className="text-base text-stone-600 leading-relaxed font-light">
                    To provide a peaceful, dignified, and well-maintained final resting place while offering compassionate support and exceptional service to grieving families across all communities.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-stone-300">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Vision</h3>
                  <p className="text-base text-stone-600 leading-relaxed font-light">
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
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-sage-50 via-white to-stone-50 border border-sage-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-sage-200/30 blur-2xl rounded-full"></div>
                      <FaLeaf className="relative w-24 h-24 md:w-32 md:h-32 text-sage-400/60" />
                    </div>
                    <p className="text-stone-500 text-base font-light">Peaceful Grounds</p>
                    <p className="text-stone-400 text-sm mt-2">Serene Environment</p>
                  </div>
                </div>
                
                {/* Corner elements */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-sage-200 rounded-tr-xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-sage-200 rounded-bl-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Peaceful Design */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sage-50/40 via-white to-stone-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-sage-50 px-5 py-2 rounded-full text-sm font-medium text-sage-600 mb-8">
                <FaHeart className="w-4 h-4" />
                <span className="tracking-wide">What Drives Us</span>
              </div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-6 tracking-tight">
              Our Core Values
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
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

      {/* Stats Section - Peaceful Design */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sage-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-6 tracking-tight">By the Numbers</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Decades of service, thousands of families, one commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-sage-100/50 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center text-sage-600 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl font-light mb-3 text-sage-700">
                  {stat.number}
                </div>
                
                <div className="text-base text-stone-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Peaceful Design */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sage-50/40 via-white to-stone-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-sage-50 px-5 py-2 rounded-full text-sm font-medium text-sage-600 mb-8">
              <FaAward className="w-4 h-4" />
              <span className="tracking-wide">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-6 tracking-tight">
              Excellence in Every Detail
            </h2>
            
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              From our dedicated staff to our beautiful grounds, every aspect reflects our commitment to quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-sage-100 hover:border-sage-200 transition-all hover:shadow-xl duration-500"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center text-sage-600 shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Section - Peaceful Design */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-sage-50 px-5 py-2 rounded-full text-sm font-medium text-sage-600 mb-8">
                <FaClock className="w-4 h-4" />
                <span className="tracking-wide">Our Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-6 tracking-tight">
                Our History
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-sage-200 before:via-sage-300 before:to-stone-200">
              {[
                {
                  text: "Nerul Cemetery has been an integral part of the Navi Mumbai community for over five decades. Established to serve the growing population of this vibrant city, our cemetery has provided a peaceful and dignified final resting place for thousands of families.",
                },
                {
                  text: "Located in the heart of Sector 2, Nerul, our cemetery spans 15 acres of beautifully maintained grounds. Over the years, we have continuously improved our facilities and services to meet the evolving needs of the community while maintaining the tranquil atmosphere that makes our cemetery a place of solace and reflection.",
                },
                {
                  text: "We take pride in our commitment to excellence, offering burial services that respect all faiths and cultural traditions. Our dedicated team works tirelessly to ensure that every family receives the compassionate care and professional service they deserve during their most difficult moments.",
                },
                {
                  text: "Today, Nerul Cemetery stands as a testament to our community&apos;s values of respect, dignity, and remembrance. We continue to honor our legacy while looking forward to serving future generations with the same dedication and care.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-sage-100">
                    <p className="text-base text-stone-600 leading-relaxed">
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-sage-50/40 via-sage-100/30 to-stone-50/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-20 w-80 h-80 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-sm rounded-full mb-8 border border-sage-100">
              <FaPrayingHands className="w-7 h-7 sm:w-8 sm:h-8 text-sage-600" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-700 mb-6 tracking-tight">
              How Can We Assist You?
            </h2>
            
            <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Our compassionate team is available 24/7 to help you with any questions or arrangements.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold text-base hover:shadow-xl transition-all shadow-lg"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
