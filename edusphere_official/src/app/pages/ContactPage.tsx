import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

emailjs.init(EMAILJS_PUBLIC_KEY);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData
      );

      setIsSuccess(true);
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        subject: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (_error) {
      setErrorMessage(
        "Oops! Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              We're here to help! Reach out to us for any questions or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 7004049427",
                link: "tel:+917004049427",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "edusphereofficial.india@gmail.com",
                link: "mailto:edusphereofficial.india@gmail.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "604, Aryan Tower, Hazaribagh, Jharkhand",
                link: "#map",
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: "Mon-Sat: 10 AM - 8 PM",
                link: null,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#2E75B6]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-[#2E75B6] transition-colors text-sm"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="user_name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="user_email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="user_phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="user_phone"
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
                          placeholder="10-digit number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="Course Inquiry">Course Inquiry</option>
                          <option value="Academic Services">Academic Services</option>
                          <option value="Internship">Internship Information</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="General Question">General Question</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E74C3C] text-white py-3 px-6 rounded-lg hover:bg-[#c0392b] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Details Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-[#2E75B6] to-[#1e5a96] text-white rounded-lg p-8 sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Address
                    </h4>
                    <p className="text-blue-100 text-sm">
                      604, Aryan Tower<br />
                      New Area, Lohsigna Road<br />
                      Hazaribagh-825301<br />
                      Jharkhand, India
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Phone
                    </h4>
                    <a
                      href="tel:+917004049427"
                      className="text-blue-100 hover:text-white transition-colors text-sm"
                    >
                      +91 7004049427
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </h4>
                    <a
                      href="mailto:edusphereofficial.india@gmail.com"
                      className="text-blue-100 hover:text-white transition-colors text-sm break-all"
                    >
                      edusphereofficial.india@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Business Hours
                    </h4>
                    <p className="text-blue-100 text-sm">
                      Monday - Saturday<br />
                      10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-400">
                  <p className="text-sm text-blue-100">
                    <strong>UDYAM Registration:</strong><br />
                    UDYAM-JH-11-0053233
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Find us at our Hazaribagh location
            </p>
          </motion.div>

          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9481812564654!2d85.34447067568146!3d23.997606879240394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49ea39e10adb7%3A0x24089228fd820810!2sAryan%20Tower!5e0!3m2!1sen!2sin!4v1771427942414!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edusphere Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
