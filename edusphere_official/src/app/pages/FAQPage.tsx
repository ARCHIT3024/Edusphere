import { useState } from "react";
import { motion } from "motion/react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import LeadCaptureForm from "../components/LeadCaptureForm";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Edusphere Official?",
        answer:
          "Edusphere Official is an MSME-registered EdTech company based in Hazaribagh, Jharkhand. We provide professional certification courses, corporate internships, and academic coaching services for students from Class 6 to 12.",
      },
      {
        question: "Is Edusphere officially registered?",
        answer:
          "Yes, Edusphere is officially registered with UDYAM Registration Number: UDYAM-JH-11-0053233. We are a government-recognized MSME institution.",
      },
      {
        question: "Where is Edusphere located?",
        answer:
          "Our office is located at 604, Aryan Tower, New Area, Lohsigna Road, Hazaribagh-825301, Jharkhand, India. We also offer online services across India.",
      },
    ],
  },
  {
    category: "Courses & Certifications",
    questions: [
      {
        question: "How many courses do you offer?",
        answer:
          "We offer 70+ professional certification courses across multiple domains including Technology, Business, Creative fields, and Finance.",
      },
      {
        question: "Are the certifications industry-recognized?",
        answer:
          "Yes, our certifications are recognized by leading employers and align with industry standards. Many of our courses prepare you for professional certifications from recognized bodies.",
      },
      {
        question: "What is the duration of courses?",
        answer:
          "Course duration varies from 6 to 12 weeks depending on the program. Each course is designed to provide comprehensive knowledge while respecting your time commitments.",
      },
      {
        question: "Can I learn at my own pace?",
        answer:
          "Yes, we offer flexible learning options. You can choose from self-paced online courses, live online classes, or in-person training based on your preference.",
      },
      {
        question: "Do you provide course materials?",
        answer:
          "Yes, all students receive comprehensive study materials, practice exercises, and access to online resources. Materials are included in the course fee.",
      },
    ],
  },
  {
    category: "Registration & Payment",
    questions: [
      {
        question: "How do I register for a course?",
        answer:
          "Registration is simple: Fill out the quick form on our website, receive a detailed Google Form via email, complete it with your preferences, and our team will contact you with next steps.",
      },
      {
        question: "What are the course fees?",
        answer:
          "Course fees vary depending on the program. Contact us for detailed pricing information. We offer competitive rates and flexible payment options.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options including installments for most courses. Contact us to discuss a payment plan that works for you.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we have a fair refund policy. Please refer to our Refund Policy page for detailed information on eligibility and process.",
      },
    ],
  },
  {
    category: "Academic Services",
    questions: [
      {
        question: "What classes do you provide tutoring for?",
        answer:
          "We provide academic coaching for students from Class 6 to Class 12 across all major subjects including Mathematics, Science, English, and Social Studies.",
      },
      {
        question: "Which boards do you support?",
        answer:
          "We support CBSE, ICSE, State Board (Jharkhand), and other education boards. Our tutors are experienced with multiple curriculum types.",
      },
      {
        question: "Do you offer one-on-one tutoring?",
        answer:
          "Yes, we offer both one-on-one personalized tutoring and small group classes (maximum 5 students). Choose the option that works best for your learning style.",
      },
      {
        question: "Are classes available online?",
        answer:
          "Yes, we offer both online and offline classes. Online classes are conducted via video conferencing with interactive learning tools.",
      },
    ],
  },
  {
    category: "Corporate Internships",
    questions: [
      {
        question: "What are corporate internships?",
        answer:
          "Our corporate internship programs provide hands-on experience with real companies. You work on actual projects, gain practical skills, and receive an internship completion certificate.",
      },
      {
        question: "How long are internships?",
        answer:
          "Internship duration ranges from 1 to 6 months depending on the program and company requirements. We offer flexible options to suit your availability.",
      },
      {
        question: "Do internships lead to full-time jobs?",
        answer:
          "Many of our internship participants receive full-time job offers. While we can't guarantee placement, we provide maximum support and many of our partner companies prefer hiring from our intern pool.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "What if I face technical issues during online classes?",
        answer:
          "We provide technical support for all students. Contact us via phone, email, or WhatsApp and our support team will assist you promptly.",
      },
      {
        question: "What are the system requirements for online classes?",
        answer:
          "You'll need a computer or smartphone with internet connection (minimum 2 Mbps), a web browser, and for some courses, specific software which we'll inform you about.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setExpandedIndex(expandedIndex === key ? null : key);
  };

  const filteredFAQs = faqData.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about Edusphere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No questions found matching your search. Try different keywords or{" "}
                <a href="#contact-form" className="text-[#2E75B6] hover:text-[#1e5a96]">
                  ask us directly
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((faq, qIndex) => {
                      const key = `${category.category}-${qIndex}`;
                      const isExpanded = expandedIndex === key;

                      return (
                        <div
                          key={qIndex}
                          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(category.category, qIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#2E75B6] flex-shrink-0 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section id="contact-form" className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Can't find what you're looking for? Send us your question and we'll get back to you
            </p>
          </motion.div>
          
          <LeadCaptureForm
            title="Ask Us Anything"
            subtitle="Fill in your details and we'll reach out to answer your questions"
            buttonText="Submit Your Question"
          />
        </div>
      </section>
    </div>
  );
}