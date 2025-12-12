import Link from "next/link";
import UserMenu from "./UserMenu";

export default function DashboardNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/dashboard"
            className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
          >
            Bharosa Technoserve
          </Link>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
