"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { FogParticles } from "./fog-particles"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Dread By Blood dark forest scene"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Fog Layers */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-background via-background/50 to-transparent animate-fog-1" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background/80 to-transparent animate-fog-2" />
      </div>

      {/* Particles */}
      <FogParticles />

      {/* Blood drips */}
      <div className="absolute top-0 left-[15%] w-[2px] h-0 bg-gradient-to-b from-blood to-transparent animate-blood-drip z-[3]" style={{ animationDelay: "1s" }} />
      <div className="absolute top-0 left-[45%] w-[2px] h-0 bg-gradient-to-b from-blood to-transparent animate-blood-drip z-[3]" style={{ animationDelay: "3s" }} />
      <div className="absolute top-0 left-[78%] w-[2px] h-0 bg-gradient-to-b from-blood to-transparent animate-blood-drip z-[3]" style={{ animationDelay: "5s" }} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4 animate-flicker">
            A Multiplayer Survival Horror Experience
          </p>
        </div>

        <h1
          className={`font-horror text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground text-shadow-blood text-balance leading-[0.9] transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          DREAD
          <br />
          <span className="text-blood">BY BLOOD</span>
        </h1>

        <p
          className={`mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hunt or be hunted. Every trial is a fight for survival in the fog.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#play"
            className="px-10 py-4 bg-blood text-primary-foreground font-bold uppercase text-sm tracking-widest hover:bg-blood-dark transition-all duration-300 animate-pulse-red"
          >
            Play Free Now
          </Link>
          <Link
            href="#gameplay"
            className="px-10 py-4 border border-foreground/30 text-foreground font-bold uppercase text-sm tracking-widest hover:border-blood hover:text-blood transition-all duration-300 bg-transparent"
          >
            Watch Trailer
          </Link>
        </div>

        {/* Player Count */}
        <div
          className={`mt-12 flex items-center gap-8 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <p className="font-horror text-3xl text-blood">50M+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Players</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-horror text-3xl text-blood">9.2</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Rating</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-horror text-3xl text-blood">30+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Hunters</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-blood" />
      </div>
    </section>
  )
}
