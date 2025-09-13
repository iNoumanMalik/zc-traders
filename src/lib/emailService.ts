// Email service for handling form submissions

export interface InquiryFormData {
  name: string;
  whatsapp: string;
  email: string;
  category: string;
  message: string;
}

export interface OrderFormData {
  customerName: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: number;
  paymentMethod: string;
  deliveryAddress: string;
  orderNumber?: string;
}

// Generate unique order number in format ZC-YYYY-XXX
export const generateOrderNumber = (): string => {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(Math.random() * 900) + 100; // 3-digit number
  return `ZC-${year}-${randomNum}`;
};



// Send inquiry email (using EmailJS or similar service)
export const sendInquiryEmail = async (data: InquiryFormData): Promise<boolean> => {
  try {
    // In a real implementation, you would use EmailJS, Nodemailer, or similar service
    // For now, we'll simulate the email sending
    console.log('Sending inquiry email:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll always return success
    // In production, integrate with your preferred email service
    return true;
  } catch (error) {
    console.error('Failed to send inquiry email:', error);
    return false;
  }
};

// Send order email
export const sendOrderEmail = async (data: OrderFormData): Promise<boolean> => {
  try {
    // Generate order number if not provided
    if (!data.orderNumber) {
      data.orderNumber = generateOrderNumber();
    }
    
    console.log('Sending order email:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll always return success
    return true;
  } catch (error) {
    console.error('Failed to send order email:', error);
    return false;
  }
};

// Send auto-acknowledgment email to customer
export const sendAcknowledgmentEmail = async (
  customerEmail: string
): Promise<boolean> => {
  try {
    console.log('Sending acknowledgment email to:', customerEmail);
    
    // In a real implementation, you would use a service like EmailJS, SendGrid, etc.
    // For now, we'll just simulate the email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Failed to send acknowledgment email:', error);
    throw error;
  }
};

// WhatsApp integration for sending messages
export const sendWhatsAppMessage = async (
  phoneNumber: string,
  message: string
): Promise<boolean> => {
  try {
    // In production, integrate with WhatsApp Business API
    // For now, we'll create a WhatsApp link that opens in browser
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    
    console.log('WhatsApp URL generated:', whatsappUrl);
    
    // In a real app, you might open this URL or use WhatsApp Business API
    return true;
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error);
    return false;
  }
};

// Generate WhatsApp message for order confirmation
export const generateOrderWhatsAppMessage = (orderNumber: string, customerName: string): string => {
  return `Hello ${customerName}! 👋\n\nYour order ${orderNumber} has been received successfully.\n\nOur team will contact you shortly with payment instructions.\n\nThank you for choosing ZC Traders! 🙏`;
};

// Generate WhatsApp message for inquiry acknowledgment
export const generateInquiryWhatsAppMessage = (customerName: string): string => {
  return `Hello ${customerName}! 👋\n\nThank you for your inquiry. We have received your message and our team will get back to you within 24 hours.\n\nZC Traders - Your Global Sourcing Partner 🌍`;
};