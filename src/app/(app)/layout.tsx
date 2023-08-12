import { Sidebar } from '@/components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />
      <div className="px-8 pb-12 pt-8">{children}</div>
    </div>
  )
}
