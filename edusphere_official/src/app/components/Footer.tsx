import { Link } from "react-router";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Edusphere Official Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-white text-lg font-bold">EDUSPHERE</h3>
                <p className="text-xs">Beyond Books Into Reality</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              MSME-Registered EdTech company providing professional certification
              courses, corporate internships, and academic coaching.
            </p>
            <p className="text-xs text-gray-400">
              UDYAM: UDYAM-JH-11-0053233
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#2E75B6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2E75B6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/advisory-committee" className="hover:text-[#2E75B6] transition-colors">
                  Advisory Committee
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#2E75B6] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#2E75B6] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/professional"
                  className="hover:text-[#2E75B6] transition-colors"
                >
                  Professional Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/academic"
                  className="hover:text-[#2E75B6] transition-colors"
                >
                  Academic Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#2E75B6] transition-colors">
                  Certification Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/services/professional"
                  className="hover:text-[#2E75B6] transition-colors"
                >
                  Corporate Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  604, Aryan Tower, New Area, Lohsigna Road, Hazaribagh-825301, Jharkhand, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+917004049427"
                  className="hover:text-[#2E75B6] transition-colors"
                >
                  +91 7004049427
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:edusphereofficial.india@gmail.com"
                  className="hover:text-[#2E75B6] transition-colors break-all"
                >
                  edusphereofficial.india@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/edusphere_official_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E75B6] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@EdusphereOfficial_India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E75B6] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/edusphere-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E75B6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © 2025 Edusphere Official. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="hover:text-[#2E75B6] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#2E75B6] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="hover:text-[#2E75B6] transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}