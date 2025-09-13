import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, Package, MessageSquare } from 'lucide-react';
import { sendInquiryEmail, sendAcknowledgmentEmail, sendWhatsAppMessage, generateInquiryWhatsAppMessage, type InquiryFormData } from '../lib/emailService';



const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    whatsapp: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Gemstones & Minerals',
    'Precious Metals',
    'Rare Artifacts',
    'Cultural Heritage Items',
    'Custom Sourcing',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send inquiry email to company
      const emailSent = await sendInquiryEmail(formData);
      
      if (emailSent) {
        // Send acknowledgment email to customer
        await sendAcknowledgmentEmail(formData.email);
        
        // Generate WhatsApp message
        const whatsappMessage = generateInquiryWhatsAppMessage(formData.name);
        await sendWhatsAppMessage(formData.whatsapp, whatsappMessage);
        
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            whatsapp: '',
            email: '',
            category: '',
            message: ''
          });
        }, 5000);
      } else {
        alert('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl luxury-shadow text-center"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Submitted Successfully</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in our heritage collection. We will contact you within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          You will receive a confirmation via email and WhatsApp shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl luxury-shadow"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
          Heritage Inquiry
        </h2>
        <p className="text-gray-600">
          Connect with our curators to explore our exceptional collections
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* WhatsApp Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            WhatsApp Number *
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
            placeholder="+92 300 1234567"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Category Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Package className="w-4 h-4 inline mr-2" />
            Category of Interest *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Tell us about your specific requirements or interests..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold luxury-shadow hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Inquiry</span>
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>We respect your privacy and will never share your information with third parties.</p>
      </div>
    </motion.div>
  );
};

export default InquiryForm;