"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const hunters = [
  {
    name: "The Wraith",
    power: "Spectral Phase",
    description: "Phases between dimensions, becoming invisible to hunt prey unseen.",
    image: "/images/char-wraith.jpg",
  },
  {
    name: "The Butcher",
    power: "Cleaver Frenzy",
    description: "Enters a blood rage, increasing speed and attack power for devastating kills.",
    image: "/images/char-butcher.jpg",
  },
  {
    name: "The Banshee",
    power: "Death Wail",
    description: "Unleashes a supernatural scream that reveals and disorients all survivors.",
    image: "/images/char-banshee.jpg",
  },
]

const survivors = [
  {
    name: "Elena Cross",
    perk: "Field Medic",
    description: "A resourceful nurse who can heal allies faster and craft medical supplies.",
    image: "/images/char-survivor1.jpg",
  },
  {
    name: "Jake Mercer",
    perk: "Iron Will",
    description: "A hardened mechanic who repairs altars faster and resists pain effects.",
    image: "/images/char-survivor2.jpg",
  },
]

type Tab = "hunters" | "survivors"

export function CharactersSection() {
  const [activeTab, setActiveTab] = useState<Tab>("hunters")
  const { ref, isVisible } = useScrollReveal()

  const characters = activeTab === "hunters" ? hunters : survivors

  return (
    <section id="characters" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(0_85%_45%/0.08)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            Icons of Terror
          </p>
          <h2 className="font-horror text-5xl md:text-6xl lg:text-7xl text-foreground text-shadow-blood">
            Characters
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Master deadly hunters or brave survivors. Each character brings unique abilities
            to the blood-soaked trials.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            type="button"
            onClick={() => setActiveTab("hunters")}
            className={`px-8 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
              activeTab === "hunters"
                ? "bg-blood text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border hover:border-blood/40 hover:text-foreground"
            }`}
          >
            Hunters
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("survivors")}
            className={`px-8 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
              activeTab === "survivors"
                ? "bg-blood text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border hover:border-blood/40 hover:text-foreground"
            }`}
          >
            Survivors
          </button>
        </div>

        {/* Characters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char, i) => (
            <div
              key={char.name}
              className={`group relative overflow-hidden border border-border hover:border-blood/60 transition-all duration-700 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 150 + 400}ms` }}
            >
              <div className="relative h-[350px] lg:h-[420px] overflow-hidden">
                <Image
                  src={char.image || "/placeholder.svg"}
                  alt={char.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Red line top */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-blood group-hover:w-full transition-all duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blood text-xs uppercase tracking-[0.3em] font-semibold">
                  {"power" in char ? char.power : char.perk}
                </span>
                <h3 className="font-horror text-2xl lg:text-3xl text-foreground mt-1">
                  {char.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {char.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 border border-blood/40 text-blood uppercase tracking-widest text-sm font-bold hover:bg-blood hover:text-primary-foreground transition-all duration-300 bg-transparent"
          >
            View All Characters
          </Link>
        </div>
      </div>
    </section>
  )
}
