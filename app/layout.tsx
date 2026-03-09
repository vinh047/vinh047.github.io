import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vinh | Software Engineer',
  description: 'Portfolio of Nguyen Duc Vinh - Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Thêm scroll-smooth và scroll-pt-20 vào đây
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}