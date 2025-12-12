import Link from "next/link";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export default function DashboardCard({ title, description, href, icon }: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    >
      {/* Icon Container */}
      <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
