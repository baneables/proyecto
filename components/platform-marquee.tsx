"use client"

import { Monitor, Gamepad2, Smartphone } from "lucide-react"

const platforms = [
  { name: "PC", icon: Monitor },
  { name: "PlayStation", icon: Gamepad2 },
  { name: "Xbox", icon: Gamepad2 },
  { name: "Nintendo Switch", icon: Gamepad2 },
  { name: "Mobile", icon: Smartphone },
]

export function PlatformMarquee() {
  const items = [...platforms, ...platforms, ...platforms]

  return (
    <section className="relative py-6 overflow-hidden border-y border-border bg-card">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((platform, i) => {
          const Icon = platform.icon
          return (
            <div
              key={`${platform.name}-${i}`}
              className="flex items-center gap-3 mx-10"
            >
              <Icon className="w-5 h-5 text-blood shrink-0" />
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                {platform.name}
              </span>
              <span className="text-blood/30 mx-4">|</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
