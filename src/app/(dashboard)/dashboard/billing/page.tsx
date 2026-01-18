import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { BillingContent } from "@/components/dashboard/billing/billing-content"

export default function BillingPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <BillingContent />
        </main>
      </div>
    </div>
  )
}
