import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Target, Eye, Heart, CheckCircle, Star, Shield, Zap, Clock, Trophy, MapPin, Building2, Handshake, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '50+', color: 'text-forest-dark' },
    { icon: Globe, label: 'Countries Served', value: '25+', color: 'text-forest-mid' },
    { icon: Award, label: 'Years Experience', value: '10+', color: 'text-forest-dark' },
    { icon: Star, label: 'Happy Clients', value: '500+', color: 'text-forest-mid' },
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect businesses worldwide with extraordinary and rare products through reliable sourcing, authentic verification, and exceptional service that exceeds expectations.',
      gradient: 'from-forest-light/20 to-forest-mid/30'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the global leader in rare product sourcing, making the impossible to find easily accessible while preserving authenticity and cultural heritage.',
      gradient: 'from-forest-mid/20 to-forest-dark/30'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, authenticity, and customer satisfaction drive everything we do. We believe in building lasting relationships based on trust and mutual success.',
      gradient: 'from-forest-dark/20 to-forest-light/30'
    },
  ];

  const uniqueFeatures = [
    {
      icon: Shield,
      title: 'Authenticity Guarantee',
      description: 'Every product is verified and authenticated by our expert team'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Trusted suppliers and partners in over 25 countries worldwide'
    },
    {
      icon: Zap,
      title: 'Fast Sourcing',
      description: 'Rapid identification and procurement of rare products'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and consultation'
    },
    {
      icon: Trophy,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Handshake,
      title: 'Trusted Partnerships',
      description: 'Long-term relationships with verified suppliers'
    }
  ];

  const officeLocations = [
    {
      title: 'Global Headquarters',
      location: 'International Trade Center',
      description: 'Our main operations hub coordinating worldwide sourcing',
      icon: Building2,
      gradient: 'from-forest-dark/20 to-forest-mid/30'
    },
    {
      title: 'Asia Pacific Office',
      location: 'Regional Sourcing Hub',
      description: 'Specialized in rare minerals and artisan crafts',
      icon: MapPin,
      gradient: 'from-forest-mid/20 to-forest-light/30'
    },
    {
      title: 'European Division',
      location: 'Heritage & Antiques Center',
      description: 'Focus on vintage collectibles and cultural artifacts',
      icon: Trophy,
      gradient: 'from-forest-light/20 to-forest-dark/30'
    },
    {
      title: 'Americas Branch',
      location: 'Innovation & Technology Hub',
      description: 'Advanced sourcing technology and logistics',
      icon: Lightbulb,
      gradient: 'from-forest-dark/30 to-forest-light/20'
    },
    {
      title: 'Middle East Office',
      location: 'Luxury Goods Center',
      description: 'Premium products and exclusive collections',
      icon: Star,
      gradient: 'from-forest-mid/30 to-forest-dark/20'
    },
    {
      title: 'Africa Operations',
      location: 'Natural Resources Hub',
      description: 'Ethical sourcing of natural and organic products',
      icon: Globe,
      gradient: 'from-forest-light/30 to-forest-mid/20'
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-transparent to-forest-mid"></div>
        </div>
        
        <div className="relative container-custom section-padding">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest-deep">
                  About{' '}
                  <span className="text-forest-dark relative">
                    ZC Traders
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-forest-light/30 -z-10"
                    ></motion.div>
                  </span>
                </h1>
                <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Your trusted partner in sourcing extraordinary and rare products from around the world. 
                Discover our story, mission, and unwavering commitment to authenticity and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-forest-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
                  Our Journey to
                  <span className="text-forest-dark block">Extraordinary Discoveries</span>
                </h2>
                <div className="w-20 h-1 bg-forest-mid rounded-full"></div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between businesses and the world's most 
                  extraordinary products, ZC Traders has evolved from a passionate startup to a 
                  global sourcing powerhouse specializing in rare and unique finds.
                </p>
                <p>
                  Our journey began when we recognized the immense challenges businesses face in 
                  finding authentic, high-quality rare products that aren't available through 
                  traditional supply chains. We set out to solve this by building trusted 
                  relationships with artisans, collectors, and suppliers worldwide.
                </p>
                <p>
                  Today, we're proud to serve over 500 clients across 25 countries, helping them 
                  access extraordinary products that set their businesses apart and tell unique stories.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-elevated p-8 bg-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 rounded-xl bg-forest-light/5 hover:bg-forest-light/10 transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold text-forest-deep mb-1">{stat.value}</div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
              What Drives Our Passion
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission, vision, and values are the foundation of every relationship we build 
              and every extraordinary product we discover.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-elevated bg-white text-center group cursor-pointer overflow-hidden"
                >
                  <div className={`h-32 bg-gradient-to-br ${value.gradient} flex items-center justify-center relative`}>
                    <Icon className="w-12 h-12 text-forest-dark group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/5 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-forest-light/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
              Why ZC Traders is Extraordinary
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just another trading company. Our unique approach, global network, 
              and commitment to authenticity set us apart in the world of rare product sourcing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-elevated bg-white p-6 text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-forest-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-light/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-forest-dark group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-forest-deep mb-3 group-hover:text-forest-dark transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Global Presence */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
              Our Global Network
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From our headquarters to our partner locations worldwide, we're strategically 
              positioned to discover and deliver the world's most extraordinary products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => {
              const Icon = office.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-elevated bg-white overflow-hidden group cursor-pointer"
                >
                  <div className={`h-40 bg-gradient-to-br ${office.gradient} flex items-center justify-center relative`}>
                    <Icon className="w-12 h-12 text-forest-dark group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/10 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-heading font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300">
                      {office.title}
                    </h3>
                    <p className="text-forest-mid font-medium text-sm">
                      {office.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {office.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-forest-deep text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ready to Discover the Extraordinary?
              </h2>
              <div className="w-20 h-1 bg-forest-light rounded-full mx-auto"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                Join hundreds of businesses who trust ZC Traders to source their most 
                challenging and unique product requirements. Let's start your journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-secondary bg-white text-forest-dark hover:bg-forest-light hover:text-white">
                  Start Your Search
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-forest-dark">
                  Explore Collections
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;