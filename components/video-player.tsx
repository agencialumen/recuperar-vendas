"use client"

import { useState, useEffect } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

// ===== CONFIGURAÇÕES DO VÍDEO - EDITE APENAS ESTAS LINHAS =====
// URL do vídeo (YouTube, Vimeo, etc.)
const VIDEO_URL = "https://vimeo.com/1081126802/7c34767b59?ts=0&share=copy" // Substitua pelo seu link de vídeo

// URL da imagem de capa (thumbnail)
const THUMBNAIL_URL = "https://iili.io/3wF4CjR.jpg" // Substitua pelo URL da sua imagem de capa

// Duração do vídeo em segundos (para mostrar a oferta)
const VIDEO_DURATION = 50 // Substitua pela duração real do seu vídeo em segundos
// =============================================================

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [showOffer, setShowOffer] = useState(false)

  // Função para iniciar o vídeo
  const handlePlay = () => {
    setIsPlaying(true)

    // Simula o término do vídeo após a duração configurada
    setTimeout(() => {
      setVideoCompleted(true)
    }, VIDEO_DURATION * 1000)
  }

  // Efeito para mostrar a oferta com uma animação suave após o vídeo terminar
  useEffect(() => {
    if (videoCompleted) {
      setTimeout(() => {
        setShowOffer(true)
      }, 1000)
    }
  }, [videoCompleted])

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-950 rounded-lg overflow-hidden shadow-md">
        {/* Thumbnail personalizada com botão de play */}
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-cover bg-center z-10 flex flex-col items-center justify-center p-3"
            style={{ backgroundImage: `url(${THUMBNAIL_URL})`, backgroundSize: "cover" }}
          >
            {/* Overlay escuro para melhorar a legibilidade do texto */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="mb-3 text-center relative z-10">
              <h3 className="text-sm font-bold mb-1 text-white">
                Descubra como este método natural está transformando a saúde de milhares de crianças
              </h3>
              <p className="text-gray-200 text-xs">
                Uma mensagem especial para você de uma mãe que já passou pelo mesmo desafio
              </p>
            </div>
            <button
              onClick={handlePlay}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-3 transition-all active:scale-[0.95] shadow-md relative z-10"
              aria-label="Reproduzir vídeo"
            >
              <Play size={20} fill="white" />
            </button>
          </div>
        )}

        {/* Vídeo incorporado (iframe) */}
        {isPlaying && (
          <iframe
            src={VIDEO_URL}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}

        {/* Indicador de vídeo completo */}
        {videoCompleted && (
          <div className="absolute bottom-3 right-3 bg-teal-900 bg-opacity-80 text-teal-400 text-xs px-2 py-1 rounded-full">
            ✓ Vídeo completo
          </div>
        )}
      </div>

      {/* Oferta especial que aparece após o vídeo */}
      {showOffer && (
        <div
          className={`bg-gray-800 rounded-lg p-4 border border-teal-900 shadow-lg transition-all duration-500 ${
            showOffer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block bg-teal-900 text-teal-300 text-xs font-medium px-2 py-1 rounded-full mb-2">
            Oferta Exclusiva
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-200">Método Completo de Saúde Infantil Natural</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-500 line-through text-sm">De R$97</span>
            <span className="text-xl font-bold text-teal-400">Por apenas R$47</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <div className="absolute -top-2 -right-2 bg-teal-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full rotate-12">
                BÔNUS
              </div>
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Produto"
                className="w-full h-full rounded-lg shadow-sm object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">Acesso imediato ao método completo</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">Guia de 7 Alimentos para Imunidade</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">Cardápio Imune para 7 dias</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/checkout?discount=true">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-full text-sm w-full shadow-md active:scale-[0.98] transition-transform">
                GARANTIR MINHA OFERTA ESPECIAL
              </Button>
            </Link>
            <p className="text-xs text-gray-400 mt-2">Oferta por tempo limitado • Pagamento 100% seguro</p>
          </div>
        </div>
      )}

      {/* Mensagem para incentivar a assistir o vídeo */}
      {isPlaying && !videoCompleted && (
        <div className="text-center text-xs text-gray-400">
          Assista a mensagem completa para desbloquear sua oferta especial...
        </div>
      )}
    </div>
  )
}
