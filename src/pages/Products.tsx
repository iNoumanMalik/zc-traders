import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ArrowRight, Package, Zap, Shield, Globe, Eye, Heart, Gem, Cpu, Palette, Beaker, Trophy, Cog } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productCategories = [
    {
      id: 'rare-minerals',
      name: 'Rare Minerals & Gems',
      description: 'Extraordinary geological specimens, precious stones, and rare earth elements sourced from remote locations worldwide.',
      icon: Gem,
      productCount: 145,
      featured: true,
      gradient: 'from-forest-light/20 to-forest-mid/30',
      specialties: ['Precious Gemstones', 'Rare Earth Elements', 'Meteorite Fragments', 'Crystal Specimens']
    },
    {
      id: 'vintage-electronics',
      name: 'Vintage Electronics',
      description: 'Classic electronic components, vintage computing equipment, and hard-to-find technological artifacts.',
      icon: Cpu,
      productCount: 89,
      featured: false,
      gradient: 'from-forest-mid/20 to-forest-dark/30',
      specialties: ['Vintage Processors', 'Rare Semiconductors', 'Classic Audio Equipment', 'Antique Calculators']
    },
    {
      id: 'artisan-crafts',
      name: 'Artisan Crafts',
      description: 'Handcrafted masterpieces from skilled artisans, featuring traditional techniques and cultural heritage.',
      icon: Palette,
      productCount: 67,
      featured: true,
      gradient: 'from-forest-dark/20 to-forest-light/30',
      specialties: ['Hand-woven Textiles', 'Ceramic Masterpieces', 'Wooden Sculptures', 'Metal Artwork']
    },
    {
      id: 'specialty-chemicals',
      name: 'Specialty Chemicals',
      description: 'Laboratory-grade compounds, industrial chemicals, and specialized formulations for research and manufacturing.',
      icon: Beaker,
      productCount: 203,
      featured: false,
      gradient: 'from-forest-light/30 to-forest-mid/20',
      specialties: ['Research Compounds', 'Industrial Catalysts', 'Pharmaceutical Intermediates', 'Analytical Standards']
    },
    {
      id: 'collectibles',
      name: 'Rare Collectibles',
      description: 'Limited edition items, vintage collectibles, and exclusive pieces that tell unique stories.',
      icon: Trophy,
      productCount: 156,
      featured: true,
      gradient: 'from-forest-mid/30 to-forest-dark/20',
      specialties: ['Vintage Coins', 'Limited Editions', 'Historical Artifacts', 'Signed Memorabilia']
    },
    {
      id: 'industrial-parts',
      name: 'Industrial Components',
      description: 'Specialized machinery parts, industrial equipment, and hard-to-source manufacturing components.',
      icon: Cog,
      productCount: 298,
      featured: false,
      gradient: 'from-forest-dark/30 to-forest-light/20',
      specialties: ['Precision Machinery', 'Custom Fabrication', 'Legacy Equipment', 'Specialized Tools']
    }
  ];

  const keyFeatures = [
    {
      icon: Package,
      title: 'Authenticity Verified',
      description: 'Every product undergoes rigorous authentication and quality verification processes',
      color: 'text-forest-dark'
    },
    {
      icon: Zap,
      title: 'Rapid Sourcing',
      description: 'Lightning-fast identification and procurement of even the most elusive items',
      color: 'text-forest-mid'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Comprehensive satisfaction guarantee with full authenticity certification',
      color: 'text-forest-dark'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Exclusive access to verified suppliers and artisans across 25+ countries',
      color: 'text-forest-mid'
    }
  ];

  const filteredCategories = productCategories.filter(category => 
    (selectedCategory === 'all' || category.id === selectedCategory) &&
    (searchTerm === '' || category.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     category.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
                  Extraordinary{' '}
                  <span className="text-forest-dark relative">
                    Product Collections
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
                Discover our curated collection of rare and specialized products, 
                each carefully sourced from trusted suppliers and verified artisans worldwide.
              </p>
            </motion.div>
            
            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative card-elevated bg-white p-2">
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="What extraordinary product are you looking for?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-forest-light text-gray-900 placeholder-gray-500 bg-transparent"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 py-3 rounded-lg"
                  >
                    Discover
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-forest-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                    <Icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-forest-deep mb-2 group-hover:text-forest-dark transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
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
              Curated Product Categories
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each category represents years of relationship building with trusted suppliers, 
              ensuring authenticity and exceptional quality in every product we source.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-forest-dark text-white shadow-lg'
                  : 'bg-forest-light/20 text-forest-dark hover:bg-forest-light/30'
              }`}
            >
              All Categories
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-forest-dark text-white shadow-lg'
                    : 'bg-forest-light/20 text-forest-dark hover:bg-forest-light/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-elevated bg-white overflow-hidden group cursor-pointer"
                >
                  {/* Category Header */}
                  <div className={`h-32 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative`}>
                    <Icon className="w-12 h-12 text-forest-dark group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Featured Badge */}
                    {category.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-forest-dark text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}
                    
                    {/* Product Count */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-forest-dark px-3 py-1 rounded-full text-xs font-medium">
                        {category.productCount} items
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/10 transition-colors duration-300"></div>
                  </div>

                  {/* Category Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-heading font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Specialties */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-forest-mid">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.specialties.slice(0, 2).map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-forest-light/20 text-forest-dark px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                        {category.specialties.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{category.specialties.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-primary py-3 rounded-lg font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg"
                    >
                      <span>Request This Category</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Custom Sourcing CTA */}
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
                Can't Find What You're Seeking?
              </h2>
              <div className="w-20 h-1 bg-forest-light rounded-full mx-auto"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                Our expert sourcing team specializes in finding the impossible. Tell us about your 
                unique requirements, and we'll leverage our global network to make it happen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Eye, text: 'Expert Identification' },
                { icon: Globe, text: 'Global Sourcing' },
                { icon: Heart, text: 'Personalized Service' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-forest-light" />
                    </div>
                    <span className="text-sm text-white/80">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact" className="btn-secondary bg-white text-forest-dark hover:bg-forest-light hover:text-white">
                  Request Custom Sourcing
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest-dark">
                  Speak with Expert
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;