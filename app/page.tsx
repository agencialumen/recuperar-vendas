import Link from "next/link"
import ExitIntentPopup from "@/components/exit-intent-popup"
import CountdownTimer from "@/components/countdown-timer"
import VideoPlayer from "@/components/video-player"
import TestimonialCard from "@/components/testimonial-card"

export default function CheckoutRecoveryPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header - Simplified for mobile */}
      <header className="bg-gradient-to-r from-teal-800 to-teal-900 py-3 px-4 text-white text-center shadow-md sticky top-0 z-10">
        <p className="text-sm font-medium">Oferta especial reservada para você</p>
      </header>

      <main className="px-4 py-4 max-w-md mx-auto">
        {/* Headline - Reduced font size for mobile */}
        <div className="text-center mb-5">
          <h1 className="text-xl font-bold text-teal-400 mb-2">
            Não perca a oportunidade de transformar a saúde do seu filho
          </h1>
          <h2 className="text-sm font-medium text-gray-300">
            Você está a um passo de garantir o acesso ao método que já ajudou mais de 137.000 crianças
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 border border-gray-700">
          {/* Countdown Timer */}
          <div className="p-3 border-b border-gray-700">
            <CountdownTimer minutes={5} seconds={0} />
          </div>

          {/* VSL Video */}
          <div className="p-3">
            <VideoPlayer />
          </div>
        </div>

        {/* Why Choose Us - Mobile optimized */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-center mb-4 text-gray-200">
            Por que milhares de mães confiam neste método
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg shadow-md flex items-center gap-3 border border-gray-700">
              <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-gray-200">100% Natural</h4>
                <p className="text-gray-400 text-xs">Métodos que fortalecem o sistema imunológico sem medicamentos</p>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-md flex items-center gap-3 border border-gray-700">
              <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⏱️</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-gray-200">Resultados Rápidos</h4>
                <p className="text-gray-400 text-xs">Muitas mães relatam melhorias na saúde em apenas 7 dias</p>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-md flex items-center gap-3 border border-gray-700">
              <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👩‍⚕️</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-gray-200">Aprovado por Especialistas</h4>
                <p className="text-gray-400 text-xs">Desenvolvido com orientação de pediatras e nutricionistas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Mobile optimized */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-center mb-4 text-gray-200">Histórias reais de mães como você</h3>
          <div className="space-y-3">
            <TestimonialCard
              name="Ana Paula"
              location="São Paulo, SP"
              image="https://iili.io/3No3THg.md.jpg"
              text="Meu filho tinha gripes constantes. Depois de aplicar o método, já são 3 meses sem nenhum problema."
              rating={5}
            />
            <TestimonialCard
              name="Mariana Costa"
              location="Rio de Janeiro, RJ"
              image="https://iili.io/3NoFf7n.md.jpg"
              text="Eu estava cansada de tantos antibióticos. Esse método natural mudou completamente nossa rotina."
              rating={5}
            />
          </div>
          <div className="text-center mt-3">
            <button className="text-teal-400 text-xs font-medium hover:underline">Ver mais depoimentos</button>
          </div>
        </div>

        {/* FAQ Section - Mobile optimized */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-6 border border-gray-700">
          <h3 className="text-lg font-bold mb-3 text-gray-200">Perguntas Frequentes</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-sm text-gray-200 mb-1">Quanto tempo leva para ver resultados?</h4>
              <p className="text-gray-400 text-xs">
                Muitas mães relatam melhorias na saúde dos filhos em apenas 7 dias seguindo nosso método.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-200 mb-1">O método substitui consultas médicas?</h4>
              <p className="text-gray-400 text-xs">
                Não. Nosso método é complementar e focado na prevenção. Sempre recomendamos manter o acompanhamento
                pediátrico regular.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee - Mobile optimized */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-6 flex items-center gap-3 border border-gray-700">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-1 text-gray-200">Garantia de 7 dias</h3>
            <p className="text-xs text-gray-400">
              Se você não ficar satisfeita com os resultados, devolvemos 100% do seu investimento. Sem perguntas.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-4 text-center text-xs text-gray-500 border-t border-gray-800">
        <div className="px-4">
          <p>© {new Date().getFullYear()} Saúde Infantil Natural. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-3">
            <Link href="/termos" className="hover:underline text-gray-400">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:underline text-gray-400">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  )
}
