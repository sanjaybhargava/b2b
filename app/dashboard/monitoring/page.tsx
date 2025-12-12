"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

// Placeholder data for monitored customers
const monitoredCustomers = [
  {
    pan: "AHWPB0829R",
    lastCasUpload: "2024-11-15",
    renewOn: "2025-02-15",
    status: "active",
  },
  {
    pan: "BCDXF1234P",
    lastCasUpload: "2024-11-20",
    renewOn: "2025-02-20",
    status: "active",
  },
  {
    pan: "CDEFG5678Q",
    lastCasUpload: "2024-10-30",
    renewOn: "2025-01-30",
    status: "expiring_soon",
  },
  {
    pan: "DEFGH9012S",
    lastCasUpload: "2024-11-25",
    renewOn: "2025-02-25",
    status: "active",
  },
  {
    pan: "EFGHI3456T",
    lastCasUpload: "2024-11-10",
    renewOn: "2025-02-10",
    status: "active",
  },
  {
    pan: "FGHIJ7890U",
    lastCasUpload: "2024-10-15",
    renewOn: "2025-01-15",
    status: "expiring_soon",
  },
  {
    pan: "GHIJK2345V",
    lastCasUpload: "2024-11-28",
    renewOn: "2025-02-28",
    status: "active",
  },
  {
    pan: "HIJKL6789W",
    lastCasUpload: "2024-11-05",
    renewOn: "2025-02-05",
    status: "active",
  },
];

export default function MonitoringPage() {
  const [showForm, setShowForm] = useState(false);
  const [customerPan, setCustomerPan] = useState("");
  const [casOption, setCasOption] = useState<"last" | "upload">("last");
  const [casFile, setCasFile] = useState<File | null>(null);
  const [renewDate, setRenewDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if PDF
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only");
        e.target.value = "";
        return;
      }
      setCasFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!customerPan || !renewDate) {
      alert("Please provide Customer PAN and Renewal Date");
      return;
    }

    if (casOption === "upload" && !casFile) {
      alert("Please upload a CAS file");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form
    setCustomerPan("");
    setCasOption("last");
    setCasFile(null);
    setRenewDate("");
    setShowForm(false);
    setIsSubmitting(false);

    alert("Customer added to monitoring successfully!");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">Active</span>;
      case "expiring_soon":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">Expiring Soon</span>;
      default:
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">Unknown</span>;
    }
  };

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Monitoring
          </h1>
          <p className="text-xl text-gray-600">
            24x7 Alerts when action may be required
          </p>
        </div>

        {/* Add Customer Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {showForm ? "Cancel" : "Add Customer for Monitoring"}
          </button>
        </div>

        {/* Add Customer Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Customer to Monitoring</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer PAN */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Customer PAN <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerPan}
                  onChange={(e) => setCustomerPan(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-mono"
                  placeholder="AHWPB0829R"
                  maxLength={10}
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="Please enter a valid PAN (e.g., AHWPB0829R)"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Format: 5 letters, 4 numbers, 1 letter (e.g., AHWPB0829R)</p>
              </div>

              {/* CAS Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  CAS Source <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="casOption"
                      value="last"
                      checked={casOption === "last"}
                      onChange={() => setCasOption("last")}
                      className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 focus:ring-2"
                    />
                    <span className="ml-3 text-gray-900 font-medium">Use Last CAS on File</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="casOption"
                      value="upload"
                      checked={casOption === "upload"}
                      onChange={() => setCasOption("upload")}
                      className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 focus:ring-2"
                    />
                    <span className="ml-3 text-gray-900 font-medium">Upload New CAS</span>
                  </label>
                </div>
              </div>

              {/* Upload CAS (conditional) */}
              {casOption === "upload" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Upload CAS File (PDF only) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-600 file:font-semibold hover:file:bg-emerald-100 file:cursor-pointer"
                    required={casOption === "upload"}
                  />
                  {casFile && (
                    <p className="text-sm text-gray-600 mt-2">Selected: {casFile.name}</p>
                  )}
                </div>
              )}

              {/* Renew On Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Renew On Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={renewDate}
                  onChange={(e) => setRenewDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Date when monitoring should be renewed or reviewed</p>
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
                {isSubmitting ? "Adding Customer..." : "Add to Monitoring"}
              </button>
            </form>
          </div>
        )}

        {/* Monitored Customers List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-emerald-50 border-b-2 border-emerald-200">
            <h2 className="text-xl font-bold text-gray-900">Monitored Customers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Customer PAN
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Last CAS Upload
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Renew On
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monitoredCustomers.map((customer) => (
                  <tr key={customer.pan} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-mono text-base font-semibold text-gray-900">{customer.pan}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.lastCasUpload}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.renewOn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {getStatusBadge(customer.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mr-2"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Renew
                      </button>
                      <button
                        className="inline-flex items-center px-3 py-1.5 bg-gray-600 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
