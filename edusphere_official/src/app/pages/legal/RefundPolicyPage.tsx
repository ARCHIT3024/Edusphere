import { motion } from "motion/react";
import { DollarSign } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-blue-100">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              At Edusphere Official, we strive to provide the best learning experience. This Refund
              Policy outlines the conditions under which refunds may be requested and processed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Professional Courses - Refund Eligibility
            </h2>
            <p className="text-gray-700 mb-4">
              For professional certification courses, refunds are available under the following
              conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Within 7 days of enrollment:</strong> 100% refund if you haven't accessed
                more than 20% of the course content
              </li>
              <li>
                <strong>Within 14 days of enrollment:</strong> 50% refund if you haven't completed
                more than 30% of the course
              </li>
              <li>
                <strong>After 14 days:</strong> No refunds available, except in extraordinary
                circumstances
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Academic Services - Refund Eligibility
            </h2>
            <p className="text-gray-700 mb-4">For academic coaching services:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Before the first class:</strong> 100% refund of paid fees
              </li>
              <li>
                <strong>After 1-2 classes:</strong> Refund of remaining session fees (pro-rated)
              </li>
              <li>
                <strong>After 3 or more classes:</strong> No refunds available
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">The following are non-refundable:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Registration or administrative fees</li>
              <li>Examination or certification fees</li>
              <li>Downloaded course materials</li>
              <li>Completed courses or modules</li>
              <li>Services rendered during internship programs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Refund Process</h2>
            <p className="text-gray-700 mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Submit a written refund request to edusphereofficial.india@gmail.com with your
                enrollment details and reason
              </li>
              <li>Our team will review your request within 5-7 business days</li>
              <li>If approved, refunds will be processed within 15-20 business days</li>
              <li>Refunds will be credited to the original payment method</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Special Circumstances
            </h2>
            <p className="text-gray-700 mb-4">
              Refunds outside the standard policy may be considered in exceptional cases such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Serious medical emergencies (requires documentation)</li>
              <li>Technical issues preventing course access (must be reported within 48 hours)</li>
              <li>Course cancellation by Edusphere</li>
              <li>Duplicate payments</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Course Cancellation by Edusphere
            </h2>
            <p className="text-gray-700 mb-6">
              If Edusphere cancels a course for any reason, students will receive a 100% refund or
              the option to transfer to another course of equal value.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Payment Plan Refunds</h2>
            <p className="text-gray-700 mb-6">
              If you're on a payment plan and request a refund, any unpaid installments will be
              waived, and eligible refunds will be calculated on the amount already paid.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Transfer Policy</h2>
            <p className="text-gray-700 mb-6">
              Instead of a refund, you may request to transfer your enrollment to a different course
              within 30 days of enrollment. Transfer fees may apply depending on the price
              difference.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              If you're unsatisfied with a refund decision, you may escalate the matter to our
              management team for review. Final decisions rest with Edusphere Official management.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Changes to Refund Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify this Refund Policy at any time. Students enrolled
              before policy changes will be subject to the policy in effect at the time of
              enrollment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">For refund requests or questions, contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>Email:</strong> edusphereofficial.india@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7004049427
              </p>
              <p className="text-gray-700">
                <strong>Subject Line:</strong> "Refund Request - [Your Name] - [Course Name]"
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#2E75B6] p-6 mt-8">
              <p className="text-gray-700">
                <strong>Note:</strong> All refund requests are evaluated on a case-by-case basis.
                Providing complete and accurate information will help expedite the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
