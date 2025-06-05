
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle, Clock, Globe, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.contactName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Company Name, Contact Name, and Email).",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in discussing a bulk order for cosmetics manufacturing.");
    window.open(`https://wa.me/923163385642?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@shahmeerenterprises.com?subject=Manufacturing Inquiry', '_blank');
  };

  const handleFacebookClick = () => {
    // Placeholder for Facebook link - will be updated when user provides the link
    window.open('https://facebook.com/shahmeerenterprises', '_blank');
  };

  const handleInstagramClick = () => {
    // Placeholder for Instagram link - will be updated when user provides the link
    window.open('https://instagram.com/shahmeerenterprises', '_blank');
  };

  return <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8 hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-5 h-5 text-warm-gold" />
              <span className="text-sm font-medium text-deep-brown">Get In Touch</span>
            </div>
            
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-deep-brown mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-deep-brown/80 max-w-2xl mx-auto">
              Ready to bring your cosmetics vision to life? Let's discuss your manufacturing needs and create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="font-cormorant text-3xl font-bold text-deep-brown mb-2">
                  Send Us a Message
                </h2>
                <p className="text-deep-brown/70 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Company Name *
                      </label>
                      <input 
                        type="text" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleInputChange} 
                        required 
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                        placeholder="Your Company" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Contact Name *
                      </label>
                      <input 
                        type="text" 
                        name="contactName" 
                        value={formData.contactName} 
                        onChange={handleInputChange} 
                        required 
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                        placeholder="Your Name" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                        placeholder="your@email.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                        placeholder="+1 (555) 123-4567" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">
                      Message
                    </label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={5} 
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                      placeholder="Tell us about your project requirements..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold py-4 rounded-xl hover:shadow-xl hover:scale-105 hover:from-warm-gold/90 hover:to-soft-pink/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-soft-peach/30 to-soft-pink/20 rounded-3xl p-8 border border-gray-100">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6">
                    Quick Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <button onClick={handleWhatsAppClick} className="w-full flex items-center gap-4 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp Business</div>
                        <div className="text-sm opacity-90">Chat with us instantly</div>
                      </div>
                    </button>

                    <button onClick={handleEmailClick} className="w-full flex items-center gap-4 p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-left">
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm opacity-90">info@shahmeerenterprises.com</div>
                      </div>
                    </button>

                    <div className="flex items-center gap-4 p-4 bg-warm-gold/20 rounded-xl hover:bg-warm-gold/30 transition-all duration-300 cursor-pointer hover:scale-105 group">
                      <Phone className="w-6 h-6 text-warm-gold group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold text-deep-brown">Phone</div>
                        <div className="text-sm text-deep-brown/70">+92 3163385642</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6">
                    Office Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group cursor-pointer hover:bg-soft-peach/20 p-3 rounded-lg transition-all duration-300">
                      <MapPin className="w-6 h-6 text-warm-gold mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold text-deep-brown group-hover:text-warm-gold transition-colors duration-300">Manufacturing Facility</div>
                        <div className="text-deep-brown/70">
                          A-183, Block 8, KEACHS<br />
                          Karachi, Pakistan
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:bg-soft-peach/20 p-3 rounded-lg transition-all duration-300">
                      <Facebook className="w-6 h-6 text-warm-gold mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold text-deep-brown group-hover:text-warm-gold transition-colors duration-300">Facebook</div>
                        <button onClick={handleFacebookClick} className="text-deep-brown/70 hover:text-warm-gold transition-colors duration-300">
                          Follow us on Facebook
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:bg-soft-peach/20 p-3 rounded-lg transition-all duration-300">
                      <Instagram className="w-6 h-6 text-warm-gold mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold text-deep-brown group-hover:text-warm-gold transition-colors duration-300">Instagram</div>
                        <button onClick={handleInstagramClick} className="text-deep-brown/70 hover:text-warm-gold transition-colors duration-300">
                          Follow us on Instagram
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-warm-gold to-soft-pink rounded-3xl p-8 text-white">
                  <h3 className="font-cormorant text-2xl font-bold mb-4">
                    We're Here to Help
                  </h3>
                  <p className="mb-4">
                    Our team of experts is ready to assist you with your cosmetics manufacturing needs.
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span className="text-sm">Average response time: 2-4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-warm-gold to-soft-pink rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-cormorant font-bold text-2xl">Shahmeer Enterprises</span>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Your trusted partner for premium cosmetics manufacturing. 
                Creating beautiful products with ethical practices and exceptional quality.
              </p>
              <p className="text-white/60 text-sm">info@shahmeerenterprises.com</p>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-white/70 hover:text-white transition-colors duration-300">Home</a>
                <a href="/about" className="block text-white/70 hover:text-white transition-colors duration-300">About Us</a>
                <a href="/products" className="block text-white/70 hover:text-white transition-colors duration-300">Our Products</a>
                <a href="/contact" className="block text-white/70 hover:text-white transition-colors duration-300">Contact Us</a>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/70">
                <p>info@shahmeerenterprises.com</p>
                <p>A-183, Block 8, KEACHS</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2012 Shahmeer Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Contact;
