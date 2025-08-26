import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Categories } from "@/components/categories"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Categories />
      <AboutUs />
      <Footer />
    </main>
  )
}
