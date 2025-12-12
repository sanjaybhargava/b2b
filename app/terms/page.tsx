import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[120px] pb-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-8">
            Terms of Service
          </h1>
          <p className="text-lg text-[#666666] mb-8">
            Content coming soon.
          </p>
          <Link
            href="/"
            className="text-[#0066FF] hover:underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
