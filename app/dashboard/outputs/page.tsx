"use client";

import { useState } from "react";
import Link from "next/link";

// Placeholder data
const outputData = [
  {
    id: 1,
    type: "PR",
    dateRequested: "2024-12-10",
    timeRequested: "10:30 AM",
    dateReady: "2024-12-10",
    timeReady: "02:45 PM",
    downloaded: false,
  },
  {
    id: 2,
    type: "PRS1",
    dateRequested: "2024-12-09",
    timeRequested: "09:15 AM",
    dateReady: "2024-12-09",
    timeReady: "01:20 PM",
    downloaded: true,
  },
  {
    id: 3,
    type: "PR",
    dateRequested: "2024-12-08",
    timeRequested: "11:00 AM",
    dateReady: "2024-12-08",
    timeReady: "03:30 PM",
    downloaded: true,
  },
  {
    id: 4,
    type: "PRS2",
    dateRequested: "2024-12-07",
    timeRequested: "02:45 PM",
    dateReady: "2024-12-07",
    timeReady: "05:15 PM",
    downloaded: false,
  },
  {
    id: 5,
    type: "PRS3",
    dateRequested: "2024-12-06",
    timeRequested: "08:30 AM",
    dateReady: "2024-12-06",
    timeReady: "12:00 PM",
    downloaded: true,
  },
  {
    id: 6,
    type: "PR",
    dateRequested: "2024-12-05",
    timeRequested: "01:15 PM",
    dateReady: "2024-12-05",
    timeReady: "04:45 PM",
    downloaded: false,
  },
  {
    id: 7,
    type: "PRS1",
    dateRequested: "2024-12-04",
    timeRequested: "10:00 AM",
    dateReady: "2024-12-04",
    timeReady: "02:30 PM",
    downloaded: true,
  },
  {
    id: 8,
    type: "PR",
    dateRequested: "2024-12-03",
    timeRequested: "09:45 AM",
    dateReady: "2024-12-03",
    timeReady: "01:15 PM",
    downloaded: false,
  },
  {
    id: 9,
    type: "PRS2",
    dateRequested: "2024-12-02",
    timeRequested: "11:30 AM",
    dateReady: "2024-12-02",
    timeReady: "03:00 PM",
    downloaded: true,
  },
  {
    id: 10,
    type: "PRS1",
    dateRequested: "2024-12-01",
    timeRequested: "08:00 AM",
    dateReady: "2024-12-01",
    timeReady: "11:45 AM",
    downloaded: false,
  },
  {
    id: 11,
    type: "PR",
    dateRequested: "2024-11-30",
    timeRequested: "03:15 PM",
    dateReady: "2024-11-30",
    timeReady: "06:30 PM",
    downloaded: true,
  },
  {
    id: 12,
    type: "PRS3",
    dateRequested: "2024-11-29",
    timeRequested: "10:45 AM",
    dateReady: "2024-11-29",
    timeReady: "02:00 PM",
    downloaded: false,
  },
  {
    id: 13,
    type: "PR",
    dateRequested: "2024-11-28",
    timeRequested: "09:00 AM",
    dateReady: "2024-11-28",
    timeReady: "12:30 PM",
    downloaded: true,
  },
  {
    id: 14,
    type: "PRS1",
    dateRequested: "2024-11-27",
    timeRequested: "01:45 PM",
    dateReady: "2024-11-27",
    timeReady: "05:00 PM",
    downloaded: false,
  },
  {
    id: 15,
    type: "PRS2",
    dateRequested: "2024-11-26",
    timeRequested: "11:15 AM",
    dateReady: "2024-11-26",
    timeReady: "03:45 PM",
    downloaded: true,
  },
  {
    id: 16,
    type: "PR",
    dateRequested: "2024-11-25",
    timeRequested: "08:30 AM",
    dateReady: "2024-11-25",
    timeReady: "12:00 PM",
    downloaded: false,
  },
  {
    id: 17,
    type: "PRS3",
    dateRequested: "2024-11-24",
    timeRequested: "02:00 PM",
    dateReady: "2024-11-24",
    timeReady: "05:30 PM",
    downloaded: true,
  },
  {
    id: 18,
    type: "PR",
    dateRequested: "2024-11-23",
    timeRequested: "10:30 AM",
    dateReady: "2024-11-23",
    timeReady: "02:15 PM",
    downloaded: false,
  },
];

const ITEMS_PER_PAGE = 10;

const getTypeLabel = (type: string) => {
  switch (type) {
    case "PR":
      return "Portfolio Review";
    case "PRS1":
      return "Portfolio Restructuring 1";
    case "PRS2":
      return "Portfolio Restructuring 2";
    case "PRS3":
      return "Portfolio Restructuring 3";
    default:
      return type;
  }
};

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "PR":
      return "bg-emerald-100 text-emerald-800";
    case "PRS1":
      return "bg-blue-100 text-blue-800";
    case "PRS2":
      return "bg-purple-100 text-purple-800";
    case "PRS3":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OutputsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(outputData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = outputData.slice(startIndex, endIndex);

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

  const handleDownload = (id: number) => {
    // Placeholder function for download
    alert(`Downloading report #${id}...`);
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
            Outputs
          </h1>
          <p className="text-xl text-gray-600">
            Access and download your generated reports
          </p>
        </div>

        {/* Info Banner */}
        <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium text-blue-800">
              All reports are retained for 90 days from the date they are ready.
            </p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50 border-b-2 border-emerald-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Date Requested
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Time Requested
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Date Ready
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Time Ready
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Downloaded
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentData.map((output) => (
                  <tr key={output.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(output.type)}`}>
                        {output.type}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{getTypeLabel(output.type)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {output.dateRequested}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {output.timeRequested}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {output.dateReady}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {output.timeReady}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {output.downloaded ? (
                        <span className="inline-flex items-center text-emerald-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-gray-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => handleDownload(output.id)}
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </button>
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
                <span className="font-semibold">{Math.min(endIndex, outputData.length)}</span> of{" "}
                <span className="font-semibold">{outputData.length}</span> reports
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
  );
}
