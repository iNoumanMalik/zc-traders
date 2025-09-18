import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const productCategories = [
    'Rare Minerals',
    'Exotic Spices', 
    'Artisan Crafts',
    'Vintage Collectibles',
    'Specialty Foods',
  ];

  const contactInfo = [
    { label: 'Address', value: '123 Business District, New York, NY 10001' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'Email', value: 'info@zctraders.com' },
    { label: 'Hours', value: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM' },
  ];

  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-custom mt-8 py-4 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold font-heading mb-2">ZC Traders</h3>
              <p className="text-forest-light/80 text-sm">Rare Products & Reliable Supply</p>
            </motion.div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Your trusted partner for sourcing rare and unique products from around the world. 
              We connect businesses with hard-to-find items and reliable suppliers.
            </p>
            
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="btn-secondary inline-block"
              >
                Get Started
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6 text-forest-light">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-forest-mid rounded-full mr-3 group-hover:bg-forest-light transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6 text-forest-light">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="text-white/80 hover:text-white transition-all duration-200 flex items-center group cursor-pointer">
                    <span className="w-1.5 h-1.5 bg-forest-mid rounded-full mr-3 group-hover:bg-forest-light transition-colors duration-200"></span>
                    {category}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6 text-forest-light">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group"
                >
                  <p className="text-forest-light/90 text-sm font-medium mb-1">{info.label}</p>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-200 text-sm leading-relaxed">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} ZC Traders. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href="#"
                  className="text-white/70 hover:text-white transition-all duration-200 hover:underline"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Additional Brand Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-6 pt-6 border-t border-white/10"
          >
            <p className="text-white/60 text-xs">
              Connecting businesses worldwide with rare and unique products since 2020
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;