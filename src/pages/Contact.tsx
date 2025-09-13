import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building, Globe, Headphones, Calendar, Star, Award, Shield, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'normal',
    productType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        urgency: 'normal',
        productType: '',
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Our Experts',
      subtitle: 'Speak directly with our sourcing specialists',
      details: [
        { label: 'Main Office', value: '+1 (555) 123-4567' },
        { label: 'Direct Line', value: '+1 (555) 987-6543' },
        { label: 'Hours', value: 'Mon-Fri: 9AM-6PM EST' }
      ],
      color: 'text-forest-dark',
      bgGradient: 'from-forest-light/20 to-forest-mid/30',
      action: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business',
      subtitle: 'Quick responses for urgent inquiries',
      details: [
        { label: 'Business Line', value: '+1 (555) 456-7890' },
        { label: 'Response Time', value: 'Within 30 minutes' },
        { label: 'Available', value: '24/7 for urgent needs' }
      ],
      color: 'text-forest-mid',
      bgGradient: 'from-forest-mid/20 to-forest-dark/30',
      action: 'Message Us'
    },
    {
      icon: Mail,
      title: 'Email Support',
      subtitle: 'Detailed inquiries and documentation',
      details: [
        { label: 'General', value: 'hello@zctraders.com' },
        { label: 'Sales', value: 'sales@zctraders.com' },
        { label: 'Support', value: 'support@zctraders.com' }
      ],
      color: 'text-forest-dark',
      bgGradient: 'from-forest-dark/20 to-forest-light/30',
      action: 'Send Email'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      subtitle: 'Book a consultation with our team',
      details: [
        { label: 'Video Call', value: 'Zoom, Teams, or Meet' },
        { label: 'Duration', value: '30-60 minutes' },
        { label: 'Availability', value: 'Same day booking' }
      ],
      color: 'text-forest-mid',
      bgGradient: 'from-forest-light/30 to-forest-mid/20',
      action: 'Book Now'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '123 Business District, Commerce City, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM-6PM EST',
      isHeadquarters: true
    },
    {
      city: 'Los Angeles',
      address: '456 Trade Center, LA, CA 90210',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Fri: 9AM-6PM PST',
      isHeadquarters: false
    },
    {
      city: 'London',
      address: '789 Commerce Street, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      hours: 'Mon-Fri: 9AM-5PM GMT',
      isHeadquarters: false
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record in rare product sourcing'
    },
    {
      icon: Shield,
      title: '100% Authenticity',
      description: 'Every product verified and guaranteed authentic'
    },
    {
      icon: Zap,
      title: '24-Hour Response',
      description: 'Quick turnaround on all inquiries and quotes'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Trusted suppliers in 25+ countries worldwide'
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
                  Let's Make the{' '}
                  <span className="text-forest-dark relative">
                    Impossible Possible
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
                Ready to find that extraordinary product or discuss a custom sourcing project? 
                Our expert team is here to turn your unique requirements into reality.
              </p>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '25+', label: 'Countries' },
                { number: '1000+', label: 'Products Sourced' },
                { number: '24hr', label: 'Response Time' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-forest-dark">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout: Contact Info + Form */}
      <section className="section-padding bg-forest-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
                  Get in Touch
                </h2>
                <div className="w-20 h-1 bg-forest-mid rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Choose your preferred way to connect with our sourcing experts. 
                  We're committed to providing personalized service and quick responses.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="card-elevated bg-white p-6 group cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.bgGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-heading font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300">
                              {method.title}
                            </h3>
                            <p className="text-sm text-gray-600">{method.subtitle}</p>
                          </div>
                          <div className="space-y-1">
                            {method.details.map((detail, idx) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <span className="text-gray-500">{detail.label}:</span>
                                <span className="text-forest-dark font-medium">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-forest-dark font-medium text-sm hover:text-forest-mid transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>{method.action}</span>
                            <Send className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-heading font-semibold text-forest-deep">
                  Why Choose ZC Traders?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-8 h-8 bg-forest-light/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-forest-dark" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-forest-deep">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-elevated bg-white p-8 sticky top-8"
              >
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-forest-light/20 rounded-full flex items-center justify-center mx-auto">
                      <Send className="w-10 h-10 text-forest-dark" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-bold text-forest-deep">
                        Your Message is On Its Way! 🚀
                      </h3>
                      <p className="text-gray-600">
                        Thanks for reaching out! Our sourcing experts will get back to you within 24 hours with personalized assistance.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-bold text-forest-deep">
                        Tell Us About Your Project
                      </h3>
                      <p className="text-gray-600">
                        The more details you share, the better we can help you find exactly what you need.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-forest-deep">
                            What's your name? *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                                focusedField === 'name'
                                  ? 'border-forest-mid ring-2 ring-forest-light/30'
                                  : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                              }`}
                              placeholder="Your full name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-forest-deep">
                            How can we reach you? *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                                focusedField === 'email'
                                  ? 'border-forest-mid ring-2 ring-forest-light/30'
                                  : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                              }`}
                              placeholder="your.email@company.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="company" className="block text-sm font-medium text-forest-deep">
                            Which company do you represent?
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('company')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                                focusedField === 'company'
                                  ? 'border-forest-mid ring-2 ring-forest-light/30'
                                  : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                              }`}
                              placeholder="Your company name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="urgency" className="block text-sm font-medium text-forest-deep">
                            How urgent is this request?
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('urgency')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                              focusedField === 'urgency'
                                ? 'border-forest-mid ring-2 ring-forest-light/30'
                                : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                            }`}
                          >
                            <option value="low">Just browsing - no rush</option>
                            <option value="normal">Standard timeline - few weeks</option>
                            <option value="high">Pretty urgent - within days</option>
                            <option value="critical">Emergency - ASAP!</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-forest-deep">
                          What's this about? *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                              focusedField === 'subject'
                                ? 'border-forest-mid ring-2 ring-forest-light/30'
                                : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                            }`}
                            placeholder="Brief summary of what you need"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-forest-deep">
                          Tell us more about your needs *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                            focusedField === 'message'
                              ? 'border-forest-mid ring-2 ring-forest-light/30'
                              : 'border-gray-300 focus:border-forest-mid focus:ring-2 focus:ring-forest-light/30'
                          }`}
                          placeholder="Share details about the product you're looking for, specifications, quantities, timeline, budget range, or any other information that would help us assist you better. The more specific you are, the better we can help!"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'btn-primary hover:shadow-lg'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Your Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send My Request</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest-deep">
              Our Global Presence
            </h2>
            <div className="w-20 h-1 bg-forest-mid rounded-full mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our offices worldwide or schedule a virtual meeting with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-elevated bg-white p-6 text-center group cursor-pointer relative"
              >
                {office.isHeadquarters && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-forest-dark text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>HQ</span>
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-forest-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-light/30 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-forest-dark" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-forest-deep mb-3 group-hover:text-forest-dark transition-colors duration-300">
                  {office.city}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{office.hours}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-forest-dark font-medium text-sm hover:text-forest-mid transition-colors duration-200 flex items-center justify-center space-x-1 mx-auto"
                >
                  <span>Get Directions</span>
                  <MapPin className="w-3 h-3" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-forest-light/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-elevated bg-white overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-forest-light/30 to-forest-mid/40 flex items-center justify-center relative">
              <div className="text-center text-forest-deep space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold">Interactive World Map</h3>
                  <p className="text-forest-mid">Explore our global network and office locations</p>
                  <div className="text-sm text-forest-dark/70">Map integration coming soon</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-forest-dark rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 right-12 w-2 h-2 bg-forest-mid rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/3 right-8 w-4 h-4 bg-forest-light rounded-full animate-pulse delay-700"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;