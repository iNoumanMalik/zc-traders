import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 32; // 8 * 4 (gap-8 in Tailwind)
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 32; // 8 * 4 (gap-8 in Tailwind)
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);
  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: "500+",
      color: "text-forest-dark",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "25+",
      color: "text-forest-mid",
    },
    {
      icon: Star,
      label: "Product Categories",
      value: "100+",
      color: "text-forest-dark",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "10+",
      color: "text-forest-mid",
    },
  ];

  const productCategories = [
    {
      title: "Mechanical Tools",
      description:
        "High-quality tools and equipment for workshops, industries, and repair work.",
      icon: "⚙️",
      features: [
        "Precision Engineering",
        "Durable Materials",
        "Industrial Standard",
      ],
      gradient: "from-forest-light/20 to-forest-mid/30",
    },
    {
      title: "Electrical & Electronics",
      description:
        "Specialized electrical tools, measuring devices, and unique components.",
      icon: "🔌",
      features: [
        "Certified Safety",
        "Advanced Technology",
        "Reliable Performance",
      ],
      gradient: "from-forest-mid/20 to-forest-dark/30",
    },
    {
      title: "Agriculture & Farming Tools",
      description:
        "Modern and rare equipment to improve farming efficiency and crop management.",
      icon: "🚜",
      features: [
        "High Productivity",
        "Affordable Solutions",
        "Trusted Quality",
      ],
      gradient: "from-forest-dark/20 to-forest-light/30",
    },
    {
      title: "Textile & Industrial Solutions",
      description:
        "Special tools and equipment for textile and manufacturing industries.",
      icon: "🧵",
      features: [
        "Tailored for Industry",
        "Innovative Products",
        "Global Sourcing",
      ],
      gradient: "from-forest-light/30 to-forest-mid/20",
    },
    {
      title: "Sports & Physio Products",
      description:
        "Unique physiotherapy, rehabilitation, and sports-related tools not common in Pakistan.",
      icon: "🏃",
      features: [
        "Rarely Available Locally",
        "High-Demand Products",
        "Quality Assured",
      ],
      gradient: "from-forest-mid/30 to-forest-dark/20",
    },
    {
      title: "Special Imports (Other Categories)",
      description:
        "A flexible section for any rare product in demand in Pakistan (general trading).",
      icon: "📦",
      features: ["Hard-to-Find Items", "Verified Supply", "Reliable Import"],
      gradient: "from-forest-dark/30 to-forest-light/20",
    },
  ];

  const companyHighlights = [
    "Global network of verified suppliers",
    "Quality assurance and authentication",
    "24/7 dedicated customer support",
    "Competitive pricing with transparency",
    "Fast and secure worldwide delivery",
    "Expert consultation and guidance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-transparent to-forest-mid"></div>
        </div>

        <div className="relative container-custom py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-forest-mid font-medium">
                    Rare Products & Reliable Supply
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest-deep leading-tight">
                  Discover the{" "}
                  <span className="text-forest-dark relative">
                    Extraordinary
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-forest-light/30 -z-10"
                    ></motion.div>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Your trusted partner for sourcing rare and unique products
                  from around the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/products" className="btn-primary group">
                    Explore Our Collection
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn-secondary">
                    Get Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="card-elevated p-8 bg-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-forest-dark" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-forest-deep">
                    Why Choose ZC Traders?
                  </h3>
                </div>

                <div className="space-y-4">
                  {companyHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-forest-mid rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 group-hover:text-forest-dark transition-colors duration-200">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-forest-light/20 rounded-full flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-forest-mid" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-forest-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-forest-deep mb-2 group-hover:text-forest-dark transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
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
                  Connecting Businesses with
                  <span className="text-forest-dark block">
                    Extraordinary Finds
                  </span>
                </h2>
                <div className="w-20 h-1 bg-forest-mid rounded-full"></div>
              </div>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At ZC Traders, we specialize in sourcing and supplying rare,
                  unique products that are impossible to find through
                  traditional channels. Our global network of verified suppliers
                  ensures authenticity and quality in every transaction.
                </p>
                <p>
                  From precious minerals to artisan crafts, we've built our
                  reputation on reliability, expertise, and exceptional customer
                  service. Let us help you discover the extraordinary products
                  that will set your business apart.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="btn-primary group">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
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
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-forest-light/5 hover:bg-forest-light/10 transition-colors duration-300"
                    >
                      <div className="text-3xl font-bold text-forest-dark mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
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
              Our Exclusive Collections
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated categories of rare and unique
              products, each sourced from trusted suppliers around the globe.
            </p>
          </motion.div>

          <div className="relative">
            {/* Left scroll button */}
            <button
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "opacity-100 hover:bg-white hover:scale-110"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-forest-dark" />
            </button>

            {/* Right scroll button */}
            <button
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "opacity-100 hover:bg-white hover:scale-110"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-forest-dark" />
            </button>

            {/* Left fade indicator */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-forest-light/5 to-transparent z-5 pointer-events-none transition-opacity duration-300 ${
                canScrollLeft ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Right fade indicator */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-forest-light/5 to-transparent z-5 pointer-events-none transition-opacity duration-300 ${
                canScrollRight ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              onScroll={checkScrollButtons}
            >
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-elevated bg-white overflow-hidden group cursor-pointer flex-shrink-0 w-80 sm:w-96 h-auto flex flex-col"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/10 transition-colors duration-300"></div>
                  </div>

                  <div className="flex flex-col flex-grow min-h-0">
                    <div className="p-6 pb-0 flex-grow min-h-0 overflow-hidden">
                      <div className="space-y-4 h-full flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-xl font-heading font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300 mb-4">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {category.description}
                          </p>
                        </div>
                        <div className="flex-grow min-h-0 overflow-hidden">
                          <ul className="space-y-2">
                            {category.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-forest-mid rounded-full mr-3 mt-2 group-hover:bg-forest-dark transition-colors duration-300 flex-shrink-0"></div>
                                <span className="line-clamp-2 leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-4 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full btn-secondary text-center"
                      >
                        Explore Collection
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ready to Discover Something Extraordinary?
              </h2>
              <div className="w-20 h-1 bg-forest-light rounded-full mx-auto"></div>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Let our experts help you source the rare and unique products
                your business needs. Start your journey with a free consultation
                today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn-secondary bg-white text-forest-dark hover:bg-forest-light hover:text-white group"
                >
                  Start Your Search
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="btn-outline border-white text-white hover:bg-white hover:text-forest-dark"
                >
                  Talk with experts
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
