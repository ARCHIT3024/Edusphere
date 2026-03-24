import { motion } from "motion/react";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100">Last updated: February 14, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              At Edusphere Official, we are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and
                address provided during registration
              </li>
              <li>
                <strong>Educational Information:</strong> Course preferences, academic background,
                and learning goals
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device
                information, and usage data
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, emails, and feedback you send to us
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide and manage our educational services</li>
              <li>Process your course registrations and payments</li>
              <li>Communicate with you about courses, updates, and support</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-700 mb-6">
              We do not sell or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Service providers who assist in delivering our services</li>
              <li>Partner companies for internship placements (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar technologies to enhance your experience on our website.
              You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are available to students of all ages. For users under 18, we require
              parental consent before collecting personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Updates to Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes via email or website notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>Email:</strong> edusphereofficial.india@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7004049427
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 604, Aryan Tower, New Area, Lohsigna Road,
                Hazaribagh-825301, Jharkhand, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
