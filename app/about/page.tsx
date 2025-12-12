import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Back to Home */}
        <div className="pt-32 pb-8 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
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
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Bharosa for Advisors
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Empowering Banks, Mutual Fund Distributors, and RIAs to deliver high quality advice with minimal effort
            </p>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-16 md:py-24 px-6 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Advisors have made a massive contribution to investors in India by getting them to invest in the best asset class: <strong>Mutual Funds</strong>. Mutual Fund AUM as of November 30, 2025 touched <strong>₹81.32 lakh crores</strong>. This is great, but the unique investors as of October 2025 is <strong>5.79 crores</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every Indian can have a mutual fund account, yet the penetration of a great product like mutual funds is <strong>less than 5%</strong>. It is not only the poor who are excluded but several middle class and affluent investors prefer fixed deposits, gold and real estate to equities. In the period 2000-2020, the opportunity loss for investors was <strong>over ₹5 lakh crores</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Mutual Fund distributors earned <strong>₹21,000 crores in FY 2024-25</strong>, a 40% growth over the previous financial year. Of this, the top distributors took a lion's share of the earnings.
              </p>
            </div>

            <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
              <p className="text-2xl md:text-3xl font-bold text-emerald-600 text-center">
                Bharosa is driven by creating wealth for all investors and enabling advisors to give high quality advice with minimal effort — harnessing the power of AI to accomplish this goal.
              </p>
            </div>
          </div>
        </section>

        {/* Accuracy Matters Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              At Bharosa, Accuracy Matters
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              When money is involved, small mistakes aren't small. A wrong decimal, a missed trend, or a lazy assumption can change outcomes in a real way. Our team comes from environments where precision isn't a nice-to-have—it's the job. That mindset sits at the core of everything we build.
            </p>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-16 md:py-24 px-6 bg-emerald-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              What Makes Us Different
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>Most fintech platforms use your data to fuel their business. We don't.</strong>
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your information exists only to help you make better decisions. No selling, no mining, no hidden "partner sharing." We were raised in industries where trust is earned every day, so ethics aren't a checkbox—they're the foundation of the product.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our platform blends thoughtful automation with deep domain expertise so every insight is sharp, reliable, and fast. The goal is simple: help you do more for your clients without drowning in analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our DNA
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Sanjay Bhargava */}
              <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sanjay Bhargava</h3>
                  <p className="text-emerald-600 font-semibold">Co-Founder</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Founding team member at PayPal, credited by Elon Musk and Reid Hoffman as instrumental in its early success. Later invited by Musk to lead Starlink India. Brings decades of experience building systems people trust with their money.
                </p>
              </div>

              {/* Anita Kapur Bhargava */}
              <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Anita Kapur Bhargava</h3>
                  <p className="text-emerald-600 font-semibold">Co-Founder</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Early PayPal leader who built and scaled their Data Warehousing group. Outside tech, she has mobilized more than 50,000 residents to drive civic change. Combines operational depth with the ability to make complex systems work smoothly at scale.
                </p>
              </div>

              {/* Ujjwal Thaakar */}
              <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ujjwal Thaakar</h3>
                  <p className="text-emerald-600 font-semibold">Co-Founder & CEO</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Reported directly to the CEO of Disney Interactive at 22. Built high-performance engineering teams from IIT Bombay and Georgia Tech. Architect of Bharosa's technical backbone, ensuring the platform stays fast, accurate, and dependable.
                </p>
              </div>

              {/* Sahil Bhargava */}
              <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sahil Bhargava</h3>
                  <p className="text-emerald-600 font-semibold">Co-Founder & Chairman</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Nearly ten years across private and public markets. Spent four years at Apollo Global Management (AUM ~$500B), where he was rated the top associate in his class. He designed the analytical engine that powers Bharosa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 bg-emerald-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to Transform Your Advisory Practice?
            </h2>
            <p className="text-xl text-gray-600">
              See how Bharosa can help you deliver exceptional value to your clients
            </p>
            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
