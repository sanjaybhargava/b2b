import DashboardNav from "@/components/dashboard/DashboardNav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardNav />
      <main className="pt-16 min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  );
}
