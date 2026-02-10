import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/profile';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container px-4 md:px-6 mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-slate-50 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-slate-50 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-slate-50 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
              >
                <div className="inline-flex p-4 bg-green-100 text-green-600 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 bg-white border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
