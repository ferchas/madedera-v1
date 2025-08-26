import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 wood-texture">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <div className="text-xl font-bold text-primary-foreground font-serif">M</div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Maderas Artesanales</h3>
                <p className="text-sm opacity-80">Maderas que construyen confianza</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 max-w-md">
              Empresa familiar especializada en la venta de maderas de calidad. Ofrecemos desde tablas de pino hasta
              maderas nobles, siempre con el compromiso de la excelencia.
            </p>
            <Button
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar Catálogo PDF
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 opacity-80" />
                <span className="text-sm">Av. Industrial 123, Ciudad</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 opacity-80" />
                <span className="text-sm">+34 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 opacity-80" />
                <span className="text-sm">info@maderasartesanales.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Enlaces</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Catálogo Completo
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Proyectos
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 md:mb-0">© 2024 Maderas Artesanales. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-8">
          <div className="w-full h-48 bg-muted/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 opacity-60" />
              <p className="text-sm opacity-80">Ubicación en Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
