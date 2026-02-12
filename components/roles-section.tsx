"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const roles = [
  {
    title: "The Hunter",
    subtitle: "Solo",
    description:
      "Become the nightmare. Stalk, trap, and sacrifice your prey using dark powers that grow stronger with every kill. Each Hunter wields a unique ability forged in blood.",
    image: "/images/killer-role.jpg",
    cta: "Explore Hunters",
  },
  {
    title: "The Survivor",
    subtitle: "Co-op",
    description:
      "Work together or die alone. Repair blood altars, evade the Hunter, and escape the cursed grounds before the fog consumes you. Teamwork is your only weapon.",
    image: "/images/survivor-role.jpg",
    cta: "Explore Survivors",
  },
]

export function RolesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="gameplay" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_85%_45%/0.05)_0%,_transparent_70%)]" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            Choose Your Fate
          </p>
          <h2 className="font-horror text-5xl md:text-6xl lg:text-7xl text-foreground text-shadow-blood">
            Play As
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className={`group relative overflow-hidden border border-border hover:border-blood/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 200 + 300}ms` }}
            >
              {/* Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={role.image || "/placeholder.svg"}
                  alt={role.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Red glow on hover */}
                <div className="absolute inset-0 bg-blood/0 group-hover:bg-blood/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-blood text-xs uppercase tracking-[0.3em] font-semibold">
                  {role.subtitle}
                </span>
                <h3 className="font-horror text-4xl lg:text-5xl text-foreground mt-2 group-hover:text-shadow-blood transition-all duration-300">
                  {role.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed text-sm lg:text-base max-w-md">
                  {role.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blood/20 border border-blood/40 text-blood text-sm uppercase tracking-wider font-semibold hover:bg-blood hover:text-primary-foreground transition-all duration-300"
                >
                  {role.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
