import { motion } from "motion/react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function RegisterPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Journey with Edusphere
            </h1>
            <p className="text-xl text-blue-100">
              Complete our simple 3-step registration process and unlock your potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in just a few minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Submit Your Details",
                description: "Fill in your name, email, and phone number in the form below",
              },
              {
                step: "2",
                title: "Receive Registration Form",
                description: "Check your email for a link to our detailed Google Form",
              },
              {
                step: "3",
                title: "Complete & Get Started",
                description: "Fill out the form and we'll contact you to begin your learning journey",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#2E75B6] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Register Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Register with Edusphere?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Access 70+ Professional Courses",
                description: "Choose from a wide range of industry-recognized certification courses",
              },
              {
                title: "Corporate Internship Opportunities",
                description: "Get real-world experience with our partner companies",
              },
              {
                title: "Expert Instructors",
                description: "Learn from professionals with years of industry experience",
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with online and offline options",
              },
              {
                title: "Industry Certification",
                description: "Earn certificates that are recognized by leading employers",
              },
              {
                title: "Career Support",
                description: "Get guidance on resume building, interview prep, and job placement",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <LeadCaptureForm
              title="Register Now"
              subtitle="Fill in your details and we'll send you the complete registration form"
              buttonText="Get Registration Form"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Students & Professionals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "100%",
                label: "Certified Courses",
              },
              {
                value: "70+",
                label: "Courses Available",
              },
              {
                value: "100%",
                label: "Trained and Trusted Professionals",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#2E75B6] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2E75B6] text-white rounded-lg p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Need Help with Registration?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-medium mb-1">Call Us</p>
                <a
                  href="tel:+917004049427"
                  className="hover:text-blue-200 transition-colors"
                >
                  +91 7004049427
                </a>
              </div>
              <div>
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <p className="font-medium mb-1">Email Us</p>
                <a
                  href="mailto:edusphereofficial.india@gmail.com"
                  className="hover:text-blue-200 transition-colors break-all"
                >
                  edusphereofficial.india@gmail.com
                </a>
              </div>
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <p className="font-medium mb-1">Visit Us</p>
                <p className="text-sm">
                  Hazaribagh, Jharkhand
                </p>
              </div>
            </div>
            <p className="text-center mt-8 text-blue-100">
              Business Hours: Monday-Saturday, 10:00 AM - 8:00 PM
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
