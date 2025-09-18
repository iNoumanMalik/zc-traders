import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 px-4 md:px-0">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-bold font-heading text-forest-deep hover:text-forest-dark transition-colors duration-300"
            >
              ZC Traders
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  to={item.path}
                  className={`nav-link pb-1 ${
                    isActive(item.path) 
                      ? 'text-forest-dark after:w-full' 
                      : 'text-forest-deep'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="btn-primary ml-4"
              >
                Talk to Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg text-forest-deep hover:text-forest-dark hover:bg-forest-light/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300 origin-center"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      onClick={closeMenu}
                      className={`block py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.path) 
                          ? 'text-forest-dark bg-forest-light/30' 
                          : 'text-forest-deep hover:text-forest-dark hover:bg-forest-light/20'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Link 
                    to="/contact" 
                    onClick={closeMenu}
                    className="btn-primary w-full text-center block"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;