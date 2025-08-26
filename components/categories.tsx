import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Tablas de Pino",
    image: "/pine-wood-planks-lumber-yard.png",
    description: "Ideales para construcción y carpintería general",
  },
  {
    title: "Vigas",
    image: "/wooden-beams-construction-lumber-structural.png",
    description: "Estructuras robustas para construcción",
  },
  {
    title: "Decks",
    image: "/wooden-deck-boards-outdoor-lumber.png",
    description: "Maderas tratadas para exteriores",
  },
  {
    title: "Maderas Nobles",
    image: "/premium-hardwood-noble-wood-varieties.png",
    description: "Especies selectas para proyectos especiales",
  },
]

export function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestras Categorías</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras diferentes categorías de productos, cada una diseñada para satisfacer necesidades
            específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-accent/20"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div
                    className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-serif text-lg font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
