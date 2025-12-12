"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface FAQ {
  question: string;
  answer: string | JSX.Element;
}

interface FAQSection {
  title: string;
  icon: string;
  faqs: FAQ[];
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections: FAQSection[] = [
    {
      title: "Data Security & Privacy",
      icon: "🔐",
      faqs: [
        {
          question: "Is my clients' data safe with Bharosa?",
          answer: "Yes. Client data security is our highest priority. All files are processed in a secure, encrypted environment. Access is restricted, logged, and monitored."
        },
        {
          question: "Do you sign a legal agreement?",
          answer: "Absolutely. We sign a formal legal agreement with every partner before any data exchange. This clearly defines confidentiality, data handling, and deletion protocols."
        },
        {
          question: "Do you store any client data?",
          answer: "By default, no. We delete the uploaded data immediately after generating your report. We only retain data if you specifically request iterations or edits on the same report. Once your revisions are complete, the data is permanently deleted."
        },
        {
          question: "How long do you keep my data if I request iterations?",
          answer: "Only for the duration of the iteration process (4 business days). Once you confirm the final report, we delete everything within 24 hours."
        }
      ]
    },
    {
      title: "Product & Features",
      icon: "📊",
      faqs: [
        {
          question: "What exactly does Bharosa do?",
          answer: (
            <div className="space-y-4">
              <p>Bharosa delivers insight-led financial intelligence for wealth managers, MFDs, and RIAs.</p>
              <p>We analyse portfolios and generate:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Asset allocation insights</li>
                <li>Risk & concentration alerts</li>
                <li>Tax-efficient switch ideas</li>
                <li>Peer benchmarking</li>
                <li>Opportunity identification</li>
                <li>Client-ready narratives</li>
              </ul>
              <p>You get actionable intelligence without spending hours on analysis.</p>
            </div>
          )
        },
        {
          question: "How do the alerts work?",
          answer: (
            <div className="space-y-4">
              <p>Bharosa scans the portfolio for risk patterns using a rules-based + intelligence-driven framework.</p>
              <p>Alerts include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Over-concentration in AMCs, schemes, sectors</li>
                <li>Under-diversification</li>
                <li>High overlap</li>
                <li>Duration-risk or credit-risk signals</li>
                <li>Tax-inefficient positions</li>
                <li>Underperforming funds vs peer benchmarks</li>
                <li>SIP performance issues</li>
              </ul>
              <p>Each alert is paired with clear reasoning and suggested next steps.</p>
            </div>
          )
        },
        {
          question: "What formats can I upload?",
          answer: (
            <div>
              <p className="mb-2">We support:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>CAS</li>
                <li>CAMS/KFin statements</li>
                <li>Excel statements</li>
                <li>ISIN-based inputs (fund list + amounts)</li>
              </ul>
            </div>
          )
        },
        {
          question: "What does the output/report look like?",
          answer: (
            <div>
              <p className="mb-2">You receive:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Advisor version (deep diagnostic)</li>
                <li>Client version (clean narrative)</li>
                <li>Visual charts & insights</li>
                <li>Allocation summary</li>
                <li>Risk analysis</li>
                <li>Opportunity sections</li>
                <li>Switch ideas (if applicable)</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: "Time & Workflow",
      icon: "⏱",
      faqs: [
        {
          question: "How does Bharosa save me time?",
          answer: (
            <div className="space-y-4">
              <p>Bharosa eliminates:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Manual portfolio checking</li>
                <li>Report creation</li>
                <li>Time spent finding risks or mistakes</li>
                <li>Benchmarking</li>
                <li>Tax optimisation analysis</li>
              </ul>
              <p>What normally takes 1–3 hours, Bharosa does in seconds, so you can focus on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Meeting clients</li>
                <li>Prospecting new leads</li>
                <li>Growing wallet share</li>
                <li>Improving advisory quality</li>
              </ul>
            </div>
          )
        },
        {
          question: "Do I need to install software or integrate anything?",
          answer: "No. Bharosa is zero-integration and zero-software. You simply upload the statement → get intelligence → download the report."
        }
      ]
    },
    {
      title: "Usage & Onboarding",
      icon: "💼",
      faqs: [
        {
          question: "Is there a learning curve?",
          answer: "None. If you can upload a file, you can use Bharosa."
        },
        {
          question: "Who is Bharosa built for?",
          answer: (
            <div>
              <ul className="list-disc pl-6 space-y-1">
                <li>MFDs</li>
                <li>RIAs/Investment Advisers</li>
                <li>Wealth Managers</li>
                <li>Banks & AMCs (Enterprise)</li>
              </ul>
              <p className="mt-2">Basically, anyone giving investment guidance.</p>
            </div>
          )
        },
        {
          question: "Can Bharosa help me with prospecting?",
          answer: (
            <div>
              <p className="mb-2">Yes. Advisors use Bharosa to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Impress new clients with instant insights</li>
                <li>Show risks in current portfolios</li>
                <li>Highlight how you can add value from Day 1</li>
                <li>Build trust through data-backed conversations</li>
              </ul>
            </div>
          )
        },
        {
          question: "Does Bharosa give investment advice?",
          answer: "No. We only provide analysis, intelligence, and insights. The investment decision always remains with the advisor."
        }
      ]
    },
    {
      title: "Pricing",
      icon: "💰",
      faqs: [
        {
          question: "How is Bharosa priced?",
          answer: "Simple: Pay per report. No subscription, no lock-ins."
        },
        {
          question: "Is there a free trial?",
          answer: "Yes. We offer a free Portfolio Review Report so you can experience the platform before paying."
        }
      ]
    },
    {
      title: "Compliance",
      icon: "⚖️",
      faqs: [
        {
          question: "Is Bharosa compliant with regulations?",
          answer: "Yes. Our intelligence follows a no-product-push design and supports SEBI-aligned advisory workflows."
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Back to Home */}
        <div className="pt-32 pb-8 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Everything you need to know about Bharosa
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 md:py-16 px-6 bg-emerald-50">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">{section.icon}</span>
                  {section.title}
                </h2>

                {/* Accordion Items */}
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIdx) => {
                    const accordionId = `${sectionIdx}-${faqIdx}`;
                    const isOpen = openIndex === accordionId;

                    return (
                      <div
                        key={faqIdx}
                        className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md"
                      >
                        {/* Question Button */}
                        <button
                          onClick={() => toggleAccordion(accordionId)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                          aria-expanded={isOpen}
                          aria-controls={`answer-${accordionId}`}
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
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

                        {/* Answer */}
                        <div
                          id={`answer-${accordionId}`}
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-[2000px]" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our team and we'll help you out
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
