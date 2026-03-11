import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { TextSelectionExplainer } from '@/components/text-selection-explainer';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cuộc Chiến Của Riêng Ai? | Kháng Chiến Chống Mỹ 1954-1975',
  description: 'Khám phá lịch sử kháng chiến chống Mỹ dưới góc nhìn thời đại và đường lối lãnh đạo của Đảng Cộng sản Việt Nam. Một cuộc chiến không chỉ của Việt Nam, mà của cả nhân loại.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <TextSelectionExplainer />
      </body>
    </html>
  )
}
