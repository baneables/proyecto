import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RolesSection } from "@/components/roles-section"
import { CharactersSection } from "@/components/characters-section"
import { LatestReleaseSection } from "@/components/latest-release-section"
import { GallerySection } from "@/components/gallery-section"
import { NewsSection } from "@/components/news-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { PlatformMarquee } from "@/components/platform-marquee"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformMarquee />
      <RolesSection />
      <CharactersSection />
      <LatestReleaseSection />
      <GallerySection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
