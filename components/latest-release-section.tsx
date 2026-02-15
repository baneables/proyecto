"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Play } from "lucide-react"

export function LatestReleaseSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(0_85%_45%/0.06)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            New Release
          </p>
          <h2 className="font-horror text-5xl md:text-6xl lg:text-7xl text-foreground text-shadow-blood mb-12">
            Latest Chapter
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div
            className={`relative group overflow-hidden border border-border hover:border-blood/40 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative h-[300px] lg:h-[420px] overflow-hidden">
              <Image
                src="/images/news-chapter.jpg"
                alt="Chapter VI: The Asylum"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blood/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-red">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <span className="text-blood text-xs uppercase tracking-[0.3em] font-semibold">
              Chapter VI
            </span>
            <h3 className="font-horror text-3xl lg:text-5xl text-foreground mt-2">
              The Asylum
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {"Dread By Blood: The Asylum introduces a terrifying new chapter to the fog:"}
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "New Hunter: The Warden - Controls the asylum's twisted corridors",
                "New Survivor: Dr. Helena Voss - Uses medical knowledge to aid escape",
                "New Map: Ravencrest Asylum - A labyrinthine institute of horrors",
                "Exclusive Cosmetics: Straitjacket Collection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-blood mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="#"
                className="px-8 py-3 bg-blood text-primary-foreground font-bold uppercase text-sm tracking-wider hover:bg-blood-dark transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider hover:text-blood transition-colors font-semibold"
              >
                <Play className="w-4 h-4" />
                Watch Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
