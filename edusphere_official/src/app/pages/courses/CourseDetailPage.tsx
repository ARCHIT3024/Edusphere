import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Clock, Award, Users, CheckCircle, ArrowLeft } from "lucide-react";
import LeadCaptureForm from "../../components/LeadCaptureForm";

interface CurriculumModule {
  module: string;
  topics: string[];
}

interface CourseDetail {
  title: string;
  category: string;
  duration: string;
  level: string;
  students: string;
  description: string;
  whatYouLearn: string[];
  curriculum: CurriculumModule[];
  prerequisites: string[];
  certification: string;
}

const courseDetails: Record<string, CourseDetail> = {
  cybersecurity: {
    title: "Cybersecurity Fundamentals",
    category: "Technology",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    students: "500+",
    description:
      "Master the fundamentals of cybersecurity and learn to protect systems, networks, and data from digital attacks. This comprehensive course covers everything from basic security concepts to advanced threat detection and prevention techniques.",
    whatYouLearn: [
      "Understanding cybersecurity principles and best practices",
      "Network security and firewall configuration",
      "Identifying and mitigating security threats",
      "Ethical hacking and penetration testing basics",
      "Cryptography and data protection",
      "Security policies and compliance standards",
      "Incident response and disaster recovery",
      "Risk assessment and management",
    ],
    curriculum: [
      {
        module: "Introduction to Cybersecurity",
        topics: [
          "What is Cybersecurity?",
          "Types of cyber threats",
          "CIA Triad (Confidentiality, Integrity, Availability)",
        ],
      },
      {
        module: "Network Security",
        topics: [
          "Network fundamentals",
          "Firewalls and VPNs",
          "Intrusion Detection Systems",
        ],
      },
      {
        module: "Ethical Hacking",
        topics: [
          "Introduction to ethical hacking",
          "Reconnaissance and scanning",
          "Vulnerability assessment",
        ],
      },
      {
        module: "Risk Management",
        topics: [
          "Risk assessment methodologies",
          "Security policies and procedures",
          "Compliance and regulations",
        ],
      },
    ],
    prerequisites: [
      "Basic computer knowledge",
      "Familiarity with operating systems",
      "Interest in security and technology",
    ],
    certification: "Industry-recognized Cybersecurity Certificate upon completion",
  },
  "data-analytics": {
    title: "Data Analytics with Python",
    category: "Technology",
    duration: "10 weeks",
    level: "Intermediate",
    students: "750+",
    description:
      "Learn to analyze, visualize, and derive insights from data using Python. This hands-on course covers data manipulation, statistical analysis, and machine learning basics.",
    whatYouLearn: [
      "Python programming for data analysis",
      "Data cleaning and preprocessing",
      "Exploratory data analysis (EDA)",
      "Statistical analysis and hypothesis testing",
      "Data visualization with Matplotlib and Seaborn",
      "Working with Pandas and NumPy",
      "Introduction to machine learning",
      "Real-world data projects",
    ],
    curriculum: [
      {
        module: "Python Basics",
        topics: ["Python syntax", "Data structures", "Functions and modules"],
      },
      {
        module: "Data Manipulation",
        topics: ["Pandas DataFrames", "Data cleaning", "Handling missing data"],
      },
      {
        module: "Data Visualization",
        topics: ["Matplotlib basics", "Seaborn for statistical plots", "Interactive dashboards"],
      },
      {
        module: "Statistical Analysis",
        topics: ["Descriptive statistics", "Inferential statistics", "Hypothesis testing"],
      },
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of mathematics",
      "Interest in data and analytics",
    ],
    certification: "Professional Data Analytics Certificate",
  },
  "financial-analysis": {
    title: "Financial Analysis",
    category: "Business",
    duration: "8 weeks",
    level: "Intermediate",
    students: "400+",
    description:
      "Master financial modeling, valuation techniques, and investment analysis. Learn to make data-driven financial decisions and analyze company performance.",
    whatYouLearn: [
      "Financial statement analysis",
      "Financial modeling in Excel",
      "Valuation techniques (DCF, Comparable)",
      "Investment analysis and portfolio management",
      "Financial ratios and metrics",
      "Budgeting and forecasting",
      "Risk assessment",
      "Case studies and real-world applications",
    ],
    curriculum: [
      {
        module: "Financial Statements",
        topics: ["Income Statement", "Balance Sheet", "Cash Flow Statement"],
      },
      {
        module: "Financial Modeling",
        topics: ["Excel for finance", "Building financial models", "Scenario analysis"],
      },
      {
        module: "Valuation",
        topics: ["DCF valuation", "Comparable company analysis", "Precedent transactions"],
      },
      {
        module: "Investment Analysis",
        topics: ["Portfolio theory", "Risk and return", "Investment strategies"],
      },
    ],
    prerequisites: [
      "Basic accounting knowledge",
      "Excel proficiency",
      "Understanding of business concepts",
    ],
    certification: "Financial Analysis Professional Certificate",
  },
};

export default function CourseDetailPage() {
  const { courseSlug } = useParams();
  const course = courseDetails[courseSlug || ""];

  if (!course) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link
            to="/courses"
            className="text-[#2E75B6] hover:text-[#1e5a96] font-medium inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              {course.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{course.students} Students</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#28A745] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Curriculum */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Module {index + 1}: {module.module}
                    </h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-[#2E75B6] mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Prerequisites */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prerequisites</h2>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#2E75B6] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{prereq}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Certification */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-[#2E75B6] p-6 rounded-r-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-700">{course.certification}</p>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadCaptureForm
                title="Enroll in This Course"
                subtitle="Get started with your learning journey today"
                buttonText="Request Course Details"
              />
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this course? Our team is here to help!
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-white text-[#2E75B6] border border-[#2E75B6] px-6 py-2 rounded-lg hover:bg-[#2E75B6] hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
