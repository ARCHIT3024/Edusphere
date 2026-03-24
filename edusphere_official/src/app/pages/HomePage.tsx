import { Link } from "react-router";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, BookOpen, Award, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Beyond Books Into Reality
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your career with industry-recognized certifications and real-world skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-[#E74C3C] text-white px-8 py-4 rounded-lg hover:bg-[#c0392b] transition-colors font-medium text-lg"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center bg-white text-[#2E75B6] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ImageWithFallback
                src="/images/hero-students-learning.jpg"
                alt="Students learning online"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { icon: BookOpen, value: "70+", label: "Courses" },
              { icon: Award, value: "100%", label: "Certified Courses" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-[#2E75B6] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational solutions for students and professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/services/professional"
                className="block bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow h-full"
              >
                <Briefcase className="w-12 h-12 text-[#2E75B6] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Professional Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Industry-recognized certification courses and corporate internships
                  to accelerate your career growth
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    70+ Professional Certification Courses
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    Corporate Internship Programs
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    Industry Expert-Led Training
                  </li>
                </ul>
                <span className="text-[#2E75B6] font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/services/academic"
                className="block bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow h-full"
              >
                <GraduationCap className="w-12 h-12 text-[#2E75B6] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Academic Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Personalized tutoring and coaching for students from Class 6 to 12
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    Subjects: Maths, Science, English, SST
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    CBSE, ICSE & State Board
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#28A745] mr-2">✓</span>
                    One-on-One & Group Classes
                  </li>
                </ul>
                <span className="text-[#2E75B6] font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-relevant courses designed to boost your career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity Fundamentals",
                category: "Technology",
                duration: "8 weeks",
                description: "Learn to protect systems and networks from digital attacks",
              },
              {
                title: "Data Analytics with Python",
                category: "Technology",
                duration: "10 weeks",
                description: "Master data analysis and visualization techniques",
              },
              {
                title: "Digital Marketing",
                category: "Business",
                duration: "6 weeks",
                description: "Become proficient in SEO, SEM, and social media marketing",
              },
              {
                title: "Financial Analysis",
                category: "Business",
                duration: "8 weeks",
                description: "Learn financial modeling and investment analysis",
              },
              {
                title: "Graphic Design Mastery",
                category: "Creative",
                duration: "12 weeks",
                description: "Create stunning visuals with industry-standard tools",
              },
              {
                title: "Web Development",
                category: "Technology",
                duration: "12 weeks",
                description: "Build modern websites with HTML, CSS, and JavaScript",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#2E75B6] bg-blue-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to="/courses"
                    className="text-[#2E75B6] font-medium inline-flex items-center hover:text-[#1e5a96]"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center bg-[#2E75B6] text-white px-8 py-3 rounded-lg hover:bg-[#1e5a96] transition-colors font-medium"
            >
              View All Courses <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Quotes */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Words from Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our vision and commitment to transforming education
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder Quote 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-[#2E75B6] opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                Education is not just about acquiring knowledge; it's about applying that knowledge to create real-world impact. At Edusphere, we're committed to helping every student realize their full potential.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#2E75B6] rounded-full flex items-center justify-center text-white font-bold">
                  MK
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mayank Khandelwal</p>
                  <p className="text-sm text-gray-600">Founder & Director</p>
                </div>
              </div>
            </motion.div>

            {/* Founder Quote 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-[#2E75B6] opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                Our mission is to bridge the gap between classroom learning and industry requirements. We believe every student deserves access to quality education that truly prepares them for their career.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#2E75B6] rounded-full flex items-center justify-center text-white font-bold">
                  SV
                </div>
                <div>
                  <p className="font-bold text-gray-900">Shiva Yadav</p>
                  <p className="text-sm text-gray-600">Managing Director</p>
                </div>
              </div>
            </motion.div>

            {/* Team Member Quote 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-[#2E75B6] opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                At Edusphere, we focus on practical skills that make a difference. Our courses are designed to equip students with industry-relevant knowledge and hands-on experience.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#28A745] rounded-full flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div>
                  <p className="font-bold text-gray-900">Academic Team</p>
                  <p className="text-sm text-gray-600">Course Development</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Edusphere?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "MSME Registered",
                description: "Government-recognized educational institution with UDYAM registration",
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry professionals with real-world experience",
              },
              {
                icon: GraduationCap,
                title: "Industry Certification",
                description: "Earn certificates recognized by leading companies",
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
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#2E75B6]" />
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who are already building successful careers with Edusphere
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-[#E74C3C] text-white px-8 py-4 rounded-lg hover:bg-[#c0392b] transition-colors font-medium text-lg"
            >
              Start Your Journey Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}