import { motion } from "motion/react";
import { Mail, Linkedin, User } from "lucide-react";

interface AdvisoryMember {
  name: string;
  designation: string;
  department: string;
  institution: string;
  image: string;
  imagePosition?: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: "Dr. Varsha Gautam",
    designation: "Professor",
    department: "Department of Mathematics and Statistics",
    institution: "Galgotias University",
    image: "/images/dr-varsha-gautam.png",
    imagePosition: "center top",
  },
  {
    name: "Dr. Prabhakar Singh",
    designation: "Head of Department (HOD)",
    department: "Department of Physics",
    institution: "Galgotias University",
    image: "/images/dr-prabhakar-singh.jpg",
    imagePosition: "center top",
  },
  {
    name: "Dr. Jaya Tuteja",
    designation: "Associate Professor",
    department: "Department of Chemistry",
    institution: "Galgotias University",
    image: "/images/dr-jaya-tuteja.webp",
    imagePosition: "center top",
  },
  {
    name: "Dr. Raja Rawat",
    designation: "Assistant Professor",
    department: "Department of Data Science",
    institution: "Chandigarh University",
    image: "/images/dr-raja-rawat.jpg",
    imagePosition: "center 70%",
  },
  {
    name: "Dr. Meenu Khatkar",
    designation: "Associate Professor",
    department: "",
    institution: "Manav Rachna International Institute of Research and Studies",
    image: "/images/dr-meenu-khatkar.png",
    imagePosition: "center 8%",
  },
];

function MemberCard({
  member,
  index,
}: {
  member: AdvisoryMember;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden
        md:transition-[transform,box-shadow] md:duration-300 md:ease-out
        md:hover:-translate-y-1.5 md:hover:shadow-[0_20px_40px_rgba(46,117,182,0.15),0_8px_16px_rgba(0,0,0,0.1)]
        md:focus-within:-translate-y-1.5 md:focus-within:shadow-[0_20px_40px_rgba(46,117,182,0.15),0_8px_16px_rgba(0,0,0,0.1)]"
      tabIndex={0}
      role="article"
      aria-label={`Advisory committee member: ${member.name}`}
    >
      <div className="w-full h-72 bg-gray-100 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: member.imagePosition || "center top" }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-[#2E75B6] font-medium mb-2">{member.designation}</p>
        {member.department && (
          <p className="text-gray-600 text-sm mb-1">{member.department}</p>
        )}
        <p className="text-gray-500 text-sm">{member.institution}</p>

        {/* Mobile: always-visible contact info (no hover needed) */}
        <div className="mt-4 border-t border-gray-100 pt-4 space-y-2 md:hidden">
          {/* TODO: Add member email */}
          <a
            href="mailto:placeholder@example.com"
            className="flex items-center space-x-2 text-sm text-gray-600"
          >
            <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>Email Address</span>
          </a>
          {/* TODO: Add LinkedIn URL */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-600"
          >
            <Linkedin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Desktop: hover-revealed contact overlay */}
      <div
        className="hidden md:block absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4
          translate-y-full opacity-0
          transition-all duration-300 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
          group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <div className="space-y-2">
          {/* TODO: Add member email */}
          <a
            href="mailto:placeholder@example.com"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#2E75B6] transition-colors"
            tabIndex={-1}
          >
            <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>Email Address</span>
          </a>
          {/* TODO: Add LinkedIn URL */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#2E75B6] transition-colors"
            tabIndex={-1}
          >
            <Linkedin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function AdvisoryCommitteePage() {
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
              Advisory Committee
            </h1>
            <p className="text-xl text-blue-100">
              Distinguished academicians guiding our mission to deliver
              excellence in education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Members Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Advisory Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advisory committee comprises leading professors and
              researchers from prestigious institutions across India, ensuring
              our programs maintain the highest academic standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
