import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  CheckCircle,
  Star,
  MessageSquareText,
  Compass,
  ClipboardCheck,
} from "lucide-react";
import LeadCaptureForm from "../../components/LeadCaptureForm";

export default function AcademicServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Academic Services
            </h1>
            <p className="text-xl text-blue-100">
              Personalized tutoring and coaching for students from Class 6 to 12
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence in Academic Coaching
            </h2>
            <p className="text-xl text-gray-600">
              Our academic services provide personalized attention to help students excel in
              their studies. With experienced tutors and proven teaching methods, we ensure
              every student reaches their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "All Subjects Covered",
                description: "Mathematics, Science, English, and Social Studies for classes 6-12",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Qualified teachers with years of experience in CBSE, ICSE, and State boards",
              },
              {
                icon: Star,
                title: "Proven Results",
                description: "Students show average 30% improvement in grades within 3 months",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#2E75B6]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Classes — Class-wise Breakdown */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-[#2E75B6]/10 text-[#2E75B6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Tuition Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tuition Classes by Grade
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured coaching tailored to each class level — from building
              strong foundations to mastering board exam subjects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                classes: "Classes 6 – 8",
                tagColor: "#2E75B6",
                tagBg: "bg-blue-50",
                borderColor: "border-blue-200",
                subjects: [
                  "Mathematics",
                  "Science",
                  "Social Science",
                  "English",
                  "Hindi",
                  "Computer Science",
                ],
                note: "All subjects covered",
              },
              {
                classes: "Classes 9 – 10",
                tagColor: "#6C63FF",
                tagBg: "bg-indigo-50",
                borderColor: "border-indigo-200",
                subjects: ["Mathematics", "Science", "Social Science"],
                note: "Core board-exam subjects",
              },
              {
                classes: "Classes 11 – 12",
                tagColor: "#28A745",
                tagBg: "bg-green-50",
                borderColor: "border-green-200",
                subjects: ["Mathematics", "Economics"],
                note: "Stream-focused specialization",
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`bg-white rounded-xl border ${tier.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                {/* Card Header */}
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: tier.tagColor }}
                >
                  <h3 className="text-xl font-bold text-white">
                    {tier.classes}
                  </h3>
                  <p className="text-sm text-white/80">{tier.note}</p>
                </div>

                {/* Subject List */}
                <ul className="px-6 py-5 space-y-3">
                  {tier.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className="w-5 h-5 mr-3 flex-shrink-0"
                        style={{ color: tier.tagColor }}
                      />
                      <span className="text-gray-700 font-medium">
                        {subject}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Boards Covered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Education Boards We Support
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["CBSE", "ICSE", "State Board (Jharkhand)", "Other Boards"].map(
                (board, index) => (
                  <span
                    key={index}
                    className="bg-[#2E75B6] text-white px-6 py-2 rounded-full font-medium text-sm"
                  >
                    {board}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Teaching Approach
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              We believe every student learns differently. Our personalized approach ensures
              each student gets the attention and methodology that works best for them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalized learning plans based on student's needs",
                "Interactive and engaging teaching methods",
                "Regular assessments and progress tracking",
                "Doubt clearing sessions and practice tests",
                "Exam preparation and revision strategies",
                "Parent-teacher communication and updates",
              ].map((method, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-[#28A745] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{method}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Support System */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-[#28A745]/10 text-[#28A745] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Beyond Academics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Support System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond regular tuition — with tools and guidance to help
              students grow in confidence, clarity, and career readiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquareText,
                title: "Doubt & Feedback Dropbox",
                description:
                  "Submit doubts anytime — our tutors respond with clear explanations. Share feedback to help us continuously improve your learning experience.",
                color: "#2E75B6",
                bg: "bg-blue-50",
              },
              {
                icon: Compass,
                title: "Career Guidance",
                description:
                  "Get one-on-one career counselling from experienced professionals who help you choose the right stream, college, and career path.",
                color: "#6C63FF",
                bg: "bg-indigo-50",
              },
              {
                icon: ClipboardCheck,
                title: "Weekly Tests",
                description:
                  "Regular weekly assessments pinpoint strengths and gaps, ensuring consistent progress and exam-level preparedness throughout the year.",
                color: "#28A745",
                bg: "bg-green-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Tutors",
                description: "Qualified teachers with proven track records and teaching certifications",
              },
              {
                title: "Flexible Scheduling",
                description: "Classes at times convenient for students - evenings and weekends available",
              },
              {
                title: "Study Materials",
                description: "Comprehensive notes, practice papers, and reference materials provided",
              },
              {
                title: "Regular Tests",
                description: "Weekly tests and monthly assessments to track progress",
              },
              {
                title: "Doubt Sessions",
                description: "Dedicated time for clearing doubts and revising difficult concepts",
              },
              {
                title: "Affordable Fees",
                description: "Quality education at reasonable prices with flexible payment options",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                result: "45% → 89%",
                subject: "Mathematics",
                class: "Class 10",
                quote: "The personalized attention helped me understand concepts I struggled with for years!",
              },
              {
                result: "68% → 92%",
                subject: "Science",
                class: "Class 12",
                quote: "Excellent teaching methods and regular practice tests boosted my confidence.",
              },
              {
                result: "52% → 85%",
                subject: "Overall",
                class: "Class 9",
                quote: "My grades improved significantly across all subjects in just 4 months!",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#28A745] to-[#20873a] text-white rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">{story.result}</div>
                <div className="text-lg mb-1">{story.subject}</div>
                <div className="text-sm mb-4 text-green-100">{story.class}</div>
                <p className="italic text-green-50">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boost Your Academic Performance
            </h2>
            <p className="text-xl text-gray-600">
              Join our academic coaching program and see the difference
            </p>
          </motion.div>
          
          <LeadCaptureForm
            title="Enroll for Academic Coaching"
            subtitle="Tell us about your requirements and we'll create a personalized learning plan"
            buttonText="Get Free Demo Class"
          />
        </div>
      </section>
    </div>
  );
}
