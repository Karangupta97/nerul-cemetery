'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaBell, 
  FaCalendarAlt, 
  FaClock, 
  FaLeaf, 
  FaSeedling,
  FaArrowRight,
  FaInfoCircle,
  FaExclamationCircle,
  FaTools,
  FaCalendarCheck,
  FaClipboardList,
  FaCheckCircle,
  FaPhoneAlt
} from 'react-icons/fa';

export default function Notice() {
  const [activeTab, setActiveTab] = useState<'notice' | 'rules'>('notice');

  // Handle URL hash to switch tabs
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#rules') {
      setActiveTab('rules');
    }
  }, []);

  // Update URL hash when tab changes
  useEffect(() => {
    if (activeTab === 'rules') {
      window.history.replaceState(null, '', '#rules');
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeTab]);

  const rules = [
    {
      id: 1,
      title: 'Annual Church Membership Fees',
      description: 'Annual Church Membership Fees is Rs. 2000.',
      icon: <FaClipboardList className="w-5 h-5" />,
    },
    {
      id: 2,
      title: 'Sunday Special Burial Charges',
      description: 'Since on Sunday the Cemetery is closed, but if a special burial needs to be conducted, an additional charge of Rs. 1000 is payable towards grave-digging and other operational costs since it\'s beyond the normal call of duty.',
      icon: <FaCalendarAlt className="w-5 h-5" />,
    },
    {
      id: 3,
      title: 'Grave Reuse Policy',
      description: 'In order to reuse the available limited cemetery area, the mortal remains from the grave will be removed and put in the common bone-pit after three years from the date of burial or as soon as the lifetime facility of the person is buried.',
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
    {
      id: 4,
      title: 'Cess (Box) Wall Facility',
      description: 'Cess (Box) Wall facility for lifetime is available on one-time charge of Rs. 10,000 (Rupees ten thousand). Within 3 years from burial, family can choose to shift the mortal remains to the assigned cell.',
      icon: <FaTools className="w-5 h-5" />,
    },
    {
      id: 5,
      title: 'Cemetery Grounds Maintenance',
      description: 'Visitors & relatives are requested not to plant trees on graves/burial site or pluck flowers, fruits or disturb natural vegetation around them.',
      icon: <FaLeaf className="w-5 h-5" />,
    },
    {
      id: 6,
      title: 'Payment Receipt',
      description: 'Receipt will be issued for every amount paid to the cemetery, kindly collect the same.',
      icon: <FaCheckCircle className="w-5 h-5" />,
    },
    {
      id: 7,
      title: 'Assistance & Contact',
      description: 'In case any assistance is needed, please call 8104957279.',
      icon: <FaPhoneAlt className="w-5 h-5" />,
    },
  ];

  const notices = [
    {
      id: 1,
      title: 'Cemetery Maintenance Schedule',
      date: '2025-11-15',
      time: '9:00 AM',
      category: 'Maintenance',
      description: 'The cemetery will undergo routine maintenance and landscaping work. All areas will remain accessible during this time.',
      priority: 'normal',
      icon: <FaTools className="w-5 h-5" />,
    },
    {
      id: 2,
      title: 'Memorial Day Observance',
      date: '2025-11-25',
      time: 'All Day',
      category: 'Event',
      description: 'Join us for a special Memorial Day service to honor and remember our loved ones. Families are welcome to participate.',
      priority: 'high',
      icon: <FaCalendarCheck className="w-5 h-5" />,
    },
    {
      id: 3,
      title: 'Office Hours Update',
      date: '2025-11-20',
      time: '9:00 AM - 5:00 PM',
      category: 'Administrative',
      description: 'Please note that our office hours will be adjusted during the holiday season. We will be open Monday through Saturday from 9 AM to 5 PM.',
      priority: 'normal',
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
    {
      id: 4,
      title: 'New Plot Availability',
      date: '2025-11-18',
      time: 'N/A',
      category: 'Information',
      description: 'New burial plots are now available in Section C. Please contact our office for more information and reservation details.',
      priority: 'normal',
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
    {
      id: 5,
      title: 'Annual Remembrance Ceremony',
      date: '2025-12-01',
      time: '10:00 AM',
      category: 'Event',
      description: 'Annual remembrance ceremony will be held to commemorate all those who have passed. All families are invited to attend.',
      priority: 'high',
      icon: <FaCalendarCheck className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'Event':
        return 'bg-sage-100 text-sage-700 border-sage-200';
      case 'Maintenance':
        return 'bg-stone-100 text-stone-700 border-stone-200';
      case 'Administrative':
        return 'bg-sage-50 text-sage-600 border-sage-100';
      default:
        return 'bg-stone-50 text-stone-600 border-stone-100';
    }
  };

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-sage-50 via-white to-stone-50/30 py-20 sm:py-28 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-sage-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-stone-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-sage-200/30 blur-2xl rounded-full"></div>
                <div className="relative w-20 h-20 bg-linear-to-br from-sage-100 to-sage-200 shadow-lg rounded-full flex items-center justify-center border border-sage-200/50">
                  <FaBell className="w-9 h-9 text-sage-600" />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-stone-800 mb-6 tracking-tight leading-tight"
            >
              {activeTab === 'notice' ? 'Notice Board' : 'Rules & Regulations'}
              <span className="block mt-3 bg-linear-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent font-light">
                {activeTab === 'notice' ? '& Announcements' : '& Guidelines'}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
            >
              {activeTab === 'notice' 
                ? 'Stay informed with the latest updates, events, and important announcements from Nerul Cemetery' 
                : 'Please review our cemetery rules and regulations to ensure a respectful and peaceful environment'}
            </motion.p>

            {/* Decorative leaf element */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="flex justify-center gap-3 mt-8"
            >
              <FaLeaf className="text-sage-300 w-5 h-5" />
              <FaSeedling className="text-sage-400 w-5 h-5" />
              <FaLeaf className="text-sage-300 w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-4 sm:py-6 md:py-8 border-b border-sage-100 sticky top-16 sm:top-20 z-40 backdrop-blur-sm bg-white/95 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => setActiveTab('notice')}
              className={`flex-1 max-w-[200px] sm:max-w-60 md:max-w-none md:flex-none px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'notice'
                  ? 'bg-linear-to-r from-sage-600 to-sage-700 text-white shadow-lg'
                  : 'bg-sage-50 text-stone-700 hover:bg-sage-100 border border-sage-200'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaBell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Notice</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`flex-1 max-w-[200px] sm:max-w-60 md:max-w-none md:flex-none px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'rules'
                  ? 'bg-linear-to-r from-sage-600 to-sage-700 text-white shadow-lg'
                  : 'bg-sage-50 text-stone-700 hover:bg-sage-100 border border-sage-200'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Rules & Regulations</span>
                <span className="sm:hidden">Rules</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      {activeTab === 'notice' && (
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2 bg-sage-50 rounded-full mb-6 border border-sage-100"
            >
              <FaSeedling className="text-sage-500" />
              <span className="text-sm font-medium text-sage-600 tracking-wide">
                Latest Updates
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-700 mb-4 tracking-tight"
            >
              Important Announcements
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed"
            >
              Please review the following notices for important information about our services and upcoming events
            </motion.p>
          </motion.div>

          {/* Notices List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {notices.map((notice) => (
              <motion.div
                key={notice.id}
                variants={itemVariants}
                className="group relative bg-linear-to-br from-white via-white to-sage-50/30 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-sage-100 overflow-hidden"
              >
                {/* Subtle gradient accent on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-sage-500/0 via-sage-400/0 to-sage-500/0 group-hover:from-sage-500/5 group-hover:via-sage-400/5 group-hover:to-sage-500/5 transition-all duration-300"></div>

                {/* Priority indicator */}
                {notice.priority === 'high' && (
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                    <div className="absolute top-6 right-[-30px] transform rotate-45 bg-linear-to-r from-sage-500 to-sage-600 text-white text-xs font-semibold py-1 px-10 shadow-lg">
                      Important
                    </div>
                  </div>
                )}

                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Category & Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-linear-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center text-sage-600 shadow-sm">
                          {notice.icon}
                        </div>
                        <span className={`text-xs font-semibold px-4 py-1.5 rounded-full border ${getCategoryStyle(notice.category)}`}>
                          {notice.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-3">
                        {notice.title}
                      </h3>
                    </div>
                  </div>

                  {/* Date & Time Section */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-5 pb-5 border-b border-sage-100">
                    <div className="flex items-center gap-2 text-stone-600">
                      <div className="w-9 h-9 bg-sage-50 rounded-lg flex items-center justify-center">
                        <FaCalendarAlt className="text-sage-500 text-sm" />
                      </div>
                      <span className="text-sm font-medium">
                        {new Date(notice.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600">
                      <div className="w-9 h-9 bg-sage-50 rounded-lg flex items-center justify-center">
                        <FaClock className="text-sage-500 text-sm" />
                      </div>
                      <span className="text-sm font-medium">{notice.time}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-700 leading-relaxed text-base">
                    {notice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* Rules & Regulations Section */}
      {activeTab === 'rules' && (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-sage-50 rounded-full mb-4 sm:mb-6 border border-sage-100"
            >
              <FaClipboardList className="text-sage-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium text-sage-600 tracking-wide">
                Guidelines
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-stone-700 mb-3 sm:mb-4 tracking-tight px-2"
            >
              Cemetery Rules & Regulations
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Please familiarize yourself with our rules to maintain a peaceful and respectful environment
            </motion.p>
          </motion.div>
          {/* Rules List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto"
          >
            {rules.map((rule) => (
              <motion.div
                key={rule.id}
                variants={itemVariants}
                className="bg-linear-to-br from-white via-white to-sage-50/30 rounded-xl sm:rounded-2xl shadow-md border border-sage-100 p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-sage-100 to-sage-200 rounded-lg sm:rounded-xl flex items-center justify-center text-sage-600 shadow-sm">
                    {rule.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-stone-800 mb-1.5 sm:mb-2 leading-tight">
                      {rule.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-xs sm:text-sm md:text-base">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-linear-to-br from-sage-100/70 via-sage-50 to-stone-100/60 overflow-hidden">
        {/* Decorative background */}
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
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-md rounded-full mb-8 border border-sage-100"
            >
              <FaExclamationCircle className="w-7 h-7 sm:w-9 sm:h-9 text-sage-600" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-700 mb-6 tracking-tight px-4">
              Have Questions or Need Assistance?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-light">
              Our compassionate team is here to help you with any inquiries about notices,
              events, or services. We&apos;re available to provide support and information.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-linear-to-r from-sage-600 to-sage-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 shadow-lg overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Contact Us Today</span>
                <FaArrowRight className="ml-3 relative z-10" />
                <div className="absolute inset-0 bg-linear-to-r from-sage-700 to-sage-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-sage-600 text-sage-700 rounded-full font-semibold hover:bg-sage-600 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
              >
                Learn More
                <FaLeaf className="ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
