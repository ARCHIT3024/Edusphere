import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Search, BookOpen, Clock, Award } from "lucide-react";

const coursesData = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    category: "Technology",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description: "Learn to protect systems and networks from digital attacks and threats",
    skills: ["Network Security", "Ethical Hacking", "Risk Management"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics with Python",
    category: "Technology",
    duration: "10 weeks",
    level: "Intermediate",
    description: "Master data analysis, visualization, and insights generation",
    skills: ["Python", "Pandas", "Data Visualization"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Business",
    duration: "6 weeks",
    level: "Beginner",
    description: "Become proficient in SEO, SEM, and social media marketing",
    skills: ["SEO", "Google Ads", "Social Media"],
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis",
    category: "Business",
    duration: "8 weeks",
    level: "Intermediate",
    description: "Learn financial modeling, valuation, and investment analysis",
    skills: ["Excel", "Financial Modeling", "Investment Analysis"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design Mastery",
    category: "Creative",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description: "Create stunning visuals with Adobe Creative Suite",
    skills: ["Photoshop", "Illustrator", "Design Theory"],
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Technology",
    duration: "12 weeks",
    level: "Beginner",
    description: "Build modern websites with HTML, CSS, and JavaScript",
    skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Basics",
    category: "Technology",
    duration: "10 weeks",
    level: "Advanced",
    description: "Introduction to AI and machine learning algorithms",
    skills: ["Python", "ML Algorithms", "Neural Networks"],
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    category: "Business",
    duration: "8 weeks",
    level: "Intermediate",
    description: "Use data to drive business decisions and strategy",
    skills: ["Excel", "SQL", "Business Intelligence"],
  },
  {
    id: "content-writing",
    title: "Content Writing & Copywriting",
    category: "Creative",
    duration: "6 weeks",
    level: "Beginner",
    description: "Master the art of persuasive and engaging content",
    skills: ["Copywriting", "SEO Writing", "Content Strategy"],
  },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Business", "Creative"];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              70+ industry-recognized certification courses to accelerate your career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 md:top-20 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#2E75B6] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">
                No courses found. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredCourses.length}</span> course
                  {filteredCourses.length !== 1 ? "s" : ""}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/courses/${course.id}`}
                      className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full"
                    >
                      <div className="h-48 bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-[#2E75B6] bg-blue-50 px-3 py-1 rounded-full">
                            {course.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Award className="w-4 h-4 mr-1" />
                          {course.level}
                        </div>
                        
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer 70+ courses across multiple domains. Contact us to learn more!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#2E75B6] text-white px-8 py-3 rounded-lg hover:bg-[#1e5a96] transition-colors font-medium"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
