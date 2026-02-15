"use client"

import React from "react"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(0_85%_45%/0.1)_0%,_transparent_50%)]" />

      {/* Decorative blood lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-14 h-14 mx-auto mb-6 bg-blood/20 border border-blood/40 flex items-center justify-center">
            <Mail className="w-6 h-6 text-blood" />
          </div>
          <p className="text-blood uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            Stay One Step Ahead
          </p>
          <h2 className="font-horror text-4xl md:text-5xl text-foreground text-shadow-blood">
            Join the Hunt
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Get all the latest Dread By Blood news, updates, and exclusive content
            delivered straight to your inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mt-8 flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-blood text-primary-foreground font-bold uppercase text-sm tracking-wider hover:bg-blood-dark transition-all duration-300 whitespace-nowrap"
          >
            {submitted ? "Subscribed!" : "Sign Up"}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-blood text-sm animate-slide-up">
            Welcome to the fog. Watch your inbox.
          </p>
        )}

        <p
          className={`mt-6 text-xs text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          By signing up, you agree to receive newsletters and promotional content.
          You can unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
