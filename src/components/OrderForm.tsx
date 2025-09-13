import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, CreditCard, Hash, CheckCircle } from 'lucide-react';
import { sendOrderEmail, sendAcknowledgmentEmail, sendWhatsAppMessage, generateOrderWhatsAppMessage, type OrderFormData as EmailOrderFormData } from '../lib/emailService';

interface OrderFormData {
  product: string;
  customProduct: string;
  quantity: number;
  paymentMethod: string;
  customerName: string;
  whatsapp: string;
  email: string;
  deliveryAddress: string;
  specialInstructions: string;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    product: '',
    customProduct: '',
    quantity: 1,
    paymentMethod: '',
    customerName: '',
    whatsapp: '',
    email: '',
    deliveryAddress: '',
    specialInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const products = [
    'Premium Gemstones Collection',
    'Rare Minerals & Crystals',
    'Precious Metal Artifacts',
    'Cultural Heritage Pieces',
    'Antique Jewelry Collection',
    'Custom Sourcing Request',
    'Other (Please Specify)'
  ];

  const paymentMethods = [
    'Bank Transfer',
    'Easypaisa',
    'JazzCash',
    'Cash on Delivery'
  ];

  const generateOrderNumber = () => {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 999) + 1;
    return `ZC-${year}-${randomNum.toString().padStart(3, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate order number
       const generatedOrderNumber = generateOrderNumber();
       
       // Convert form data to email service format
       const orderData: EmailOrderFormData = {
         customerName: formData.customerName,
         email: formData.email,
         whatsapp: formData.whatsapp,
         product: formData.product || formData.customProduct,
         quantity: formData.quantity,
         paymentMethod: formData.paymentMethod,
         deliveryAddress: `${formData.deliveryAddress}\n\nSpecial Instructions: ${formData.specialInstructions}`,
         orderNumber: generatedOrderNumber
       };
       
       // Send order email to company
       const emailSent = await sendOrderEmail(orderData);
      
      if (emailSent) {
        // Send acknowledgment email to customer
        await sendAcknowledgmentEmail(formData.email);
        
        // Generate WhatsApp message
        const whatsappMessage = generateOrderWhatsAppMessage(generatedOrderNumber, formData.customerName);
        await sendWhatsAppMessage(formData.whatsapp, whatsappMessage);
        
        setOrderNumber(generatedOrderNumber);
        setSubmitted(true);
        
        // Reset form after 7 seconds
        setTimeout(() => {
          setSubmitted(false);
          setOrderNumber('');
          setFormData({
            product: '',
            customProduct: '',
            quantity: 1,
            paymentMethod: '',
            customerName: '',
            whatsapp: '',
            email: '',
            deliveryAddress: '',
            specialInstructions: ''
          });
        }, 7000);
      } else {
        alert('Failed to submit order. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
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
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully</h3>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4">
          <p className="text-sm text-gray-600 mb-2">Your Order Number:</p>
          <p className="text-2xl font-bold text-amber-600">{orderNumber}</p>
        </div>
        <p className="text-gray-600 mb-4">
          Thank you for your order! Please proceed with payment using the details we'll send you.
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>✓ Order confirmation sent to your email</p>
          <p>✓ Payment instructions sent via WhatsApp</p>
          <p>✓ Order tracking details will follow</p>
        </div>
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
          Place Your Order
        </h2>
        <p className="text-gray-600">
          Secure your piece from our heritage collection
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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

        {/* Product Selection */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Package className="w-4 h-4 inline mr-2" />
            Product Category *
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
          >
            <option value="">Select a product category</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Product Field */}
        {formData.product === 'Other (Please Specify)' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specify Product *
            </label>
            <input
              type="text"
              name="customProduct"
              value={formData.customProduct}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Please specify the product you're looking for"
            />
          </div>
        )}

        {/* Quantity and Payment Method */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Hash className="w-4 h-4 inline mr-2" />
              Quantity *
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              min="1"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Payment Method *
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <option value="">Select payment method</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Address *
          </label>
          <textarea
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Enter your complete delivery address"
          />
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Instructions (Optional)
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Any special requirements or instructions for your order..."
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
              <span>Processing Order...</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Place Order</span>
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Your order will be confirmed after payment verification. Secure transactions guaranteed.</p>
      </div>
    </motion.div>
  );
};

export default OrderForm;