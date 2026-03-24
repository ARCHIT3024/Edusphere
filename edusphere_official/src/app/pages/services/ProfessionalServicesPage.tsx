import { motion } from "motion/react";
import {
  Briefcase,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  GraduationCap,
  Presentation,
  Handshake,
  Rocket,
  Building2,
} from "lucide-react";
import LeadCaptureForm from "../../components/LeadCaptureForm";

export default function ProfessionalServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Development Services
            </h1>
            <p className="text-xl text-blue-100">
              Industry-recognized certifications and corporate internships to accelerate your career
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
              Transform Your Career with Expert-Led Training
            </h2>
            <p className="text-xl text-gray-600">
              Our professional development programs are designed to give you the skills and
              certifications that employers are actively seeking. With hands-on projects, industry
              mentorship, and real-world applications, you'll be job-ready in weeks, not years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "70+ Certification Courses",
                description: "Choose from diverse domains including technology, business, and creative fields",
              },
              {
                icon: Briefcase,
                title: "Corporate Internships",
                description: "Gain real-world experience with our partner companies and build your professional network",
              },
              {
                icon: TrendingUp,
                title: "Career Growth Support",
                description: "Get resume building, interview prep, and job placement assistance",
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

      {/* Course Categories */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Course Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore certifications across multiple high-demand fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Technology & IT",
                courses: [
                  "Cybersecurity Fundamentals",
                  "Data Analytics with Python",
                  "Web Development",
                  "Cloud Computing (AWS/Azure)",
                  "Machine Learning & AI",
                  "Mobile App Development",
                  "DevOps & System Administration",
                  "Network Security & Ethical Hacking",
                ],
              },
              {
                category: "Business & Management",
                courses: [
                  "Digital Marketing",
                  "Financial Analysis",
                  "Business Analytics",
                  "Project Management (PMP/Agile)",
                  "Human Resource Management",
                  "Supply Chain Management",
                  "Entrepreneurship & Startups",
                  "Sales & Customer Relationship",
                ],
              },
              {
                category: "Creative & Design",
                courses: [
                  "Graphic Design Mastery",
                  "UI/UX Design",
                  "Video Editing & Production",
                  "Content Writing & Copywriting",
                  "Social Media Management",
                  "3D Modeling & Animation",
                  "Photography & Photoshop",
                  "Branding & Visual Identity",
                ],
              },
              {
                category: "Finance & Accounting",
                courses: [
                  "Financial Modeling",
                  "Investment Banking",
                  "Accounting Fundamentals",
                  "Taxation & GST",
                  "Personal Finance Planning",
                  "Stock Market Trading",
                  "Cryptocurrency & Blockchain",
                  "Excel for Finance",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.courses.map((course, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#28A745] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Internships */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Corporate Internship Programs
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Gain hands-on experience with leading companies while completing your certification.
                Our internship programs are designed to bridge the gap between learning and employment.
              </p>
              <ul className="space-y-4">
                {[
                  "Work on real-world projects",
                  "Get mentored by industry professionals",
                  "Build a portfolio of work",
                  "Receive internship completion certificate",
                  "Potential for full-time employment",
                  "Flexible duration (1-6 months)",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#28A745] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2E75B6] to-[#1e5a96] text-white rounded-lg p-8"
            >
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Internships Matter</h3>
              <div className="space-y-4 text-blue-100">
                <p>
                  <strong className="text-white">85%</strong> of employers prefer candidates with internship experience
                </p>
                <p>
                  <strong className="text-white">67%</strong> of interns receive full-time job offers
                </p>
                <p>
                  <strong className="text-white">100%</strong> of our interns gain practical skills applicable immediately
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* College Collaborations & Ecosystem */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-[#2E75B6]/10 text-[#2E75B6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              College Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              College Collaborations & Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with colleges to create a complete learning ecosystem — from
              expert-led courses and webinars to hands-on internships and placement support.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Presentation,
                stat: "50+",
                title: "Webinars",
                description:
                  "Industry expert-led sessions on trending tech, career readiness, and domain skills",
                color: "#2E75B6",
                bg: "bg-blue-50",
              },
              {
                icon: Users,
                title: "Seminars & Workshops",
                description:
                  "Interactive campus seminars covering real-world case studies and professional skills",
                color: "#6C63FF",
                bg: "bg-indigo-50",
              },
              {
                icon: Rocket,
                title: "Internship Programs",
                description:
                  "Structured internships with mentorship, project work, and completion certificates",
                color: "#28A745",
                bg: "bg-green-50",
              },
              {
                icon: Handshake,
                title: "Placement Support",
                description:
                  "End-to-end career assistance including resume reviews, mock interviews, and job referrals",
                color: "#E8590C",
                bg: "bg-orange-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>
                {item.stat && (
                  <p
                    className="text-3xl font-extrabold mb-1"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </p>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-[#2E75B6] to-[#1e5a96] p-8 flex flex-col justify-center text-white">
                <Building2 className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">
                  Built for Colleges
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our ecosystem is designed to seamlessly integrate with college
                  curriculam, bridging the gap between academic learning and
                  industry expectations.
                </p>
              </div>
              <div className="lg:col-span-3 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Co-branded certification courses tailored to college syllabi",
                    "Guest lectures and webinar series by industry leaders",
                    "Campus ambassador and student chapter programs",
                    "Dedicated placement drives and career fairs",
                    "Internship pipelines with partner companies",
                    "Faculty development and train-the-trainer workshops",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-[#2E75B6] mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Edusphere for Professional Development?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Recognized Certifications",
                description: "Earn certificates that are valued by top employers across industries",
              },
              {
                title: "Expert Instructors",
                description: "Learn from professionals with years of real-world industry experience",
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with online and offline options",
              },
              {
                title: "Hands-On Projects",
                description: "Build a portfolio with practical projects that showcase your skills",
              },
              {
                title: "Career Support",
                description: "Get help with resume building, interview prep, and job placements",
              },
              {
                title: "Affordable Pricing",
                description: "Quality education at competitive prices with flexible payment options",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-600">
              Start your professional development journey today
            </p>
          </motion.div>
          
          <LeadCaptureForm
            title="Get Started with Professional Development"
            subtitle="Fill in your details and we'll help you choose the right course"
            buttonText="Get Course Information"
          />
        </div>
      </section>
    </div>
  );
}
