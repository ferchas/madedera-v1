import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TreePine, Hammer, Home } from "lucide-react"

const products = [
  {
    title: "Tablas de Pino",
    description: "Tablas de pino de primera calidad, perfectas para construcción y carpintería.",
    image: "/pine-wood-planks-stacked-neatly.png",
    icon: TreePine,
    features: ["Secado natural", "Diferentes medidas", "Tratamiento opcional"],
  },
  {
    title: "Vigas Estructurales",
    description: "Vigas robustas para construcción, disponibles en diversas dimensiones.",
    image: "/wooden-structural-beams-construction-lumber.png",
    icon: Hammer,
    features: ["Alta resistencia", "Medidas estándar", "Certificación de calidad"],
  },
  {
    title: "Maderas Nobles",
    description: "Selección premium de maderas nobles para proyectos especiales.",
    image: "/premium-hardwood-lumber-noble-wood-varieties.png",
    icon: Home,
    features: ["Especies selectas", "Acabado artesanal", "Proyectos únicos"],
  },
]

export function ProductShowcase() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que ofrecemos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos de madera, cada uno seleccionado y preparado con el máximo
            cuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 wood-grain border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-serif text-xl text-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <p className="text-muted-foreground">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Ver más detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
