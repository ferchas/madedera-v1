import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Empresa Familiar",
    description: "Tres generaciones dedicadas al trabajo con madera",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Seleccionamos cada pieza con estándares rigurosos",
  },
  {
    icon: Clock,
    title: "20+ Años de Experiencia",
    description: "Décadas perfeccionando nuestro oficio",
  },
  {
    icon: Heart,
    title: "Pasión por la Madera",
    description: "Amor genuino por el trabajo artesanal",
  },
]

export function AboutUs() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Comenzamos como un pequeño taller familiar en 2003, con la visión de ofrecer maderas de la más alta
                calidad a constructores y carpinteros de nuestra región.
              </p>
              <p>
                Lo que empezó como una pasión por el trabajo artesanal se ha convertido en una empresa de confianza que
                abastece proyectos desde pequeñas reparaciones hasta grandes construcciones.
              </p>
              <p>
                Hoy, tres generaciones de nuestra familia trabajan juntas, manteniendo los valores tradicionales
                mientras incorporamos las mejores prácticas modernas en el tratamiento y selección de maderas.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('/family-woodworking-business-craftsmen-at-work-lumb.png')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-border/50">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
