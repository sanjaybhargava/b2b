"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type ReportType = "review" | "restructuring";

export default function RequestsPage() {
  const [activeTab, setActiveTab] = useState<ReportType>("review");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Portfolio Review form state
  const [reviewFile, setReviewFile] = useState<File | null>(null);
  const [reviewFileType, setReviewFileType] = useState("CAS");
  const [reviewPassword, setReviewPassword] = useState("");

  // Portfolio Restructuring form state
  const [restructuringFile, setRestructuringFile] = useState<File | null>(null);
  const [restructuringFileType, setRestructuringFileType] = useState("CAS");
  const [restructuringPassword, setRestructuringPassword] = useState("");
  const [prompts, setPrompts] = useState([
    "Review current asset allocation and suggest optimal equity-debt-gold mix based on risk profile",
    "Identify underperforming funds and recommend suitable replacements with better track records",
    "Analyze portfolio concentration risk and suggest diversification across sectors and market caps",
    "Evaluate tax efficiency and recommend tax-loss harvesting or fund switching opportunities",
    "Assess rebalancing needs and provide specific action items with rationale"
  ]);
  const [freeformInstructions, setFreeformInstructions] = useState("");

  const handleReviewSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!reviewFile || !reviewPassword) {
      alert("Please upload a file and enter password");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleRestructuringSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!restructuringFile || !restructuringPassword) {
      alert("Please upload a file and enter password");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: ReportType) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if PDF
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only");
        e.target.value = "";
        return;
      }
      if (type === "review") {
        setReviewFile(file);
      } else {
        setRestructuringFile(file);
      }
    }
  };

  const handlePromptChange = (index: number, value: string) => {
    const newPrompts = [...prompts];
    newPrompts[index] = value;
    setPrompts(newPrompts);
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 p-12 rounded-2xl text-center shadow-xl">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your intelligence request has been received. We'll process it and notify you when the report is ready.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Intelligence Requests</h1>
          <p className="text-xl text-gray-600">Submit portfolio files for AI-powered analysis and insights</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("review")}
                className={`pb-4 px-2 font-semibold text-lg transition-colors relative ${
                  activeTab === "review"
                    ? "text-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Portfolio Review
                {activeTab === "review" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("restructuring")}
                className={`pb-4 px-2 font-semibold text-lg transition-colors relative ${
                  activeTab === "restructuring"
                    ? "text-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Portfolio Restructuring
                {activeTab === "restructuring" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Review Form */}
        {activeTab === "review" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Portfolio for Review</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              {/* File Type Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  File Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={reviewFileType}
                  onChange={(e) => setReviewFileType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="CAS">CAS (Preferred)</option>
                  <option value="NSDL">NSDL</option>
                  <option value="CDSL">CDSL</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload File (PDF only) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "review")}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-600 file:font-semibold hover:file:bg-emerald-100 file:cursor-pointer"
                    required
                  />
                </div>
                {reviewFile && (
                  <p className="text-sm text-gray-600 mt-2">Selected: {reviewFile.name}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  File Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={reviewPassword}
                  onChange={(e) => setReviewPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Enter file password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit for Review"}
              </button>
            </form>
          </div>
        )}

        {/* Portfolio Restructuring Form */}
        {activeTab === "restructuring" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Portfolio for Restructuring</h2>
            <form onSubmit={handleRestructuringSubmit} className="space-y-6">
              {/* File Type Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  File Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={restructuringFileType}
                  onChange={(e) => setRestructuringFileType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="CAS">CAS (Preferred)</option>
                  <option value="NSDL">NSDL</option>
                  <option value="CDSL">CDSL</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload File (PDF only) <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, "restructuring")}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-600 file:font-semibold hover:file:bg-emerald-100 file:cursor-pointer"
                  required
                />
                {restructuringFile && (
                  <p className="text-sm text-gray-600 mt-2">Selected: {restructuringFile.name}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  File Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={restructuringPassword}
                  onChange={(e) => setRestructuringPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Enter file password"
                  required
                />
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Restructuring Instructions</h3>
                <p className="text-gray-600 mb-6">
                  Customize the prompts below to guide the AI analysis. Edit any prompt to match your specific requirements.
                </p>
              </div>

              {/* 5 Editable Prompts */}
              {prompts.map((prompt, index) => (
                <div key={index}>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Instruction {index + 1}
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => handlePromptChange(index, e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              ))}

              {/* Freeform Instructions */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Instructions (Optional)
                </label>
                <textarea
                  value={freeformInstructions}
                  onChange={(e) => setFreeformInstructions(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Add any additional instructions or specific requirements for the portfolio restructuring analysis..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit for Restructuring"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
