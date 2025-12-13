"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Accordion data
const accordionData = [
  {
    id: "acquire",
    title: "ACQUIRE",
    rows: [
      {
        useCase: "Convert a skeptical prospect",
        oldWay: '"Trust me, these are good funds"',
        bharosa: "Upload their CAS, expose underperforming funds, show the 10-year cost of inaction—let the data do the convincing",
        customInstructions: '"Analyze this CAS. Flag all funds underperforming benchmark for 3+ years. Show me the 10-year projection gap vs. an optimized portfolio."',
      },
      {
        useCase: "Prove your edge vs. their current advisor",
        oldWay: "Generic pitch, no proof points",
        bharosa: "Head-to-head comparison showing exact performance gaps, overlap issues, and expense ratio drag",
        customInstructions: '"Compare fund selections by advisor. Show CAGR, expense ratios, and underperformers for each. Highlight overlap across holdings."',
      },
      {
        useCase: "Build instant credibility",
        oldWay: "Hours preparing a proposal",
        bharosa: "Full portfolio diagnosis in minutes—asset allocation, sector bets, fund quality, commission leakage",
        customInstructions: '"Run full diagnostic: asset allocation, sector bets vs. Nifty 500, issuer concentration, and estimated commission leakage."',
      },
    ],
  },
  {
    id: "grow",
    title: "GROW",
    rows: [
      {
        useCase: "Win wallet share from competing advisors",
        oldWay: "Hope your slice performs better",
        bharosa: "Analyze their entire CAS—including competitor portions—and prove your edge with hard numbers",
        customInstructions: '"Split this CAS by advisor. Rank each portion by 3-year CAGR, expense ratio, and number of underperforming funds."',
      },
      {
        useCase: "Turn clients into referral machines",
        oldWay: '"Please recommend me to friends"',
        bharosa: 'Give them bragging rights—"My advisor uses AI"—and shareable reports that make them look smart',
        customInstructions: '"Generate a client-friendly portfolio summary with key wins, projected growth, and visual comparisons. Make it shareable."',
      },
    ],
  },
  {
    id: "retain",
    title: "RETAIN",
    rows: [
      {
        useCase: "Catch problems before clients do",
        oldWay: "Annual reviews (if you remember)",
        bharosa: "Real-time alerts when any fund underperforms for 6+ months—call them before they call you angry",
        customInstructions: "Use Monitoring tool",
      },
      {
        useCase: "Save a client who's walking out",
        oldWay: "Defensive excuses, damage control",
        bharosa: "Own the mistake, show the system you've built to prevent it, remind them of past value delivered",
        customInstructions: '"Pull this client\'s history. Show: panic sells prevented, risky investments avoided, tax-efficient moves made. Quantify value delivered."',
      },
      {
        useCase: "Propose a fix, not just an apology",
        oldWay: '"Let\'s wait and watch"',
        bharosa: "Tax-smart exit recommendations with alternative fund suggestions ready to present",
        customInstructions: '"For flagged underperformers, suggest 3 alternatives each. Recommend tax-efficient exit—prioritize LTCG units only."',
      },
    ],
  },
];

function SeeTheDifferenceSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            See the Difference
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-emerald-600">
            Stop guessing. Start knowing.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your competitors are still using spreadsheets and gut feelings. You could be using Bharosa Intelligence that turns data into decisions—and prospects into clients.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            One platform. Infinite use cases.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {accordionData.map((accordion) => (
            <div
              key={accordion.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(accordion.id)}
                className="w-full flex items-center justify-between px-6 py-5 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-200"
              >
                <span className="text-xl font-bold text-emerald-700 tracking-wide">
                  {accordion.title}
                </span>
                <svg
                  className={`w-6 h-6 text-emerald-600 transition-transform duration-300 ${
                    openAccordion === accordion.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordion === accordion.id
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/5">
                          Use Case
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/5">
                          Old Way
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/4">
                          Bharosa Intelligence
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/3">
                          Custom Instructions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {accordion.rows.map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="px-4 py-4 text-sm text-gray-900 font-medium align-top">
                            {row.useCase}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 align-top">
                            {row.oldWay}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700 align-top">
                            {row.bharosa}
                          </td>
                          <td className="px-4 py-4 text-sm text-emerald-700 font-mono italic align-top">
                            {row.customInstructions}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            Ready to see the difference for yourself?
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* SECTION 1: HERO BANNER */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 bg-emerald-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-emerald-600">
                Top-tier wealth managers need an edge.
              </span>{" "}
              <span className="text-gray-900">
                We built one.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              The calculations are ours. The convenience is AI. The secret sauce is yours.
              <br />
              Designed to let you focus on advice, not admin.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: SEE THE DIFFERENCE - ACCORDIONS */}
        <SeeTheDifferenceSection />

        {/* SECTION 3: VALUE PROPOSITION */}
        <section className="py-20 md:py-32 px-6 bg-emerald-50 fade-in opacity-0 translate-y-8 transition-all duration-1000">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
              Why Top Advisors Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Benefit 1 */}
              <div className="text-center space-y-4 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Amplified Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You set the strategy. Our engine handles the grind.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center space-y-4 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Clear Explanations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients ask 'why?' You'll have the answer—every time.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center space-y-4 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Smart Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  24x7 Vigilance. You define the alerts you want.
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: BUILT BY EXPERTS */}
        <section className="py-20 md:py-32 px-6 bg-white fade-in opacity-0 translate-y-8 transition-all duration-1000">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Built by Experts, for Experts
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our team supports advisors with insights that adapt in real time
              to client needs, market shifts, and regulatory changes. We operate with precision, as every recommendation reflects up-to-date portfolio and market data, ensuring accuracy you can trust.
              With over ₹2,400 Cr in assets already under active monitoring, advisors can start to deliver customer value from day one.
            </p>

            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-emerald-50 fade-in opacity-0 translate-y-8 transition-all duration-1000">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to see the difference?
            </h2>
            <p className="text-xl text-gray-600">
              Join the advisors who are staying ahead with Bharosa Intelligence
            </p>
            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
