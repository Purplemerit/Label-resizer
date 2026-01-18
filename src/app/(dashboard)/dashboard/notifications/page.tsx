import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { NotificationsContent } from "@/components/dashboard/notifications/notifications-content"

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <NotificationsContent />
        </main>
      </div>
    </div>
  )
}
