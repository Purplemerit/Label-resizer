import { PrintersContent } from "@/components/dashboard/printers/printers-content"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default function PrintersPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <PrintersContent />
        </main>
      </div>
    </div>
  )
}
