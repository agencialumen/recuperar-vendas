"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  minutes: number
  seconds: number
}

export default function CountdownTimer({ minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: minutes,
    seconds: seconds,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-3 text-center">
      <p className="text-xs font-medium text-teal-400 mb-1">Oferta especial expira em:</p>
      <div className="flex items-center justify-center gap-1.5">
        <div className="bg-gray-900 text-teal-400 px-2 py-1 rounded-md shadow-md font-mono font-bold text-base">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="text-teal-400 font-bold">:</span>
        <div className="bg-gray-900 text-teal-400 px-2 py-1 rounded-md shadow-md font-mono font-bold text-base">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}
