import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

emailjs.init(EMAILJS_PUBLIC_KEY);

export default function LeadCaptureForm({
  title = "Get Started Today",
  subtitle = "Fill in your details and we'll send you the registration form",
  buttonText = "Send Me the Registration Form",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData
      );

      setIsSuccess(true);
      setFormData({ user_name: "", user_email: "", user_phone: "" });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (_error) {
      setErrorMessage(
        "Oops! Something went wrong. Please try again or contact us directly at edusphereofficial.india@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            Thank You!
          </h4>
          <p className="text-green-700">
            Check your email for the registration form. We'll be in touch soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="user_phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E75B6] focus:border-transparent outline-none transition"
              placeholder="10-digit mobile number"
            />
            <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
          </div>

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E74C3C] text-white py-3 px-6 rounded-lg hover:bg-[#c0392b] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <span>{buttonText}</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
