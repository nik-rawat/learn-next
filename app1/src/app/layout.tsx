import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next.js App - Nik",
    template: "%s | Next.js App",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: '1rem',
            backgroundColor: 'lightblue',
          }}
        >
          <p>Header</p>
        </header>

        {children}

        <footer
          style={{
            padding: '1rem',
            backgroundColor: 'ghostwhite',
          }}
        >
          <p>Footer</p> 
        </footer>

      </body>
    </html>
  )
}
