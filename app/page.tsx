"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
                Top-tier wealth managers will use AI.
              </span>{" "}
              <span className="text-gray-900">
                The rest will fall behind.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Our AI powered intelligence is fast, accurate and can be customised using advisor's secret sauce
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

        {/* SECTION 2: VISUAL COMPARISON */}
        <section className="py-20 md:py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              See the difference
            </h2>

            {/* Comparison Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/comparison.png"
                alt="Comparison of wealth management workflow without AI versus with AI-powered tools"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

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
                  Your secret sauce, amplified by AI. Maintain your unique
                  advisory approach while eliminating repetitive tasks.
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
                  Explain every recommendation with confidence. Built-in
                  rationale for every insight and suggestion.
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
                  Monitor portfolios 24x7, act only when it matters. Intelligent
                  alerts that respect your time.
                </p>
              </div>
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
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-emerald-50 fade-in opacity-0 translate-y-8 transition-all duration-1000">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to see the difference?
            </h2>
            <p className="text-xl text-gray-600">
              Join the advisors who are staying ahead with AI
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
