"use client";

import { useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // For now, just show success message (no backend integration)
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-emerald-50 border-2 border-emerald-200 p-12 rounded-2xl mb-8">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Thank you!
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  organization: "",
                  role: "",
                  message: "",
                });
              }}
              className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors"
            >
              Submit another request
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Demo
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  placeholder="+91 XXXX XXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.organization ? "border-red-500" : "border-gray-200"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  placeholder="Your organization name"
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.organization}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.role ? "border-red-500" : "border-gray-200"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all`}
                >
                  <option value="">Select your role</option>
                  <option value="wealth-manager">Wealth Manager</option>
                  <option value="mfd">MFD</option>
                  <option value="ria">RIA</option>
                  <option value="bank-representative">
                    Bank Representative
                  </option>
                  <option value="other">Other</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-2">{errors.role}</p>
                )}
              </div>

              {/* Message (Optional) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
