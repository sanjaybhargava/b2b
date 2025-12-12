import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <strong className="text-gray-300">Email:</strong>{" "}
                <a href="mailto:prachi@bharosaclub.com" className="hover:text-emerald-400 transition-colors">
                  prachi@bharosaclub.com
                </a>
              </p>
              <p>
                <strong className="text-gray-300">Phone:</strong>{" "}
                <a href="tel:+919783892909" className="hover:text-emerald-400 transition-colors">
                  +91 97838 92909
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            © 2024 Bharosa Technoserve Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
