import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center wood-texture">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/rustic-wood-texture-background-with-natural-grain-.png')",
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center shadow-lg">
            <div className="text-3xl font-bold text-secondary-foreground font-serif">M</div>
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 drop-shadow-lg">
          Maderas que construyen
          <span className="block text-primary">confianza</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-sans">
          Empresa familiar con más de 20 años de experiencia en maderas de calidad. Desde vigas hasta acabados
          artesanales, construimos con pasión y tradición.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4">
            Ver Catálogo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}
