import { DashboardSidebar } from '@/components/dashboard/sidebar'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
