import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-blue-100">Last updated: February 14, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Please read these Terms and Conditions carefully before using Edusphere Official's
              services. By registering for or using our services, you agree to be bound by these
              terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using Edusphere's website and services, you agree to comply with and
              be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws
              and regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Offered</h2>
            <p className="text-gray-700 mb-4">Edusphere Official provides:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Professional certification courses (70+ courses)</li>
              <li>Corporate internship programs</li>
              <li>Academic coaching services (Classes 6-12)</li>
              <li>Educational workshops and seminars</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Registration</h2>
            <p className="text-gray-700 mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 13 years old (parental consent required for minors)</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Course Enrollment & Fees
            </h2>
            <p className="text-gray-700 mb-4">Course enrollment terms:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Course fees must be paid as per the agreed payment schedule</li>
              <li>Fees are non-transferable between courses</li>
              <li>Access to course materials is provided upon payment confirmation</li>
              <li>All fees are in Indian Rupees (INR) unless otherwise specified</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Refund Policy</h2>
            <p className="text-gray-700 mb-6">
              Refund requests are subject to our Refund Policy. Please refer to the separate Refund
              Policy page for detailed information on eligibility, process, and timelines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. User Conduct</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Share course materials without authorization</li>
              <li>Use services for any illegal or unauthorized purpose</li>
              <li>Disrupt or interfere with the services or servers</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users or instructors</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              All course content, materials, and intellectual property rights belong to Edusphere
              Official or its licensors. You may not reproduce, distribute, or create derivative
              works without our written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Certifications</h2>
            <p className="text-gray-700 mb-4">Certification requirements:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Complete all course modules and assessments</li>
              <li>Achieve minimum passing scores on examinations</li>
              <li>Submit all required assignments on time</li>
              <li>Comply with the academic integrity policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              Edusphere Official shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use or inability to use our services. We do not
              guarantee specific outcomes or job placements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to terminate or suspend your account and access to services at
              our sole discretion, without prior notice, for conduct that violates these Terms or is
              harmful to other users or our business.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We may modify these Terms at any time. Continued use of our services after changes
              constitutes acceptance of the modified Terms. We will notify users of significant
              changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of the courts in Hazaribagh, Jharkhand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-gray-700">For questions about these Terms, contact us:</p>
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
