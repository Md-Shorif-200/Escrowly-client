import UserDashboardSidebar from "@/components/User-Dashboard/UserDashboardSidebar";




export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-primary-background">
 
      <UserDashboardSidebar />

      {/* Main Content */}
   
      <main className="transition-all duration-300 lg:ml-64">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}