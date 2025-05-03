import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Saúde Infantil Natural - Oferta Especial",
  description: "Método completo para fortalecer a saúde do seu filho naturalmente",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  generator: "v0.dev",
  themeColor: "#0f766e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <meta name="theme-color" content="#0f766e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-screen bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="mobile-app-container momentum-scroll">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
