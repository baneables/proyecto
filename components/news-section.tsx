"use client"

import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    category: "Update",
    date: "Feb 5, 2026",
    title: "Patch 8.4.0: Balance Changes & New Perks",
    excerpt:
      "Major balance adjustments to The Wraith and new perks for all survivors. Read the full patch notes.",
  },
  {
    category: "Event",
    date: "Jan 28, 2026",
    title: "Blood Moon Festival Returns",
    excerpt:
      "Earn exclusive cosmetics and double bloodpoints during our limited-time Blood Moon event.",
  },
  {
    category: "Community",
    date: "Jan 20, 2026",
    title: "Community Tournament: Season 3 Finals",
    excerpt:
      "Watch the top teams compete for the Season 3 championship title live on Twitch.",
  },
  {
    category: "Dev Blog",
    date: "Jan 12, 2026",
    title: "Behind the Fog: Designing The Warden",
    excerpt:
      "Our art team reveals the creative process behind our newest Hunter character.",
  },
]

export function NewsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="news" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(0_85%_45%/0.05)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
              Stay Informed
            </p>
            <h2 className="font-horror text-5xl md:text-6xl lg:text-7xl text-foreground text-shadow-blood">
              Latest News
            </h2>
          </div>
          <Link
            href="#"
            className={`hidden md:inline-flex items-center gap-2 text-blood text-sm uppercase tracking-wider font-semibold hover:gap-4 transition-all duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, i) => (
            <Link
              key={item.title}
              href="#"
              className={`group flex flex-col p-6 bg-card border border-border hover:border-blood/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-blood/20 text-blood text-xs uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-card-foreground text-base leading-snug group-hover:text-blood transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-1">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">{item.date}</span>
              </div>
              <div className="mt-4 w-0 h-[2px] bg-blood group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-blood text-sm uppercase tracking-wider font-semibold"
          >
            All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
