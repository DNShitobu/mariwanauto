"use client";

import { useState } from "react";
// Utility to sanitize user input (defense-in-depth)
function sanitizeInput(input: string) {
  // Remove script tags and encode special characters
  return input.replace(/<.*?>/g, "").replace(/["'`;]/g, "");
}
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";

const WHATSAPP_NUMBER = "233241974527";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Sanitize all form fields before processing
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };
    // Here you would send sanitizedData to your backend or process it
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Optionally sanitize on change, or just on submit (here we sanitize on submit for better UX)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your auto parts and accessories. Can you help me?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about parts, services, or orders? We are here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-bounce-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">Thank you for contacting us. We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="order-status">Order Status</option>
                        <option value="bulk-order">Bulk Order</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Chat with Us on WhatsApp</h3>
                    <p className="text-green-100 mb-4">Get instant responses to your inquiries. Click below to start a conversation.</p>
                    <button
                      onClick={openWhatsApp}
                      className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Our Store</h3>
                      <p className="text-gray-600">123 Auto Drive, Industrial Area<br />City, Country</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+233 24 197 4527</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">info@mariwanauto.com<br />support@mariwanauto.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay connected with us on social media for the latest updates, promotions, and automotive tips.</p>
                <SocialIcons variant="dark" />
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Find Us on the Map
                  </h3>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6!2d-0.8619!3d9.41312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjQnNDcuNyJOIDDCsDUxJzQ4LjAiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mariwan Auto Parts Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <a
                    href="https://maps.app.goo.gl/EEoszCqJveFHKSti9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 justify-center"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="container-custom text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Instant Support</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Have a quick question? Connect with us on WhatsApp for immediate assistance. We typically respond within minutes during business hours.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-lg transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <MessageCircle className="w-7 h-7" />
            Chat on WhatsApp Now
          </button>
        </div>
      </section>
    </>
  );
}
