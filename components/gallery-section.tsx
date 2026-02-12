"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const galleryItems = [
  {
    title: "The Thrill of the Hunt",
    description:
      "Stalk your prey from the shadows. Every Hunter has unique powers that make each trial a terrifying new experience.",
    image: "/images/gameplay-hunt.jpg",
  },
  {
    title: "Survive Together",
    description:
      "Repair blood altars, rescue teammates, and outsmart the Hunter. Cooperation is the key to escape.",
    image: "/images/gameplay-survive.jpg",
  },
  {
    title: "The Final Escape",
    description:
      "Race to unseal the exit gates before the fog closes in. Every second counts in the final moments of a trial.",
    image: "/images/gameplay-escape.jpg",
  },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(0_85%_45%/0.05)_0%,_transparent_50%)]" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            Experience the Terror
          </p>
          <h2 className="font-horror text-5xl md:text-6xl lg:text-7xl text-foreground text-shadow-blood">
            Gameplay Gallery
          </h2>
        </div>

        <div className="space-y-8">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`group grid lg:grid-cols-2 gap-0 border border-border hover:border-blood/40 transition-all duration-700 overflow-hidden ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 200 + 300}ms` }}
            >
              <div className={`relative h-[280px] lg:h-[360px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blood/0 group-hover:bg-blood/10 transition-colors duration-500" />
              </div>
              <div className={`flex flex-col justify-center p-8 lg:p-12 bg-card ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-blood text-xs uppercase tracking-[0.3em] font-semibold">
                  {`Feature 0${i + 1}`}
                </span>
                <h3 className="font-horror text-3xl lg:text-4xl text-card-foreground mt-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 w-12 h-[2px] bg-blood group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
