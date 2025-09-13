import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Smartphone, Copy, CheckCircle, Upload, MessageCircle, ExternalLink } from 'lucide-react';
import { sendWhatsAppMessage } from '../lib/emailService';

const Payment: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [receiptUploaded] = useState(false);
  const [receiptData, setReceiptData] = useState({
    orderNumber: '',
    paymentMethod: '',
    transactionId: '',
    amount: '',
    customerName: '',
    customerPhone: ''
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };



  const handleReceiptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create WhatsApp message with payment details
      const message = `🧾 *Payment Receipt Submission*\n\n` +
        `📋 *Order Number:* ${receiptData.orderNumber}\n` +
        `💳 *Payment Method:* ${receiptData.paymentMethod}\n` +
        `🔢 *Transaction ID:* ${receiptData.transactionId}\n` +
        `💰 *Amount:* PKR ${receiptData.amount}\n` +
        `👤 *Customer:* ${receiptData.customerName}\n\n` +
        `Please verify this payment and confirm my order. Thank you! 🙏`;
      
      // Company WhatsApp number (replace with actual number)
      const companyWhatsApp = '+923001234567';
      
      // Send WhatsApp message
      await sendWhatsAppMessage(companyWhatsApp, message);
      
      alert('Payment receipt submitted successfully! We will verify and confirm your payment within 24 hours.');
      
      // Reset form
      setReceiptData({
        orderNumber: '',
        paymentMethod: '',
        transactionId: '',
        amount: '',
        customerName: '',
        customerPhone: ''
      });
    } catch (error) {
      console.error('Error submitting receipt:', error);
      alert('Failed to submit receipt. Please try again or contact us directly.');
    }
  };
  
  const openWhatsAppDirect = () => {
    const message = `Hello! I would like to submit my payment receipt for order verification. 📋`;
    const companyWhatsApp = '+923001234567';
    const whatsappUrl = `https://wa.me/${companyWhatsApp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const paymentMethods = [
    {
      id: 'bank',
      title: 'Bank Transfer',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      details: {
        bankName: 'Habib Bank Limited (HBL)',
        accountTitle: 'ZC Traders Heritage Collection',
        accountNumber: '12345678901234',
        iban: 'PK36HABB0012345678901234',
        branchCode: '1234'
      }
    },
    {
      id: 'easypaisa',
      title: 'Easypaisa',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-600',
      details: {
        accountNumber: '03001234567',
        accountTitle: 'ZC Traders',
        charges: 'No additional charges for amounts above PKR 1,000'
      }
    },
    {
      id: 'jazzcash',
      title: 'JazzCash',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      details: {
        accountNumber: '03009876543',
        accountTitle: 'ZC Traders',
        charges: 'Standard JazzCash charges apply'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred payment method for secure transactions
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl luxury-shadow p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Method Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{method.title}</h3>
                </div>

                {/* Method Details */}
                <div className="space-y-4">
                  {method.id === 'bank' && (
                    <>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Bank Name:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.bankName!, 'bank-name')}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === 'bank-name' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-semibold text-gray-800">{method.details.bankName}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Title:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountTitle!, 'account-title')}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === 'account-title' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-semibold text-gray-800">{method.details.accountTitle}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Number:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountNumber!, 'account-number')}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === 'account-number' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-mono font-semibold text-gray-800">{method.details.accountNumber}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">IBAN:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.iban!, 'iban')}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === 'iban' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-mono font-semibold text-gray-800">{method.details.iban}</p>
                      </div>
                    </>
                  )}

                  {(method.id === 'easypaisa' || method.id === 'jazzcash') && (
                    <>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Number:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountNumber!, `${method.id}-number`)}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === `${method.id}-number` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-mono font-semibold text-gray-800 text-lg">{method.details.accountNumber}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Title:</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountTitle!, `${method.id}-title`)}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {copiedText === `${method.id}-title` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="font-semibold text-gray-800">{method.details.accountTitle}</p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-xl">
                        <p className="text-sm text-amber-700">
                          <strong>Note:</strong> {method.details.charges}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl luxury-shadow p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Payment Instructions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Step-by-Step Process:</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  <span>Choose your preferred payment method from above</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  <span>Make the payment using the provided account details</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  <span>Take a screenshot or photo of your payment receipt</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  <span>Send the receipt via WhatsApp for verification</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Important Notes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>All payments are processed within 24 hours</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Keep your payment receipt for record</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Order confirmation sent after payment verification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Secure and encrypted transaction processing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Receipt Submission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl luxury-shadow p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Submit Payment Receipt
          </h2>
          <p className="text-gray-600 text-center mb-8">
            After making your payment, submit your receipt via WhatsApp for quick verification and order confirmation.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Receipt Form */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-2" />
                Payment Details
              </h3>
              
              <form onSubmit={handleReceiptSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiptData.orderNumber}
                    onChange={(e) => setReceiptData({...receiptData, orderNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all duration-200"
                    placeholder="ZC-2024-001"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method *
                  </label>
                  <select
                    required
                    value={receiptData.paymentMethod}
                    onChange={(e) => setReceiptData({...receiptData, paymentMethod: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all duration-200"
                  >
                    <option value="">Select payment method</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Easypaisa">Easypaisa</option>
                    <option value="JazzCash">JazzCash</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiptData.transactionId}
                    onChange={(e) => setReceiptData({...receiptData, transactionId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all duration-200"
                    placeholder="Transaction/Reference ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (PKR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={receiptData.amount}
                    onChange={(e) => setReceiptData({...receiptData, amount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all duration-200"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiptData.customerName}
                    onChange={(e) => setReceiptData({...receiptData, customerName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Submit via WhatsApp</span>
                </motion.button>
              </form>
            </div>
            
            {/* WhatsApp Direct */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6">
                Direct WhatsApp
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Quick & Easy</h4>
                    <p className="text-green-100">Send your payment screenshot directly via WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Fast Verification</h4>
                    <p className="text-green-100">Get confirmation within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Direct Contact</h4>
                    <p className="text-green-100">Chat directly with our payment team</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={openWhatsAppDirect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Open WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
              
              <p className="text-center text-green-100 mt-4 text-sm">
                WhatsApp: +92 300 1234567
              </p>
            </div>
          </div>
          
          {receiptUploaded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 text-center"
            >
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-green-700">Receipt uploaded successfully! We'll verify and confirm your order soon.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;