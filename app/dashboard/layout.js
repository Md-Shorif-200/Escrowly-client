// app/dashboard/layout.jsx
import DashboardSidebar from "@/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Sticky positioning */}
      <div className="sticky top-0 h-screen">
        <DashboardSidebar />
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}