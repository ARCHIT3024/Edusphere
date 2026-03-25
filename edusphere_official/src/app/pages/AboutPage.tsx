import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AboutPage() {
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
              About Edusphere Official
            </h1>
            <p className="text-xl text-blue-100">
              Empowering learners to go beyond books into reality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-900">Edusphere Official</strong> is an MSME-registered 
                  EdTech company based in Hazaribagh, Jharkhand, dedicated to transforming education 
                  and empowering learners with practical skills that matter in the real world.
                </p>
                <p>
                  Founded with a vision to bridge the gap between theoretical knowledge and practical 
                  application, we offer comprehensive educational solutions ranging from professional 
                  certification courses to academic coaching services.
                </p>
                <p>
                  Our tagline, <em>"Beyond Books Into Reality,"</em> reflects our commitment to 
                  providing learning experiences that translate directly into career success and 
                  personal growth. We believe education should be accessible, industry-relevant, 
                  and transformative.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2E75B6] mt-6">
                  <p className="font-semibold text-gray-900">UDYAM Registration</p>
                  <p className="text-[#2E75B6] font-medium">UDYAM-JH-11-0053233</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Government-recognized MSME institution
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="/images/about-team-collaboration.png"
                alt="Edusphere team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#2E75B6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                To provide accessible, industry-relevant education that empowers individuals 
                to achieve their career goals and transform their lives through practical 
                knowledge and hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[#2E75B6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To become India's leading EdTech platform that bridges the gap between 
                education and employment, creating a skilled workforce ready for the 
                challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#2E75B6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li className="flex items-start">
                  <span className="text-[#28A745] mr-2">✓</span>
                  <span>Excellence in Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A745] mr-2">✓</span>
                  <span>Practical Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A745] mr-2">✓</span>
                  <span>Student-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A745] mr-2">✓</span>
                  <span>Integrity & Trust</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <ImageWithFallback
                    src="/images/about-founder-portrait.png"
                    alt="Mayank Khandelwal - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mayank Khandelwal
                  </h3>
                  <p className="text-[#2E75B6] font-medium mb-4">
                    Founder & Director
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Mayank Khandelwal is an accomplished entrepreneur and educator with a 
                      passion for transforming lives through education. His vision to make 
                      quality education accessible to all led to the founding of Edusphere.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Award className="w-4 h-4 text-[#2E75B6] mr-2 mt-0.5 flex-shrink-0" />
                          <span>Smart India Hackathon 2024 Participant</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-4 h-4 text-[#2E75B6] mr-2 mt-0.5 flex-shrink-0" />
                          <span>Aspire Leaders Program Participant</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-4 h-4 text-[#2E75B6] mr-2 mt-0.5 flex-shrink-0" />
                          <span>MSME-Registered Business Owner</span>
                        </li>
                      </ul>
                    </div>
                    <p className="italic text-gray-700">
                      "Education is not just about acquiring knowledge; it's about applying 
                      that knowledge to create real-world impact. At Edusphere, we're committed 
                      to helping every student realize their full potential."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving Edusphere's vision forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Shilpi Sharma",
                role: "Creative Director",
                quote:
                  "Creativity is the bridge between ideas and impact — at Edusphere, we design experiences that inspire lifelong learning.",
              },
              {
                name: "Rajveer Singh",
                role: "Marketing Director",
                quote:
                  "Great education deserves great reach — our mission is to connect every learner with the opportunities they deserve.",
              },
              {
                name: "Sakshima Bare",
                role: "Designing Head",
                quote:
                  "Design is the silent ambassador of our brand — every pixel tells our story of excellence in education.",
              },
              {
                name: "Ashish Yadav",
                role: "Media Head",
                quote:
                  "Powerful stories deserve powerful visuals — we bring Edusphere's impact to life through compelling media.",
              },
              {
                name: "Shristi Singh",
                role: "Sales Head",
                quote:
                  "Every conversation is an opportunity to transform a life — we connect the right learners with the right programs.",
              },
              {
                name: "Aryan Raj",
                role: "Strategic Head",
                quote:
                  "Strategy turns vision into action — we chart the course that keeps Edusphere ahead of the curve.",
              },
              {
                name: "Sayyed Mohammed Fahad",
                role: "Trainings and Development Head",
                quote:
                  "Training is the backbone of excellence — we ensure every program delivers real-world skills and lasting impact.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2E75B6] font-medium mb-4">
                  {member.role}
                </p>
                <p className="italic text-gray-600 text-sm">
                  "{member.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey & Achievements
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Company Founded",
                  description: "Edusphere Official was established",
                },
                {
                  year: "2025",
                  title: "Expanded Course Offerings",
                  description: "Launched 70+ professional certification courses across multiple domains",
                },
                {
                  year: "2025",
                  title: "Growing Strong",
                  description: "Serving 1000+ students with 95% success rate",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-[#2E75B6]">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-4 h-4 bg-[#2E75B6] rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}