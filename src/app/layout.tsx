import './globals.css'
import StoreProvider from '@/redux/store/StoreProvider'
import FooterSection from '@/components/FooterSection'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <StoreProvider>
          <div className='relative min-h-screen'>
            {children}

            {/* Absolute positioned element */}
            <Header></Header>
          </div>
          {/* footer */}
          <FooterSection></FooterSection>
        </StoreProvider>

      </body>
    </html>
  )
}