"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Function to handle mouse leaving the viewport (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (!hasTriggered && e.clientY <= 5) {
        setIsVisible(true)
        setHasTriggered(true)
      }
    }

    // Function to handle back button (simulated for mobile)
    const handleVisibilityChange = () => {
      if (!hasTriggered && document.visibilityState === "hidden") {
        setIsVisible(true)
        setHasTriggered(true)
      }
    }

    // Add event listeners
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Cleanup
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [hasTriggered])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-xs w-full p-4 relative animate-fadeIn border border-gray-700">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-300 transition-colors"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🎁</span>
          </div>
          <h3 className="text-lg font-bold text-gray-200 mb-2">Espere um momento!</h3>
          <p className="text-gray-400 text-xs">
            Temos uma oferta especial reservada para você. Aproveite o desconto exclusivo e os bônus para ajudar na
            saúde do seu filho.
          </p>
        </div>

        <div className="space-y-2">
          <Link href="/checkout?discount=true" className="block">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 rounded-full text-sm shadow-md active:scale-[0.98] transition-transform">
              Aproveitar oferta
            </Button>
          </Link>

          <button onClick={() => setIsVisible(false)} className="w-full text-gray-400 text-xs py-2 hover:text-gray-300">
            Vou pensar um pouco mais
          </button>
        </div>
      </div>
    </div>
  )
}
