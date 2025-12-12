"use client";

import { useState } from "react";
import Link from "next/link";

// Placeholder data
const customerData = [
  { pan: "AHWPB0829R", portfolioReview: 12, portfolioRestructuring: 8, monitoring: 5 },
  { pan: "BCDXF1234P", portfolioReview: 7, portfolioRestructuring: 3, monitoring: 12 },
  { pan: "CDEFG5678Q", portfolioReview: 15, portfolioRestructuring: 10, monitoring: 8 },
  { pan: "DEFGH9012S", portfolioReview: 4, portfolioRestructuring: 6, monitoring: 3 },
  { pan: "EFGHI3456T", portfolioReview: 9, portfolioRestructuring: 5, monitoring: 7 },
  { pan: "FGHIJ7890U", portfolioReview: 11, portfolioRestructuring: 9, monitoring: 6 },
  { pan: "GHIJK2345V", portfolioReview: 6, portfolioRestructuring: 4, monitoring: 9 },
  { pan: "HIJKL6789W", portfolioReview: 13, portfolioRestructuring: 11, monitoring: 4 },
  { pan: "IJKLM0123X", portfolioReview: 8, portfolioRestructuring: 7, monitoring: 10 },
  { pan: "JKLMN4567Y", portfolioReview: 10, portfolioRestructuring: 8, monitoring: 5 },
  { pan: "KLMNO8901Z", portfolioReview: 5, portfolioRestructuring: 3, monitoring: 11 },
  { pan: "LMNOP2345A", portfolioReview: 14, portfolioRestructuring: 10, monitoring: 6 },
  { pan: "MNOPQ6789B", portfolioReview: 7, portfolioRestructuring: 5, monitoring: 8 },
  { pan: "NOPQR0123C", portfolioReview: 12, portfolioRestructuring: 9, monitoring: 7 },
  { pan: "OPQRS4567D", portfolioReview: 9, portfolioRestructuring: 6, monitoring: 9 },
  { pan: "PQRST8901E", portfolioReview: 11, portfolioRestructuring: 8, monitoring: 5 },
  { pan: "QRSTU2345F", portfolioReview: 6, portfolioRestructuring: 4, monitoring: 10 },
  { pan: "RSTUV6789G", portfolioReview: 13, portfolioRestructuring: 11, monitoring: 6 },
  { pan: "STUVW0123H", portfolioReview: 8, portfolioRestructuring: 7, monitoring: 8 },
  { pan: "TUVWX4567I", portfolioReview: 10, portfolioRestructuring: 9, monitoring: 4 },
  { pan: "UVWXY8901J", portfolioReview: 5, portfolioRestructuring: 3, monitoring: 12 },
  { pan: "VWXYZ2345K", portfolioReview: 14, portfolioRestructuring: 10, monitoring: 7 },
  { pan: "WXYZA6789L", portfolioReview: 7, portfolioRestructuring: 5, monitoring: 9 },
  { pan: "XYZAB0123M", portfolioReview: 12, portfolioRestructuring: 9, monitoring: 6 },
  { pan: "YZABC4567N", portfolioReview: 9, portfolioRestructuring: 6, monitoring: 8 },
];

const ITEMS_PER_PAGE = 10;

export default function MISPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate totals
  const totals = customerData.reduce(
    (acc, customer) => ({
      portfolioReview: acc.portfolioReview + customer.portfolioReview,
      portfolioRestructuring: acc.portfolioRestructuring + customer.portfolioRestructuring,
      monitoring: acc.monitoring + customer.monitoring,
    }),
    { portfolioReview: 0, portfolioRestructuring: 0, monitoring: 0 }
  );

  // Pagination logic
  const totalPages = Math.ceil(customerData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = customerData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
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
            MIS Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            View analytics and management reports
          </p>
        </div>

        {/* Summary Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Portfolio Review Requests */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-emerald-600">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Portfolio Review</h3>
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-900">{totals.portfolioReview}</p>
              <p className="text-sm text-gray-500 mt-1">Total Requests</p>
            </div>

            {/* Portfolio Restructuring Requests */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Portfolio Restructuring</h3>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-900">{totals.portfolioRestructuring}</p>
              <p className="text-sm text-gray-500 mt-1">Total Requests</p>
            </div>

            {/* Monitoring Requests */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Monitoring</h3>
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-900">{totals.monitoring}</p>
              <p className="text-sm text-gray-500 mt-1">Total Requests</p>
            </div>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Details</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50 border-b-2 border-emerald-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Customer PAN
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Portfolio Review
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Portfolio Restructuring
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Monitoring
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentData.map((customer, index) => (
                    <tr key={customer.pan} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-base font-semibold text-gray-900">{customer.pan}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          {customer.portfolioReview}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-bold">
                          {customer.portfolioRestructuring}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 font-bold">
                          {customer.monitoring}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
                  <span className="font-semibold">{Math.min(endIndex, customerData.length)}</span> of{" "}
                  <span className="font-semibold">{customerData.length}</span> customers
                </div>

                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-300"
                    }`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="hidden md:flex items-center gap-2">
                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => typeof page === "number" && handlePageChange(page)}
                        disabled={page === "..."}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          page === currentPage
                            ? "bg-emerald-600 text-white"
                            : page === "..."
                            ? "bg-transparent text-gray-400 cursor-default"
                            : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Page Indicator */}
                  <div className="md:hidden px-4 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700">
                    {currentPage} / {totalPages}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-300"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
